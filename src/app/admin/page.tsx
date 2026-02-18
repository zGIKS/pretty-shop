"use client";

import { ChangeEvent, FormEvent, Suspense, useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Alert } from "@/components/ui/alert";
import AdminProductForm from "@/components/admin/AdminProductForm";
import AdminProductsList from "@/components/admin/AdminProductsList";
import AdminSidebar from "@/components/admin/AdminSidebar";
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

function AdminPageContent() {
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
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-4 md:flex-row">
        <AdminSidebar
          currentView={currentView}
          productsCountText={productsCountText}
          onCreateClick={() => goToView("create")}
          onProductsClick={() => goToView("products")}
          onLogoutClick={() => void handleLogout()}
        />
        <section className="min-w-0 flex-1 space-y-4">
          {actionError ? <Alert variant="destructive" description={actionError} /> : null}
          {actionSuccess ? <Alert variant="success" description={actionSuccess} /> : null}

          {currentView === "create" ? (
            <AdminProductForm
              isEditing={isEditing}
              form={form}
              selectedImageFile={selectedImageFile}
              uploadedImageUrl={uploadedImageUrl}
              previewSrc={previewSrc}
              isBusy={isBusy}
              submitting={submitting}
              uploadingImage={uploadingImage}
              onTitleChange={(value) => setForm((prev) => ({ ...prev, title: value }))}
              onDescriptionChange={(value) => setForm((prev) => ({ ...prev, description: value }))}
              onPriceChange={(value) => setForm((prev) => ({ ...prev, price: value }))}
              onImageChange={handleImageChange}
              onSubmit={handleSubmit}
              onClear={() => {
                clearForm();
                goToView("create");
              }}
            />
          ) : (
            <AdminProductsList
              loading={loading}
              products={products}
              isBusy={isBusy}
              formatPrice={(value) => currency.format(value)}
              onEdit={handleEdit}
              onDelete={(productId) => void handleDelete(productId)}
            />
          )}
        </section>
      </section>
    </main>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<main className="min-h-screen bg-zinc-50 p-4 md:p-6" />}>
      <AdminPageContent />
    </Suspense>
  );
}
