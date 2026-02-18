"use client";

import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getAccessToken, logout } from "@/lib/auth";
import {
  createProduct,
  deleteProduct,
  getProducts,
  Product,
  ProductMutationInput,
  uploadProductImage,
  updateProduct,
} from "@/lib/products";

type AdminView = "create" | "products";

type ProductForm = {
  title: string;
  description: string;
  price: string;
};

const INITIAL_FORM: ProductForm = {
  title: "",
  description: "",
  price: "",
};

const currency = new Intl.NumberFormat("es-DO", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export default function AdminPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [actionError, setActionError] = useState<string | null>(null);
  const [actionSuccess, setActionSuccess] = useState<string | null>(null);
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [form, setForm] = useState<ProductForm>(INITIAL_FORM);
  const [selectedImageFile, setSelectedImageFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [selectedImagePreviewUrl, setSelectedImagePreviewUrl] = useState<string | null>(null);

  const isEditing = editingProductId !== null;
  const isBusy = submitting || uploadingImage;
  const currentView = (searchParams.get("view") === "create" ? "create" : "products") as AdminView;
  const editIdFromUrl = searchParams.get("edit");

  const loadProducts = useCallback(async () => {
    setLoading(true);
    setActionError(null);
    try {
      const data = await getProducts();
      setProducts(data);
    } catch {
      setActionError("No se pudieron cargar los productos.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const token = getAccessToken();
    if (!token) {
      router.replace("/login");
      return;
    }
    void loadProducts();
  }, [loadProducts, router]);

  useEffect(() => {
    if (!editIdFromUrl) {
      setEditingProductId(null);
      return;
    }

    const productToEdit = products.find((product) => product.id === editIdFromUrl);
    if (!productToEdit) return;

    setEditingProductId(productToEdit.id);
    setForm({
      title: productToEdit.title,
      description: productToEdit.description,
      price: String(productToEdit.price),
    });
    setSelectedImageFile(null);
    setUploadedImageUrl(productToEdit.image);
    setSelectedImagePreviewUrl(null);
  }, [editIdFromUrl, products]);

  useEffect(() => {
    if (!selectedImageFile) {
      setSelectedImagePreviewUrl(null);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedImageFile);
    setSelectedImagePreviewUrl(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedImageFile]);

  const goToView = (view: AdminView, editId?: string) => {
    const params = new URLSearchParams();
    params.set("view", view);
    if (editId) params.set("edit", editId);
    router.push(`/admin?${params.toString()}`);
  };

  const clearForm = () => {
    setForm(INITIAL_FORM);
    setEditingProductId(null);
    setSelectedImageFile(null);
    setUploadedImageUrl("");
    setSelectedImagePreviewUrl(null);
  };

  const productsCountText = useMemo(() => {
    if (loading) return "Cargando productos...";
    if (products.length === 0) return "No hay productos.";
    return `${products.length} producto${products.length === 1 ? "" : "s"} cargado${products.length === 1 ? "" : "s"}.`;
  }, [loading, products.length]);

  const handleLogout = async () => {
    await logout();
    router.replace("/login");
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedImageFile(file);
    setActionError(null);
    setActionSuccess(null);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const title = form.title.trim();
    const description = form.description.trim();
    const price = Number(form.price);

    if (!title || !description || Number.isNaN(price)) {
      setActionError("Completa todos los campos correctamente.");
      return;
    }

    if (price < 0) {
      setActionError("El precio debe ser mayor o igual a 0.");
      return;
    }

    let imageURL = uploadedImageUrl;

    if (selectedImageFile) {
      setUploadingImage(true);
      try {
        imageURL = await uploadProductImage(selectedImageFile);
        setUploadedImageUrl(imageURL);
      } catch {
        setActionError("No se pudo subir la imagen.");
        setUploadingImage(false);
        return;
      }
      setUploadingImage(false);
    }

    if (!imageURL) {
      setActionError("Debes seleccionar una imagen.");
      return;
    }

    const payload: ProductMutationInput = {
      title,
      description,
      image_url: imageURL,
      price,
    };

    setSubmitting(true);
    setActionError(null);
    setActionSuccess(null);

    try {
      if (isEditing && editingProductId) {
        await updateProduct(editingProductId, payload);
        setActionSuccess("Producto actualizado.");
      } else {
        await createProduct(payload);
        setActionSuccess("Producto creado.");
      }

      clearForm();
      goToView("products");
      await loadProducts();
    } catch {
      setActionError(isEditing ? "No se pudo actualizar el producto." : "No se pudo crear el producto.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (product: Product) => {
    setActionError(null);
    setActionSuccess(null);
    goToView("create", product.id);
  };

  const handleDelete = async (productId: string) => {
    if (!confirm("¿Seguro que quieres borrar este producto?")) return;

    setSubmitting(true);
    setActionError(null);
    setActionSuccess(null);

    try {
      await deleteProduct(productId);
      setActionSuccess("Producto eliminado.");
      if (editingProductId === productId) {
        clearForm();
      }
      await loadProducts();
    } catch {
      setActionError("No se pudo eliminar el producto.");
    } finally {
      setSubmitting(false);
    }
  };

  const previewSrc = selectedImagePreviewUrl ?? uploadedImageUrl;

  return (
    <main className="min-h-screen bg-zinc-50 p-4 md:p-6">
      <section className="mx-auto flex w-full max-w-7xl gap-4">
        <aside className="w-64 shrink-0 rounded-xl border border-border bg-white p-4 shadow-sm">
          <h1 className="text-2xl font-semibold tracking-tight">Admin</h1>
          <p className="mt-1 text-xs text-muted-foreground">{productsCountText}</p>

          <nav className="mt-5 flex flex-col gap-2">
            <Button
              type="button"
              variant={currentView === "create" ? "default" : "outline"}
              className="justify-start"
              onClick={() => goToView("create")}
            >
              Crear producto
            </Button>
            <Button
              type="button"
              variant={currentView === "products" ? "default" : "outline"}
              className="justify-start"
              onClick={() => goToView("products")}
            >
              Ver productos
            </Button>
          </nav>

          <Button type="button" variant="outline" className="mt-6 w-full" onClick={() => void handleLogout()}>
            Logout
          </Button>
        </aside>

        <section className="min-w-0 flex-1 space-y-4">
          {actionError ? <Alert variant="destructive" description={actionError} /> : null}
          {actionSuccess ? <Alert variant="success" description={actionSuccess} /> : null}

          {currentView === "create" ? (
            <section className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">
                {isEditing ? "Editar producto" : "Crear producto"}
              </h2>

              <form className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="title">Titulo</Label>
                  <Input
                    id="title"
                    value={form.title}
                    onChange={(event) => setForm((prev) => ({ ...prev, title: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-1">
                  <Label htmlFor="price">Precio</Label>
                  <Input
                    id="price"
                    type="number"
                    min="0"
                    step="0.01"
                    value={form.price}
                    onChange={(event) => setForm((prev) => ({ ...prev, price: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="description">Descripcion</Label>
                  <Input
                    id="description"
                    value={form.description}
                    onChange={(event) => setForm((prev) => ({ ...prev, description: event.target.value }))}
                    required
                  />
                </div>

                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="image-file">Imagen</Label>
                  <Input
                    id="image-file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    required={!isEditing && !uploadedImageUrl}
                    className="cursor-pointer"
                  />
                  <p className="text-xs text-muted-foreground">
                    {selectedImageFile
                      ? `Archivo seleccionado: ${selectedImageFile.name}`
                      : uploadedImageUrl
                        ? "Mostrando imagen actual. Puedes subir otra para reemplazarla."
                        : "Selecciona una imagen para continuar."}
                  </p>

                  <div className="rounded-lg border border-dashed border-border bg-zinc-100/60 p-3">
                    {previewSrc ? (
                      <div className="overflow-hidden rounded-md bg-white">
                        <Image
                          src={previewSrc}
                          alt="Preview"
                          width={1100}
                          height={500}
                          className="h-60 w-full object-contain"
                        />
                      </div>
                    ) : (
                      <div className="flex h-48 items-center justify-center rounded-md bg-white text-sm text-muted-foreground">
                        Sin imagen seleccionada
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:col-span-2">
                  <Button type="submit" disabled={isBusy}>
                    {uploadingImage
                      ? "Subiendo imagen..."
                      : submitting
                        ? "Guardando..."
                        : isEditing
                          ? "Actualizar"
                          : "Crear"}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      clearForm();
                      goToView("create");
                    }}
                    disabled={isBusy}
                  >
                    Limpiar
                  </Button>
                </div>
              </form>
            </section>
          ) : (
            <section className="rounded-xl border border-border bg-white p-5 shadow-sm">
              <h2 className="text-xl font-semibold">Todos los productos</h2>
              {loading ? (
                <p className="mt-4 text-sm text-muted-foreground">Cargando...</p>
              ) : products.length === 0 ? (
                <p className="mt-4 text-sm text-muted-foreground">No hay productos para mostrar.</p>
              ) : (
                <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
                  {products.map((product) => (
                    <article key={product.id} className="rounded-lg border border-border p-4">
                      <div className="flex gap-4">
                        <Image
                          src={product.image}
                          alt={product.title}
                          width={80}
                          height={80}
                          className="h-20 w-20 rounded-md object-cover"
                        />
                        <div className="min-w-0 flex-1">
                          <h3 className="line-clamp-2 font-medium">{product.title}</h3>
                          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                            {product.description}
                          </p>
                          <p className="mt-2 text-sm font-semibold">{currency.format(product.price)}</p>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(product)}
                          disabled={isBusy}
                        >
                          Editar
                        </Button>
                        <Button
                          type="button"
                          size="sm"
                          variant="destructive"
                          onClick={() => void handleDelete(product.id)}
                          disabled={isBusy}
                        >
                          Borrar
                        </Button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )}
        </section>
      </section>
    </main>
  );
}
