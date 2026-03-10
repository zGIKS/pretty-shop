import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  Stethoscope,
  Waves,
} from "lucide-react";

import Footer from "@/components/footer";
import { BodyTreatment } from "@/components/icon/body-treatment";
import { FacialTreatment } from "@/components/icon/facial-treatment";
import { FootTreatment } from "@/components/icon/foot-treatment";
import { getWhatsAppLink } from "@/lib/whatsapp";

type Service = {
  name: string;
  price: string;
  description: string;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
  subcategories?: Array<{
    name: string;
    services: Service[];
  }>;
  services?: Service[];
};

export const metadata: Metadata = {
  title: "Servicios | Pretty Studio",
  description:
    "Catalogo completo de podologia, tratamientos faciales y tratamientos corporales en una sola pagina.",
};

const sections: Section[] = [
  {
    id: "podologia",
    title: "Podologia",
    subtitle: "Cuidado clinico y preventivo para pies sanos.",
    description:
      "Servicios orientados a higiene, alivio del dolor, tratamiento de hongos y bienestar integral.",
    icon: FootTreatment,
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
        price: "Evaluacion previa",
        description:
          "Cuidado y limpieza profesional de los pies en casa (previa coordinacion).",
      },
      {
        name: "Extraccion de unero",
        price: "S/ 40",
        description:
          "Procedimiento podologico para aliviar el dolor causado por una encarnada y prevenir infecciones.",
      },
      {
        name: "Reflexologia Podal",
        price: "S/ 40",
        description:
          "Masaje terapeutico que estimula puntos del pie para promover bienestar y relajacion.",
      },
      {
        name: "Sesion de alta frecuencia",
        price: "S/ 40",
        description:
          "Tratamiento que ayuda a eliminar hongos, desinfectar y mejorar la salud de piel y unas.",
      },
      {
        name: "Tratamiento quimico para hongos",
        price: "S/ 120",
        description:
          "Tratamiento aplicado directamente en la una para hongos muy avanzados.",
      },
      {
        name: "Desintoxicacion Ionica",
        price: "S/ 50",
        description:
          "Terapia que ayuda a eliminar toxinas y mejorar el bienestar general.",
      },
    ],
  },
  {
    id: "faciales",
    title: "Tratamientos Faciales",
    subtitle: "Rituales de skincare, hidratacion y rejuvenecimiento.",
    description:
      "Opciones para limpieza, manchas, acne, hidratacion profunda y protocolos anti-age.",
    icon: FacialTreatment,
    accent: "from-rose-200 via-white to-orange-50",
    subcategories: [
      {
        name: "Skincare",
        services: [
          {
            name: "Limpieza facial basica",
            price: "S/ 70",
            description:
              "Elimina impurezas y celulas muertas dejando la piel limpia y fresca.",
          },
          {
            name: "Limpieza facial profunda",
            price: "S/ 100",
            description: "Limpieza intensiva con extraccion de puntos negros.",
          },
          {
            name: "Dermaplaning",
            price: "S/ 30",
            description: "Tecnica facial que elimina el vello fino del rostro.",
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
              "Tratamiento indicado para melasma y manchas por acne.",
          },
        ],
      },
      {
        name: "Hidratacion",
        services: [
          {
            name: "HidraLips",
            price: "S/ 100",
            description: "Tratamiento de hidratacion profunda para labios.",
          },
          {
            name: "HydraGlow (Acido Hialuronico)",
            price: "S/ 180",
            description:
              "Tratamiento hidratante profundo que mejora elasticidad y luminosidad.",
          },
        ],
      },
      {
        name: "Acne",
        services: [
          {
            name: "Acne Clear (Coctel)",
            price: "S/ 150",
            description:
              "Ayuda a controlar el acne, reducir imperfecciones y cerrar poros.",
          },
          {
            name: "Skin Repair (Coctel)",
            price: "S/ 150",
            description:
              "Regenera la piel, atenua cicatrices de acne y mejora textura.",
          },
        ],
      },
      {
        name: "Anti-age",
        services: [
          {
            name: "Age Balance (Coctel)",
            price: "S/ 150",
            description:
              "Revitaliza la piel y ayuda a mantener un rostro mas firme.",
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
    id: "corporales",
    title: "Tratamientos Corporales",
    subtitle: "Bienestar, exfoliacion y tratamientos focalizados.",
    description:
      "Servicios corporales para relajar, estilizar, renovar la piel y tratar necesidades especificas.",
    icon: BodyTreatment,
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
            description: "Ayuda a reducir medidas y mejorar la circulacion.",
          },
        ],
      },
      {
        name: "Exfoliacion",
        services: [
          {
            name: "Exfoliacion Espalda",
            price: "S/ 150",
            description: "Elimina celulas muertas y limpia los poros.",
          },
          {
            name: "Exfoliacion Gluteos",
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
            name: "Cauterizacion de verrugas",
            price: "Evaluacion previa",
            description:
              "Procedimiento para eliminar verrugas de forma segura.",
          },
        ],
      },
    ],
  },
];

