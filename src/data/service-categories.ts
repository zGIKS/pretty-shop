export type Service = {
  name: string;
  price: string;
  description: string;
};

export type ServiceSubcategory = {
  name: string;
  services: Service[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  description: string;
  summary: string;
  accent: string;
  services?: Service[];
  subcategories?: ServiceSubcategory[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "podologia",
    title: "Podología",
    shortTitle: "Podología",
    subtitle: "Cuidado clínico y preventivo para pies sanos.",
    description:
      "Servicios orientados a higiene, alivio del dolor, tratamiento de hongos y bienestar integral.",
    summary: "Profilaxis, uñeros, reflexología y tratamientos especializados.",
    accent: "from-emerald-200 via-white to-emerald-50",
    services: [
      {
        name: "Profilaxis",
        price: "S/ 50",
        description:
          "Limpieza y cuidado preventivo para mantener los pies sanos y libres de durezas.",
      },
      {
        name: "Profilaxis a domicilio",
        price: "Evaluación previa",
        description:
          "Cuidado y limpieza profesional de los pies en casa (previa coordinación).",
      },
      {
        name: "Extracción de uñero",
        price: "S/ 40",
        description:
          "Procedimiento podológico para aliviar el dolor causado por una uña encarnada y prevenir infecciones.",
      },
      {
        name: "Reflexología podal",
        price: "S/ 40",
        description:
          "Masaje terapéutico que estimula puntos del pie para promover bienestar y relajación.",
      },
      {
        name: "Sesión de alta frecuencia",
        price: "S/ 40",
        description:
          "Tratamiento que ayuda a eliminar hongos, desinfectar y mejorar la salud de la piel y las uñas.",
      },
      {
        name: "Tratamiento químico para hongos",
        price: "S/ 120",
        description:
          "Tratamiento aplicado directamente en la uña para hongos muy avanzados.",
      },
      {
        name: "Desintoxicación iónica",
        price: "S/ 50",
        description:
          "Terapia que ayuda a eliminar toxinas y mejorar el bienestar general.",
      },
    ],
  },
  {
    slug: "tratamientos-faciales",
    title: "Tratamientos Faciales",
    shortTitle: "Faciales",
    subtitle: "Rituales de skincare, hidratación y rejuvenecimiento.",
    description:
      "Opciones para limpieza, manchas, acné, hidratación profunda y protocolos anti-age.",
    summary: "Skincare, manchas, acné, hidratación y anti-age.",
    accent: "from-rose-200 via-white to-orange-50",
    subcategories: [
      {
        name: "Skincare",
        services: [
          {
            name: "Limpieza facial básica",
            price: "S/ 70",
            description:
              "Elimina impurezas y células muertas, dejando la piel limpia y fresca.",
          },
          {
            name: "Limpieza facial profunda",
            price: "S/ 100",
            description: "Limpieza intensiva con extracción de puntos negros.",
          },
          {
            name: "Dermaplaning",
            price: "S/ 30",
            description: "Técnica facial que elimina el vello fino del rostro.",
          },
        ],
      },
      {
        name: "Manchas",
        services: [
          {
            name: "Peeling Facial",
            price: "S/ 150",
            description:
              "Renueva la piel, aclara manchas y mejora la textura.",
          },
          {
            name: "ClariDerm",
            price: "S/ 150",
            description:
              "Tratamiento indicado para melasma y manchas por acné.",
          },
        ],
      },
      {
        name: "Hidratación",
        services: [
          {
            name: "HidraLips",
            price: "S/ 100",
            description: "Tratamiento de hidratación profunda para labios.",
          },
          {
            name: "HydraGlow (Ácido hialurónico)",
            price: "S/ 180",
            description:
              "Tratamiento hidratante profundo que mejora elasticidad y luminosidad.",
          },
        ],
      },
      {
        name: "Acné",
        services: [
          {
            name: "Acné Clear (Cóctel)",
            price: "S/ 150",
            description:
              "Ayuda a controlar el acné, reducir imperfecciones y cerrar poros.",
          },
          {
            name: "Skin Repair (Cóctel)",
            price: "S/ 150",
            description:
              "Regenera la piel, atenúa cicatrices de acné y mejora la textura.",
          },
        ],
      },
      {
        name: "Anti-age",
        services: [
          {
            name: "Age Balance (Cóctel)",
            price: "S/ 150",
            description:
              "Revitaliza la piel y ayuda a mantener un rostro más firme.",
          },
          {
            name: "Exosomas",
            price: "S/ 350",
            description:
              "Tratamiento avanzado de regeneracion celular y rejuvenecimiento.",
          },
        ],
      },
    ],
  },
  {
    slug: "tratamientos-corporales",
    title: "Tratamientos Corporales",
    shortTitle: "Corporales",
    subtitle: "Bienestar, exfoliación y tratamientos focalizados.",
    description:
      "Servicios corporales para relajar, estilizar, renovar la piel y tratar necesidades específicas.",
    summary: "Masajes, exfoliaciones y tratamientos corporales puntuales.",
    accent: "from-amber-200 via-white to-lime-50",
    subcategories: [
      {
        name: "Masajes",
        services: [
          {
            name: "Masaje Relajante",
            price: "S/ 80",
            description:
              "Alivia tensiones, relaja el cuerpo y mejora el bienestar.",
          },
          {
            name: "Masaje Reductor",
            price: "S/ 80",
            description: "Ayuda a reducir medidas y mejorar la circulación.",
          },
        ],
      },
      {
        name: "Exfoliación",
        services: [
          {
            name: "Exfoliación de espalda",
            price: "S/ 150",
            description: "Elimina células muertas y limpia los poros.",
          },
          {
            name: "Exfoliación de glúteos",
            price: "S/ 130",
            description:
              "Mejora la textura de la piel y previene imperfecciones.",
          },
        ],
      },
      {
        name: "Otros",
        services: [
          {
            name: "Cauterización de verrugas",
            price: "Evaluación previa",
            description:
              "Procedimiento para eliminar verrugas de forma segura.",
          },
        ],
      },
    ],
  },
];

export function getServiceCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}
