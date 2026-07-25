import type { Metadata } from 'next'
import { LegalShell, LegalSection, type TocItem } from '@/components/legal/legal-shell'
import { CONTACT_EMAIL, JURISDICTION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Términos de Servicio — ParryRoad',
  description: 'Los términos y condiciones para descargar y usar la aplicación móvil ParryRoad.',
}

const toc: TocItem[] = [
  { id: 'descripcion', label: '1. Descripción del servicio' },
  { id: 'licencia', label: '2. Licencia de uso' },
  { id: 'elegibilidad', label: '3. Elegibilidad' },
  { id: 'cuentas', label: '4. Cuentas y progreso del juego' },
  { id: 'compras', label: '5. Compras dentro de la aplicación' },
  { id: 'publicidad', label: '6. Publicidad' },
  { id: 'conducta', label: '7. Conducta del usuario' },
  { id: 'ranking', label: '8. Ranking global (Leaderboard)' },
  { id: 'propiedad', label: '9. Propiedad intelectual' },
  { id: 'disponibilidad', label: '10. Modificaciones y disponibilidad' },
  { id: 'responsabilidad', label: '11. Limitación de responsabilidad' },
  { id: 'terminacion', label: '12. Terminación' },
  { id: 'ley', label: '13. Ley aplicable' },
  { id: 'cambios', label: '14. Cambios a estos Términos' },
  { id: 'contacto', label: '15. Contacto' },
]

const link = 'font-semibold text-primary underline-offset-4 hover:underline'

