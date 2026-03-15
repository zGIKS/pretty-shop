export type Service = {
  name: string;
  description: string;
  image?: string;
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

export type ResolvedService = Service & {
  sectionLabel?: string;
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
        image: encodeURI("/services/podologia/foot-profilaxis.png"),
        description:
          "Limpieza y cuidado preventivo para mantener los pies sanos y libres de durezas.",
      },
      {
        name: "Profilaxis a domicilio",
        image: encodeURI("/services/podologia/Profilaxis-domicilio-bueno.png"),
        description:
          "Cuidado y limpieza profesional de los pies en casa (previa coordinación).",
      },
      {
        name: "Extracción de uñero",
        image: encodeURI("/services/podologia/extraccion-uneros.png"),
        description:
          "Procedimiento podológico para aliviar el dolor causado por una uña encarnada y prevenir infecciones.",
      },
      {
        name: "Reflexología podal",
        image: encodeURI("/services/podologia/Reflexologia-podal.png"),
        description:
          "Masaje terapéutico que estimula puntos del pie para promover bienestar y relajación.",
      },
      {
        name: "Sesión de alta frecuencia",
        image: encodeURI("/services/podologia/alta-frecuencia.png"),
        description:
          "Tratamiento que ayuda a eliminar hongos, desinfectar y mejorar la salud de la piel y las uñas.",
      },
      {
        name: "Tratamiento químico para hongos",
        image: encodeURI("/services/podologia/quimica-pies.png"),
        description:
          "Tratamiento aplicado directamente en la uña para hongos muy avanzados.",
      },
      {
        name: "Desintoxicación iónica",
        image: encodeURI("/services/podologia/Desintoxicacion-ionica.png"),
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
            image: encodeURI("/services/facial/Limpieza-facial-basica.png"),
            description:
              "Elimina impurezas y células muertas, dejando la piel limpia y fresca.",
          },
          {
            name: "Limpieza facial profunda",
            image: encodeURI("/services/facial/Limpieza-facial-profunda.png"),
            description: "Limpieza intensiva con extracción de puntos negros.",
          },
          {
            name: "Dermaplaning",
            image: encodeURI("/services/facial/Dermaplaning1.png"),
            description: "Técnica facial que elimina el vello fino del rostro.",
          },
        ],
      },
      {
        name: "Manchas",
        services: [
          {
            name: "Peeling Facial",
            image: encodeURI("/services/facial/Peeling-Facial.png"),
            description:
              "Renueva la piel, aclara manchas y mejora la textura.",
          },
          {
            name: "ClariDerm",
            image: encodeURI("/services/facial/ClariDerm1.png"),
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
            image: encodeURI("/services/facial/HidraLips.png"),
            description: "Tratamiento de hidratación profunda para labios.",
          },
          {
            name: "HydraGlow (Ácido hialurónico)",
            image: encodeURI("/services/facial/HydraGlow1.png"),
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
            image: encodeURI("/services/facial/Skin-Repair.png"),
            description:
              "Ayuda a controlar el acné, reducir imperfecciones y cerrar poros.",
          },
          {
            name: "Skin Repair (Cóctel)",
            image: encodeURI("/services/facial/Skin-Repair.png"),
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
            image: encodeURI("/services/facial/Age-Balance.png"),
            description:
              "Revitaliza la piel y ayuda a mantener un rostro más firme.",
          },
          {
            name: "Exosomas",
            image: encodeURI("/services/facial/Exosomas1.png"),
            description:
              "Tratamiento avanzado de regeneración celular y rejuvenecimiento.",
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
            image: encodeURI("/services/body/Masaje-Relajante1.png"),
            description:
              "Alivia tensiones, relaja el cuerpo y mejora el bienestar.",
          },
          {
            name: "Masaje Reductor",
            image: encodeURI("/services/body/Masaje-Reductor1.png"),
            description: "Ayuda a reducir medidas y mejorar la circulación.",
          },
        ],
      },
      {
        name: "Exfoliación",
        services: [
          {
            name: "Exfoliación de espalda",
            image: encodeURI("/services/body/Exfoliación-espalda1.png"),
            description: "Elimina células muertas y limpia los poros.",
          },
          {
            name: "Exfoliación de glúteos",
            image: encodeURI("/services/body/Exfoliación-gluteos1.png"),
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
            image: encodeURI("/services/body/verrugas1.png"),
            description:
              "Procedimiento para eliminar verrugas de forma segura.",
          },
        ],
      },
    ],
  },
];

const SERVICE_CATEGORY_ORDER: string[] = [
  "tratamientos-faciales",
  "tratamientos-corporales",
  "podologia",
];

export function getOrderedServiceCategories(): ServiceCategory[] {
  const rank = new Map(
    SERVICE_CATEGORY_ORDER.map((slug, index) => [slug, index])
  );

  return [...serviceCategories].sort((a, b) => {
    const aRank = rank.get(a.slug) ?? Number.MAX_SAFE_INTEGER;
    const bRank = rank.get(b.slug) ?? Number.MAX_SAFE_INTEGER;

    if (aRank !== bRank) {
      return aRank - bRank;
    }

    return a.title.localeCompare(b.title);
  });
}

export function getServiceCategory(slug: string) {
  return serviceCategories.find((category) => category.slug === slug);
}

export function getResolvedServices(category: ServiceCategory): ResolvedService[] {
  if (category.services) {
    return category.services;
  }

  if (!category.subcategories) {
    return [];
  }

  return category.subcategories.flatMap((subcategory) =>
    subcategory.services.map((service) => ({
      ...service,
      sectionLabel: subcategory.name,
    }))
  );
}
