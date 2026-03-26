export type Service = {
  name: string;
  description: string;
  image?: string;
  details?: string;
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
        image: encodeURI("/services/podologia/profilaxis.png"),
        description:
          "Limpieza y cuidado preventivo para mantener los pies sanos y libres de durezas.",
        details: "La profilaxis podológica es un tratamiento esencial para el cuidado de los pies, enfocado en la limpieza profunda, eliminación de callosidades y durezas, y prevención de problemas como uñeros o infecciones. Utilizando técnicas profesionales y herramientas especializadas, este servicio promueve la salud integral de los pies, aliviando molestias y mejorando la comodidad diaria. Ideal para personas con pie plano, diabetes o aquellos que pasan mucho tiempo de pie, garantizando pies suaves y saludables.",
      },
      {
        name: "Profilaxis a domicilio",
        image: encodeURI("/services/podologia/profilaxis-domicilio.png"),
        description:
          "Cuidado y limpieza profesional de los pies en casa (previa coordinación).",
        details: "Nuestro servicio de profilaxis a domicilio ofrece comodidad y profesionalismo para el cuidado de tus pies sin salir de casa. Un podólogo calificado visita tu hogar para realizar una limpieza profunda, eliminación de durezas y tratamientos preventivos. Este servicio es perfecto para personas con movilidad reducida, agendas apretadas o preferencia por el confort del hogar. Incluye asesoramiento personalizado para el mantenimiento diario de la salud podológica.",
      },
      {
        name: "Extracción de uñero",
        image: encodeURI("/services/podologia/extraccion-unero.png"),
        description:
          "Procedimiento podológico para aliviar el dolor causado por una uña encarnada y prevenir infecciones.",
        details: "La extracción de uñero es un procedimiento podológico especializado para tratar uñas encarnadas dolorosas. Utilizando técnicas seguras y estériles, se corrige la uña afectada para aliviar el dolor inmediato y prevenir infecciones recurrentes. Este tratamiento incluye cuidado post-procedimiento y consejos para evitar futuros problemas. Es ideal para quienes sufren de uñas encarnadas crónicas, proporcionando alivio duradero y mejorando la salud de los pies.",
      },
      {
        name: "Reflexología podal",
        image: encodeURI("/services/podologia/reflexologia-podal.png"),
        description:
          "Masaje terapéutico que estimula puntos del pie para promover bienestar y relajación.",
        details: "La reflexología podal es un masaje terapéutico que estimula puntos específicos en los pies conectados con órganos y sistemas del cuerpo. Esta técnica ancestral promueve la relajación profunda, mejora la circulación sanguínea y alivia tensiones acumuladas. Beneficia el bienestar general, reduciendo estrés, mejorando el sueño y fortaleciendo el sistema inmunológico. Es un tratamiento holístico perfecto para rejuvenecer cuerpo y mente en una sesión relajante.",
      },
      {
        name: "Sesión de alta frecuencia",
        image: encodeURI("/services/podologia/alta-frecuencia.png"),
        description:
          "Tratamiento que ayuda a eliminar hongos, desinfectar y mejorar la salud de la piel y las uñas.",
        details: "La sesión de alta frecuencia utiliza corriente eléctrica de alta frecuencia para desinfectar, eliminar hongos y mejorar la salud de la piel y uñas de los pies. Este tratamiento no invasivo estimula la circulación, acelera la curación y fortalece las uñas débiles. Es efectivo contra infecciones fúngicas, callosidades y problemas cutáneos. Proporciona resultados visibles en pocas sesiones, dejando los pies limpios, saludables y con mejor apariencia.",
      },
      {
        name: "Tratamiento químico para hongos",
        image: encodeURI("/services/podologia/quimica-pies.png"),
        description:
          "Tratamiento aplicado directamente en la uña para hongos muy avanzados.",
        details: "El tratamiento químico para hongos es una solución especializada para infecciones fúngicas avanzadas en las uñas. Aplicando productos químicos seguros y efectivos directamente en la uña afectada, se elimina el hongo de raíz, previniendo su propagación. Este método es ideal para casos resistentes a tratamientos convencionales, restaurando la salud y apariencia de las uñas. Incluye seguimiento y consejos para prevenir recurrencias, asegurando pies sanos y estéticos.",
      },
      {
        name: "Desintoxicación iónica",
        image: encodeURI("/services/podologia/desintoxicacion-ionica.png"),
        description:
          "Terapia que ayuda a eliminar toxinas y mejorar el bienestar general.",
        details: "La desintoxicación iónica es una terapia innovadora que utiliza agua ionizada para extraer toxinas del cuerpo a través de los pies. Este proceso mejora la circulación, reduce la inflamación y promueve el equilibrio interno. Beneficia a quienes sufren de fatiga, retención de líquidos o exposición a toxinas ambientales. Es un tratamiento relajante que deja una sensación de renovación, fortaleciendo el sistema inmunológico y mejorando el bienestar general.",
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
            image: encodeURI("/services/facial/limpieza-facial-basica.png"),
            description:
              "Elimina impurezas y células muertas, dejando la piel limpia y fresca.",
            details: "La limpieza facial básica es el pilar fundamental del cuidado de la piel, eliminando impurezas, células muertas y exceso de sebo para dejar la piel fresca y radiante. Este tratamiento incluye desmaquillado suave, exfoliación ligera y mascarilla purificante, adaptada a todo tipo de piel. Mejora la textura, previene brotes de acné y prepara la piel para absorber mejor los productos posteriores. Es ideal para mantenimiento regular, proporcionando una piel limpia y saludable en cada sesión.",
          },
          {
            name: "Limpieza facial profunda",
            image: encodeURI("/services/facial/limpieza-facial-profunda.png"),
            description: "Limpieza intensiva con extracción de puntos negros.",
            details: "La limpieza facial profunda es un tratamiento intensivo diseñado para eliminar impurezas profundas, puntos negros y comedones incrustados. Utilizando vaporización, extracción manual y mascarillas especializadas, este procedimiento limpia los poros a fondo, previniendo infecciones y mejorando la apariencia de la piel. Es perfecto para pieles grasas o con problemas de acné, dejando una piel suave, clara y con poros menos visibles. Incluye consejos para el cuidado en casa.",
          },
          {
            name: "Dermaplaning",
            image: encodeURI("/services/facial/dermaplaning.png"),
            description: "Técnica facial que elimina el vello fino del rostro.",
            details: "El dermaplaning es una técnica de exfoliación física que utiliza una cuchilla estéril para eliminar el vello facial fino y las células muertas de la piel. Este tratamiento deja la piel suave como la seda, mejora la absorción de productos y realza el maquillaje. Es ideal para pieles sensibles o con vello fino, proporcionando un brillo natural instantáneo. No causa irritación y es seguro para la mayoría de los tipos de piel, rejuveneciendo la apariencia facial.",
          },
        ],
      },
      {
        name: "Manchas",
        services: [
          {
            name: "Peeling Facial",
            image: encodeURI("/services/facial/peeling-facial.png"),
            description:
              "Renueva la piel, aclara manchas y mejora la textura.",
            details: "El peeling facial es un tratamiento de renovación cutánea que utiliza ácidos suaves para exfoliar las capas superficiales de la piel, aclarando manchas, uniformizando el tono y mejorando la textura. Este procedimiento estimula la producción de colágeno, reduciendo arrugas finas y rejuveneciendo la piel. Es efectivo contra hiperpigmentación, cicatrices leves y piel opaca. Requiere cuidado solar post-tratamiento, dejando una piel luminosa y rejuvenecida con resultados progresivos.",
          },
          {
            name: "ClariDerm",
            image: encodeURI("/services/facial/clariderm.png"),
            description:
              "Tratamiento indicado para melasma y manchas por acné.",
            details: "ClariDerm es un tratamiento especializado para combatir melasma, manchas por acné y otras hiperpigmentaciones cutáneas. Utilizando una combinación de ingredientes despigmentantes y tecnologías avanzadas, este procedimiento inhibe la producción de melanina, aclarando manchas de manera segura y efectiva. Es ideal para pieles con problemas de pigmentación, proporcionando resultados visibles sin irritación. Incluye protocolo de mantenimiento para prevenir recurrencias, restaurando la uniformidad y confianza en la piel.",
          },
        ],
      },
      {
        name: "Hidratación",
        services: [
          {
            name: "HidraLips",
            image: encodeURI("/services/facial/hidralips.png"),
            description: "Tratamiento de hidratación profunda para labios.",
            details: "HidraLips es un tratamiento intensivo de hidratación diseñado específicamente para los labios, utilizando ácidos hialurónicos y vitaminas para restaurar la humedad perdida y mejorar la apariencia. Este procedimiento suaviza líneas finas, define el contorno labial y previene la sequedad crónica. Es perfecto para labios agrietados o deshidratados, proporcionando un efecto voluminizador natural. Los resultados son inmediatos y duraderos, dejando labios suaves, hidratados y con un aspecto juvenil.",
          },
          {
            name: "HydraGlow (Ácido hialurónico)",
            image: encodeURI("/services/facial/hydraglow.png"),
            description:
              "Tratamiento hidratante profundo que mejora elasticidad y luminosidad.",
            details: "HydraGlow es un tratamiento de hidratación profunda basado en ácido hialurónico que restaura la humedad interna de la piel, mejorando la elasticidad, luminosidad y firmeza. Este procedimiento penetra profundamente en las capas cutáneas, rellenando arrugas finas y revitalizando la piel desde dentro. Es ideal para pieles deshidratadas, maduras o expuestas a factores ambientales agresivos. Proporciona un glow natural inmediato y beneficios a largo plazo para una piel sana y radiante.",
          },
        ],
      },
      {
        name: "Acné",
        services: [
          {
            name: "Acné Clear (Cóctel)",
              image: encodeURI("/services/facial/acne-clear.png"),
            description:
              "Ayuda a controlar el acné, reducir imperfecciones y cerrar poros.",
            details: "El tratamiento Acné Clear es una solución avanzada para combatir el acné y mejorar la salud de la piel. Combina ingredientes activos que regulan la producción de sebo, eliminan bacterias causantes del acné y reducen la inflamación. Este cóctel profesional penetra profundamente en los poros, ayudando a desobstruirlos y prevenir futuros brotes. Ideal para pieles grasas o mixtas, promueve una piel más clara, suave y libre de imperfecciones, restaurando la confianza y el bienestar cutáneo.",
          },
          {
            name: "Skin Repair (Cóctel)",
            image: encodeURI("/services/facial/skin-repair.png"),
            description:
              "Regenera la piel, atenúa cicatrices de acné y mejora la textura.",
            details: "Skin Repair es un tratamiento regenerador diseñado para reparar y rejuvenecer la piel afectada por acné y cicatrices. Utiliza una combinación de péptidos, vitaminas y ácidos suaves que estimulan la producción de colágeno, reducen la apariencia de cicatrices y mejoran la elasticidad de la piel. Este cóctel profesional hidrata profundamente, calma irritaciones y promueve una textura más uniforme. Perfecto para pieles dañadas, ayuda a restaurar la luminosidad natural y la confianza, dejando una piel suave y renovada.",
          },
        ],
      },
      {
        name: "Anti-age",
        services: [
          {
            name: "Age Balance (Cóctel)",
            image: encodeURI("/services/facial/age-balance.png"),
            description:
              "Revitaliza la piel y ayuda a mantener un rostro más firme.",
            details: "Age Balance es un cóctel anti-edad diseñado para revitalizar y firmar la piel madura, combatiendo los signos del envejecimiento cutáneo. Utiliza ingredientes como retinol, péptidos y antioxidantes que estimulan el colágeno, reducen arrugas y mejoran la elasticidad. Este tratamiento restaura la vitalidad perdida, unificando el tono y mejorando la textura. Ideal para pieles con signos de edad, proporciona resultados visibles de rejuvenecimiento, dejando una piel más joven, firme y radiante.",
          },
          {
            name: "Exosomas",
            image: encodeURI("/services/facial/exosomas.png"),
            description:
              "Tratamiento avanzado de regeneración celular y rejuvenecimiento.",
            details: "Los exosomas representan la vanguardia en tratamientos de regeneración celular, utilizando vesículas extracelulares cargadas con factores de crecimiento para rejuvenecer la piel a nivel molecular. Este procedimiento avanzado estimula la reparación tisular, mejora la producción de colágeno y acelera la renovación celular. Es efectivo contra arrugas profundas, flacidez y daño solar acumulado. Proporciona rejuvenecimiento integral, restaurando la juventud y vitalidad de la piel con resultados naturales y duraderos.",
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
            image: encodeURI("/services/body/masaje-relajante.png"),
            description:
              "Alivia tensiones, relaja el cuerpo y mejora el bienestar.",
            details: "El masaje relajante es una terapia manual que utiliza técnicas suaves para aliviar tensiones musculares, reducir el estrés y promover la relajación profunda del cuerpo y la mente. Este tratamiento mejora la circulación sanguínea, libera endorfinas y ayuda a restaurar el equilibrio interno. Es ideal para personas con estilos de vida agitados, dolores crónicos o simplemente para rejuvenecer. Proporciona una sensación de bienestar inmediato, mejorando el sueño y la calidad de vida general.",
          },
          {
            name: "Masaje Reductor",
            image: encodeURI("/services/body/masaje-reductor.png"),
            description: "Ayuda a reducir medidas y mejorar la circulación.",
            details: "El masaje reductor es un tratamiento especializado que combina técnicas de drenaje linfático y masaje modelante para ayudar a reducir medidas corporales, mejorar la circulación y eliminar toxinas. Este procedimiento acelera el metabolismo local, reduce la retención de líquidos y tonifica la piel. Es efectivo para áreas problemáticas como abdomen, caderas y muslos. Requiere sesiones regulares para resultados óptimos, proporcionando una silueta más definida y un cuerpo más saludable.",
          },
        ],
      },
      {
        name: "Exfoliación",
        services: [
          {
            name: "Exfoliación de espalda",
            image: encodeURI("/services/body/exfoliacion-espalda.png"),
            description: "Elimina células muertas y limpia los poros.",
            details: "La exfoliación de espalda es un tratamiento profundo que elimina células muertas, impurezas y residuos acumulados en la piel de la espalda. Utilizando productos exfoliantes naturales y técnicas manuales, este procedimiento limpia los poros obstruidos, previene brotes de acné y mejora la textura de la piel. Es ideal para pieles grasas o con problemas de espalda, dejando una piel suave, renovada y con mejor apariencia. Mejora la absorción de productos posteriores y promueve una piel más saludable.",
          },
          {
            name: "Exfoliación de glúteos",
            image: encodeURI("/services/body/exfoliacion-gluteos.png"),
            description:
              "Mejora la textura de la piel y previene imperfecciones.",
            details: "La exfoliación de glúteos es un tratamiento especializado para mejorar la textura y salud de la piel en el área de los glúteos. Elimina células muertas, impurezas y residuos, previniendo imperfecciones como puntos negros o foliculitis. Este procedimiento utiliza exfoliantes suaves y técnicas de masaje para estimular la renovación celular y mejorar la circulación. Es perfecto para pieles secas o con textura irregular, dejando una piel suave, uniforme y con mejor tono. Promueve una apariencia más juvenil y saludable.",
          },
        ],
      },
      {
        name: "Otros",
        services: [
          {
            name: "Cauterización de verrugas",
            image: encodeURI("/services/body/verrugas.png"),
            description:
              "Procedimiento para eliminar verrugas de forma segura.",
            details: "La cauterización de verrugas es un procedimiento médico-estético seguro y efectivo para eliminar verrugas causadas por el virus del papiloma humano. Utilizando técnicas de electrocauterización o crioterapia, se destruye el tejido afectado sin dañar la piel sana circundante. Este tratamiento es indoloro y requiere mínimo tiempo de recuperación. Es ideal para verrugas plantares, comunes o genitales, proporcionando eliminación completa y prevención de recurrencias. Incluye cuidados post-procedimiento para una curación óptima.",
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