export default function TermsPage() {
  return (
    <LegalShell
      title="Términos de Servicio de ParryRoad"
      toc={toc}
      intro={
        <p>
          Bienvenido/a a ParryRoad. Al descargar, instalar o utilizar la aplicación móvil ParryRoad
          (&quot;el Juego&quot;), aceptás estos Términos de Servicio (&quot;Términos&quot;). Si no
          estás de acuerdo, no uses el Juego.
        </p>
      }
    >
      <LegalSection id="descripcion" title="1. Descripción del servicio">
        <p>
          ParryRoad es un videojuego móvil de tipo endless runner, disponible gratuitamente para
          Android, con compras opcionales dentro de la aplicación y publicidad.
        </p>
      </LegalSection>

      <LegalSection id="licencia" title="2. Licencia de uso">
        <p>
          Te otorgamos una licencia limitada, no exclusiva, intransferible y revocable para
          descargar e instalar ParryRoad en dispositivos que poseas o controles, exclusivamente para
          tu uso personal y no comercial, sujeta al cumplimiento de estos Términos.
        </p>
      </LegalSection>

      <LegalSection id="elegibilidad" title="3. Elegibilidad">
        <p>
          ParryRoad está calificado para todo público (7+). Si sos menor de edad según las leyes de
          tu país, necesitás el permiso de un padre, madre o tutor legal para usar el Juego y
          realizar cualquier compra dentro de la aplicación.
        </p>
      </LegalSection>

      <LegalSection id="cuentas" title="4. Cuentas y progreso del juego">
        <p>
          No es necesario crear una cuenta para jugar. Si elegís iniciar sesión con Google Play
          Games, sos responsable de mantener la seguridad de esa cuenta. Tu progreso de juego
          (monedas, distancia récord, autos desbloqueados, etc.) se almacena localmente en tu
          dispositivo y, opcionalmente, en la nube vinculada a tu cuenta de Google Play Games. No
          garantizamos la recuperación de progreso perdido por desinstalación, cambio de dispositivo
          sin sincronización previa, o fallas técnicas ajenas a nuestro control.
        </p>
      </LegalSection>

      <LegalSection id="compras" title="5. Compras dentro de la aplicación">
        <p>
          ParryRoad ofrece compras opcionales de contenido virtual (paquetes de monedas, paquetes de
          revives) a través de Google Play Store.
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            Todas las compras son procesadas directamente por Google Play Store, sujetas a sus
            propios términos y políticas de facturación y reembolso.
          </li>
          <li>
            Las monedas y revives obtenidos son bienes virtuales sin valor monetario en el mundo
            real, no son transferibles, no son canjeables por dinero, y no pueden intercambiarse
            fuera del Juego.
          </li>
          <li>
            ParryRoad no ofrece ninguna ventaja de jugabilidad (&quot;pay-to-win&quot;) a través de
            compras: todo el contenido comprable es cosmético o de conveniencia (autos, colores,
            revives), y ninguna compra otorga ventajas competitivas en el gameplay core.
          </li>
          <li>
            Las compras destinadas a menores de edad requieren autorización de un adulto responsable
            de la cuenta de la tienda correspondiente.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="publicidad" title="6. Publicidad">
        <p>
          El Juego muestra anuncios (video recompensado e intersticial) provistos por Google AdMob
          para financiar su desarrollo gratuito. Los anuncios recompensados son siempre opcionales y
          nunca se muestran durante una corrida activa — solo en menús o pantallas de fin de partida.
        </p>
      </LegalSection>

      <LegalSection id="conducta" title="7. Conducta del usuario">
        <p>Al usar ParryRoad, te comprometés a no:</p>
        <ul className="flex list-none flex-col gap-2 pl-5">
          <li>(a) modificar, descompilar o realizar ingeniería inversa del Juego;</li>
          <li>
            (b) usar trampas, bots, exploits o software de terceros para alterar el gameplay o el
            ranking global;
          </li>
          <li>(c) usar el Juego con fines ilegales o para infringir derechos de terceros;</li>
          <li>
            (d) intentar acceder sin autorización a los sistemas o servidores relacionados con el
            Juego.
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="ranking" title="8. Ranking global (Leaderboard)">
        <p>
          Si iniciás sesión con Google Play Games, tu mejor distancia y tu nombre de perfil de Google
          Play Games pueden mostrarse públicamente en el ranking global dentro del Juego. Nos
          reservamos el derecho de remover puntajes que consideremos obtenidos de forma fraudulenta.
        </p>
      </LegalSection>

      <LegalSection id="propiedad" title="9. Propiedad intelectual">
        <p>
          Todo el contenido del Juego (código, arte, música, nombre &quot;ParryRoad&quot;, logotipos,
          y diseño) es propiedad de sus desarrolladores o de sus licenciantes, y está protegido por
          leyes de propiedad intelectual. Estos Términos no te otorgan ningún derecho de propiedad
          sobre el Juego, más allá de la licencia de uso limitada descripta en la sección 2.
        </p>
      </LegalSection>

      <LegalSection id="disponibilidad" title="10. Modificaciones y disponibilidad del servicio">
        <p>
          Podemos actualizar, modificar o discontinuar el Juego (o partes de él) en cualquier
          momento, con o sin previo aviso. No garantizamos que el Juego esté disponible de forma
          ininterrumpida o libre de errores.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidad" title="11. Limitación de responsabilidad">
        <p>
          ParryRoad se ofrece &quot;tal cual&quot; (&quot;as is&quot;), sin garantías de ningún tipo.
          En la máxima medida permitida por la ley aplicable, no seremos responsables por daños
          indirectos, incidentales o consecuentes derivados del uso o la imposibilidad de uso del
          Juego, incluyendo la pérdida de progreso o de bienes virtuales.
        </p>
      </LegalSection>

      <LegalSection id="terminacion" title="12. Terminación">
        <p>
          Podemos suspender o cancelar tu acceso al Juego si violás estos Términos. Podés dejar de
          usar el Juego en cualquier momento simplemente desinstalándolo.
        </p>
      </LegalSection>

      <LegalSection id="ley" title="13. Ley aplicable">
        <p>
          {/* TODO: reemplazar [PAÍS/JURISDICCIÓN] en lib/site.ts */}
          Estos Términos se rigen por las leyes de{' '}
          <span className="font-semibold text-foreground">{JURISDICTION}</span>, sin perjuicio de las
          disposiciones sobre conflicto de leyes.
        </p>
      </LegalSection>

      <LegalSection id="cambios" title="14. Cambios a estos Términos">
        <p>
          Podemos actualizar estos Términos ocasionalmente. Los cambios se reflejarán con una nueva
          fecha de &quot;última actualización&quot;. El uso continuado del Juego después de un cambio
          implica tu aceptación de los nuevos Términos.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="15. Contacto">
        <p>
          Si tenés preguntas sobre estos Términos de Servicio, escribinos a:{' '}
          {/* TODO: reemplazar por el email de contacto real en lib/site.ts */}
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} font-bold`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </LegalShell>
  )
}
