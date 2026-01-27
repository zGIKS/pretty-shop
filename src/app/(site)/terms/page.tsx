import Footer from "@/components/footer";

export default function Terms() {
  return (
    <>
      <main className="min-h-screen pt-32 md:pt-36 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-foreground">
              Términos y Condiciones
            </h1>
            <p className="text-sm text-muted-foreground mt-2">
              Última actualización: Diciembre 2025
            </p>
          </div>

          <div className="bg-white border border-border rounded-xl p-6 md:p-8 space-y-8">
            <section className="space-y-3">
              <h2 className="text-xl font-semibold">1. Introducción</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Estos Términos y Condiciones regulan el acceso y uso de los
                servicios ofrecidos por Pretty. Al reservar o utilizar nuestros
                servicios, usted acepta estos términos.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Servicios</h2>
              <p className="text-sm text-muted-foreground">
                Pretty ofrece servicios de estética y podología. La información
                publicada sobre servicios, precios y promociones es referencial
                y puede cambiar sin previo aviso.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Reservas y Citas</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Las citas se programan por nuestros canales oficiales.</li>
                <li>Recomendamos llegar con al menos 10 minutos de anticipación.</li>
                <li>La inasistencia sin aviso puede limitar futuras reservas.</li>
              </ul>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Pagos y Facturación</h2>
              <p className="text-sm text-muted-foreground">
                Los pagos se realizan con los métodos disponibles al momento de
                la atención. La emisión de comprobantes se efectúa de acuerdo
                con la normativa vigente.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">5. Cambios y Cancelaciones</h2>
              <p className="text-sm text-muted-foreground">
                Para cambios o cancelaciones, solicitamos comunicarse con
                anticipación. Pretty se reserva el derecho de reprogramar citas
                por causas operativas o de fuerza mayor.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                6. Resultados y Responsabilidad
              </h2>
              <p className="text-sm text-muted-foreground">
                Los resultados pueden variar según cada persona. Pretty no se
                responsabiliza por resultados distintos a los esperados cuando
                no se sigan las recomendaciones indicadas por el especialista.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                7. Salud y Contraindicaciones
              </h2>
              <p className="text-sm text-muted-foreground">
                El cliente debe informar condiciones médicas relevantes,
                alergias o tratamientos en curso. Pretty podrá rechazar o
                reprogramar un servicio si considera que puede afectar la salud
                del cliente.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">
                8. Propiedad Intelectual
              </h2>
              <p className="text-sm text-muted-foreground">
                Todo el contenido del sitio (logos, textos, imágenes y diseños)
                pertenece a Pretty o a sus titulares y no puede ser utilizado
                sin autorización.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">9. Enlaces de Terceros</h2>
              <p className="text-sm text-muted-foreground">
                Nuestro sitio puede incluir enlaces a terceros. Pretty no es
                responsable por el contenido o políticas de dichos sitios.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">10. Modificaciones</h2>
              <p className="text-sm text-muted-foreground">
                Pretty puede actualizar estos Términos y Condiciones en
                cualquier momento. Los cambios se publicarán en esta página con
                la fecha de actualización correspondiente.
              </p>
            </section>

            <div className="border-t border-border" />

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">11. Ley Aplicable</h2>
              <p className="text-sm text-muted-foreground">
                Estos términos se rigen por las leyes de la República del Perú.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
