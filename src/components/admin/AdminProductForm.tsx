"use client";

import { ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface ProductFormValue {
  title: string;
  description: string;
  price: string;
}

interface AdminProductFormProps {
  isEditing: boolean;
  form: ProductFormValue;
  selectedImageFile: File | null;
  uploadedImageUrl: string;
  previewSrc: string;
  isBusy: boolean;
  submitting: boolean;
  uploadingImage: boolean;
  onTitleChange: (value: string) => void;
  onDescriptionChange: (value: string) => void;
  onPriceChange: (value: string) => void;
  onImageChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onClear: () => void;
}

export default function AdminProductForm({
  isEditing,
  form,
  selectedImageFile,
  uploadedImageUrl,
  previewSrc,
  isBusy,
  submitting,
  uploadingImage,
  onTitleChange,
  onDescriptionChange,
  onPriceChange,
  onImageChange,
  onSubmit,
  onClear,
}: AdminProductFormProps) {
  return (
    <Card className="overflow-hidden border-0 bg-gradient-to-b from-card to-muted/40">
      <CardHeader className="border-b bg-card/80 backdrop-blur">
        <CardTitle className="text-2xl">{isEditing ? "Editar producto" : "Crear producto"}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <form className="grid grid-cols-1 gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <div className="space-y-2">
            <Label htmlFor="title">Titulo</Label>
            <Input id="title" value={form.title} onChange={(event) => onTitleChange(event.target.value)} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Precio</Label>
            <Input
              id="price"
              type="number"
              min="0"
              step="0.01"
              value={form.price}
              onChange={(event) => onPriceChange(event.target.value)}
              required
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="description">Descripcion</Label>
            <Input
              id="description"
              value={form.description}
              onChange={(event) => onDescriptionChange(event.target.value)}
              required
            />
          </div>

          <div className="space-y-3 md:col-span-2">
            <Label htmlFor="image-file">Imagen</Label>
            <Input
              id="image-file"
              type="file"
              accept="image/*"
              onChange={onImageChange}
              required={!isEditing && !uploadedImageUrl}
              className="cursor-pointer bg-background"
            />
            <p className="text-xs text-muted-foreground">
              {selectedImageFile
                ? `Archivo seleccionado: ${selectedImageFile.name}`
                : uploadedImageUrl
                  ? "Mostrando imagen actual. Puedes subir otra para reemplazarla."
                  : "Selecciona una imagen para continuar."}
            </p>

            <div className="rounded-xl border border-dashed bg-background p-3">
              {previewSrc ? (
                <div className="overflow-hidden rounded-lg border bg-card">
                  <Image
                    src={previewSrc}
                    alt="Preview"
                    width={1100}
                    height={500}
                    className="h-64 w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex h-56 items-center justify-center rounded-lg border bg-card text-sm text-muted-foreground">
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
            <Button type="button" variant="outline" onClick={onClear} disabled={isBusy}>
              Limpiar
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