const highlights = [
  "Todo el catalogo en una sola pagina",
  "Precios visibles y faciles de comparar",
  "Disenado para celular, redes y WhatsApp",
];

export default function Servicios() {
  return (
    <>
      <main className="min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fffaf2_0%,#ffffff_28%,#fff7ed_100%)] pt-32 pb-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-8">
          <section className="relative overflow-hidden rounded-[2rem] border border-stone-200/70 bg-white/90 p-6 shadow-[0_24px_80px_-32px_rgba(120,53,15,0.45)] backdrop-blur sm:p-8 lg:p-10">
            <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top_left,_rgba(251,191,36,0.24),_transparent_58%),radial-gradient(circle_at_top_right,_rgba(244,114,182,0.18),_transparent_44%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                  <Sparkles className="h-3.5 w-3.5" />
                  Catalogo de Servicios
                </span>

                <div className="space-y-4">
                  <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
                    Todos los tratamientos en una sola pagina, claros y listos
                    para cotizar.
                  </h1>
                  <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                    Organiza tu oferta por categorias para que cada cliente vea
                    rapido los servicios disponibles, compare opciones y te
                    escriba por WhatsApp sin perderse entre varias paginas.
                  </p>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={getWhatsAppLink(
                      "Hola, quiero informacion sobre sus tratamientos."
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Consultar por WhatsApp
                  </Link>
                  <Link
                    href="#catalogo"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-950 hover:text-stone-950"
                  >
                    Ver catalogo completo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="grid gap-3 rounded-[1.75rem] border border-stone-200 bg-stone-50 p-5">
                <div className="flex items-center gap-3 text-sm font-medium text-stone-900">
                  <Waves className="h-4 w-4 text-amber-700" />
                  Presentacion recomendada
                </div>
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-3 text-sm text-stone-600 shadow-sm"
                  >
                    <span className="mt-0.5 rounded-full bg-emerald-100 p-1 text-emerald-700">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <nav
            aria-label="Categorias de servicios"
            className="flex flex-wrap gap-3"
          >
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
              >
                {section.title}
              </Link>
            ))}
          </nav>

          <div id="catalogo" className="space-y-8">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-[2rem] border border-stone-200/70 bg-white/95 p-6 shadow-[0_20px_60px_-36px_rgba(28,25,23,0.38)] sm:p-8"
                >
                  <div
                    className={`mb-8 rounded-[1.5rem] bg-gradient-to-br ${section.accent} p-6`}
                  >
                    <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-3 rounded-full border border-white/70 bg-white/70 px-4 py-2 text-sm font-medium text-stone-800 backdrop-blur">
                          <Icon className="h-5 w-5" />
                          {section.title}
                        </div>
                        <div className="space-y-2">
                          <h2 className="text-3xl font-semibold tracking-tight text-stone-950">
                            {section.subtitle}
                          </h2>
                          <p className="max-w-3xl text-sm leading-6 text-stone-700 sm:text-base">
                            {section.description}
                          </p>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-2 text-sm font-medium text-white">
                        <Stethoscope className="h-4 w-4" />
                        Atencion personalizada
                      </div>
                    </div>
                  </div>

                  {section.services ? (
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                      {section.services.map((service) => (
                        <ServiceCard key={service.name} service={service} />
                      ))}
                    </div>
                  ) : null}

                  {section.subcategories ? (
                    <div className="space-y-8">
                      {section.subcategories.map((subcategory) => (
                        <div key={subcategory.name} className="space-y-4">
                          <div className="flex items-center gap-3">
                            <span className="h-px flex-1 bg-stone-200" />
                            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-stone-500">
                              {subcategory.name}
                            </h3>
                            <span className="h-px flex-1 bg-stone-200" />
                          </div>

                          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                            {subcategory.services.map((service) => (
                              <ServiceCard
                                key={`${subcategory.name}-${service.name}`}
                                service={service}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </section>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const isEvaluation = service.price.toLowerCase().includes("evaluacion");

  return (
    <article className="flex h-full flex-col rounded-[1.5rem] border border-stone-200 bg-stone-50/80 p-5 transition hover:-translate-y-0.5 hover:border-stone-300 hover:bg-white">
      <div className="mb-4 flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold tracking-tight text-stone-900">
          {service.name}
        </h3>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
            isEvaluation
              ? "bg-stone-200 text-stone-700"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {service.price}
        </span>
      </div>

      <p className="text-sm leading-6 text-stone-600">{service.description}</p>
    </article>
  );
}
