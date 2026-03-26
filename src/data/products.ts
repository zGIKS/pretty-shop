import type { Product } from "@/lib/products/types";

export const productsCatalog: Product[] = [
  {
    id: "crema-hidro-nutritiva",
    title: "Crema hidro nutritiva",
    description: "Crema de apoyo para hidratacion y nutricion diaria de la piel.",
    category: "Skincare",
    image: "/products/crema-hidro-nutritiva.png",
  },
  {
    id: "dermolimpiador-facial",
    title: "Dermolimpiador facial",
    description: "Limpieza suave para retirar impurezas y residuos sin resecar.",
    category: "Limpieza",
    image: "/products/dermolimpiador-facial.png",
  },
  {
    id: "fotoprotector",
    title: "Fotoprotector",
    description: "Proteccion diaria frente a la exposicion solar y el fotoenvejecimiento.",
    category: "Proteccion solar",
    image: "/products/fotoprotector.png",
  },
  {
    id: "locion-tonica",
    title: "Locion tonica",
    description: "Locion de apoyo para refrescar, equilibrar y preparar la piel.",
    category: "Skincare",
    image: "/products/locion-tonica.png",
  },
  {
    id: "serum-acido-hialuronico",
    title: "Serum acido hialuronico",
    description: "Serum hidratante para mejorar confort y apariencia de la piel.",
    category: "Serums",
    image: "/products/serum-acido-hialuronico.png",
  },
  {
    id: "serum-despigmentante",
    title: "Serum despigmentante",
    description: "Serum de apoyo para rutina enfocada en tono desigual y manchas.",
    category: "Serums",
    image: "/products/serum-despigmentante.png",
  },
  {
    id: "pack-productos",
    title: "Pack de productos",
    description: "Incluye dermolimpiador, serum, fotoprotector y vincha para tu rutina facial.",
    category: "Packs",
    image: "/products/pack-productos.png",
  },
];
