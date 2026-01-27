import Footer from "@/components/footer";

export default function Privacy() {
  return (
    <>
      <main className="min-h-screen pt-32 md:pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground">
              Política de Privacidad
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Última actualización: Diciembre 2025
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 md:p-8 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Introducción</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                En Pretty, valoramos y respetamos su privacidad. Esta Política
                de Privacidad describe cómo recopilamos, usamos, almacenamos y
                protegemos su información personal de acuerdo con la Ley de
                Protección de Datos Personales del Perú (Ley N° 29733).
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                2. Información que Recopilamos
              </h2>
              <p className="text-sm text-muted-foreground">
                Recopilamos la siguiente información personal cuando utiliza
                nuestros servicios:
              </p>
              <div className="space-y-3 text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">
                    2.1 Información de Contacto:
                  </span>{" "}
                  Nombre completo, dirección, número de teléfono, correo
                  electrónico.
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    2.2 Información Médica:
                  </span>{" "}
                  Historial médico relevante, alergias, medicamentos,
                  condiciones de salud que puedan afectar los tratamientos.
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    2.3 Información de Servicio:
                  </span>{" "}
                  Historial de tratamientos, preferencias de servicio,
                  fotografías de antes y después (con su consentimiento
                  expreso).
                </p>
                <p>
                  <span className="font-semibold text-foreground">
                    2.4 Información de Pago:
                  </span>{" "}
                  Datos necesarios para procesar pagos y facturación.
                </p>
              </div>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Uso de la Información</h2>
              <p className="text-sm text-muted-foreground">
                Utilizamos su información personal para los siguientes
                propósitos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>
                  Proporcionar y mejorar nuestros servicios de estética y
                  bienestar.
                </li>
                <li>Programar y gestionar sus citas.</li>
                <li>Personalizar tratamientos según sus necesidades específicas.</li>
                <li>Procesar pagos y emitir comprobantes.</li>
                <li>
                  Comunicarnos con usted sobre sus citas, tratamientos y
                  promociones (con su consentimiento).
                </li>
                <li>Mantener registros médicos y de tratamiento.</li>
                <li>Cumplir con obligaciones legales y regulatorias.</li>
              </ul>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Compartir Información</h2>
              <p className="text-sm text-muted-foreground">
                No vendemos, alquilamos ni compartimos su información personal
                con terceros, excepto en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Con su consentimiento explícito.</li>
                <li>
                  Con proveedores de servicios que nos ayudan a operar nuestro
                  negocio (procesadores de pago, servicios de almacenamiento en
                  la nube).
                </li>
                <li>Cuando sea requerido por ley o por autoridades competentes.</li>
                <li>
                  Para proteger nuestros derechos legales o la seguridad de
                  nuestros clientes y personal.
                </li>
              </ul>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                5. Seguridad de la Información
              </h2>
              <p className="text-sm text-muted-foreground">
                Implementamos medidas de seguridad técnicas, administrativas y
                físicas para proteger su información personal contra acceso no
                autorizado, pérdida, alteración o divulgación. Esto incluye el
                uso de sistemas seguros de almacenamiento, acceso restringido al
                personal autorizado y protocolos de confidencialidad.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">6. Sus Derechos</h2>
              <p className="text-sm text-muted-foreground">
                De acuerdo con la legislación peruana de protección de datos
                personales, usted tiene los siguientes derechos:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Acceso: solicitar información sobre los datos que tenemos.</li>
                <li>
                  Rectificación: solicitar la corrección de datos inexactos o
                  incompletos.
                </li>
                <li>Cancelación: solicitar la eliminación de sus datos.</li>
                <li>
                  Oposición: oponerse al tratamiento de datos para ciertos
                  propósitos.
                </li>
                <li>
                  Revocación: retirar su consentimiento en cualquier momento.
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Para ejercer estos derechos, puede contactarnos a través de los
                canales indicados al final de esta política.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">7. Retención de Datos</h2>
              <p className="text-sm text-muted-foreground">
                Conservamos su información personal durante el tiempo necesario
                para cumplir con los propósitos descritos en esta política, a
                menos que la ley requiera o permita un período de retención más
                largo. Los registros médicos se conservan de acuerdo con las
                regulaciones sanitarias aplicables.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">8. Menores de Edad</h2>
              <p className="text-sm text-muted-foreground">
                Nuestros servicios están dirigidos a personas mayores de 18
                años. Si un menor requiere servicios, debe estar acompañado por
                un padre o tutor legal quien proporcionará el consentimiento
                necesario y será responsable de la información proporcionada.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                9. Cookies y Tecnologías Similares
              </h2>
              <p className="text-sm text-muted-foreground">
                Nuestro sitio web puede utilizar cookies y tecnologías similares
                para mejorar su experiencia de navegación, analizar el tráfico
                del sitio y personalizar el contenido. Puede configurar su
                navegador para rechazar cookies, aunque esto puede afectar
                algunas funcionalidades del sitio.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                10. Cambios a esta Política
              </h2>
              <p className="text-sm text-muted-foreground">
                Nos reservamos el derecho de actualizar esta Política de
                Privacidad periódicamente. Le notificaremos sobre cambios
                significativos publicando la nueva política en nuestro sitio web
                y actualizando la fecha de &quot;última actualización&quot;. Le
                recomendamos revisar esta política regularmente.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
