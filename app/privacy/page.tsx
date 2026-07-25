import type { Metadata } from 'next'
import { LegalShell, LegalSection, type TocItem } from '@/components/legal/legal-shell'
import { CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad — ParryRoad',
  description:
    'Cómo ParryRoad recopila, usa y protege la información de los jugadores en Android.',
}

const toc: TocItem[] = [
  { id: 'informacion', label: '1. Información que recopilamos' },
  { id: 'uso', label: '2. Cómo usamos la información' },
  { id: 'menores', label: '3. Menores de edad' },
  { id: 'terceros', label: '4. Compartir información con terceros' },
  { id: 'seguridad', label: '5. Seguridad de la información' },
  { id: 'derechos', label: '6. Tus derechos y opciones' },
  { id: 'cambios', label: '7. Cambios a esta política' },
  { id: 'contacto', label: '8. Contacto' },
]

const h3 = 'font-heading text-lg font-bold text-foreground'
const link = 'font-semibold text-primary underline-offset-4 hover:underline'

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Política de Privacidad de ParryRoad"
      toc={toc}
      intro={
        <p>
          Esta Política de Privacidad describe cómo ParryRoad (&quot;el Juego&quot;,
          &quot;nosotros&quot;) recopila, usa y protege la información de los usuarios
          (&quot;vos&quot;, &quot;el jugador&quot;) que descargan y utilizan la aplicación móvil
          ParryRoad, disponible para Android.
        </p>
      }
    >
      <LegalSection id="informacion" title="1. Información que recopilamos">
        <h3 className={h3}>1.1 Información que el juego genera y almacena localmente</h3>
        <p>
          Para que puedas jugar, ParryRoad guarda en tu dispositivo información sobre tu progreso:
          monedas acumuladas, distancia récord, autos y colores desbloqueados, misiones diarias
          completadas, y preferencias (idioma, volumen, vibración). Esta información se guarda en el
          almacenamiento local de tu dispositivo y no requiere que crees una cuenta para jugar.
        </p>

        <h3 className={h3}>1.2 Copia de seguridad en la nube (solo Android)</h3>
        <p>
          Si iniciás sesión con Google Play Games, tu progreso puede sincronizarse automáticamente
          con tu cuenta de Google mediante Google Play Games Saved Games, para que no pierdas tu
          avance si cambiás de dispositivo o reinstalás el juego. Esta función es opcional y depende
          de que hayas iniciado sesión voluntariamente en Google Play Games.
        </p>

        <h3 className={h3}>1.3 Información de terceros integrados en el juego</h3>
        <p>
          ParryRoad utiliza los siguientes servicios de terceros, cada uno con su propia política de
          privacidad:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            <strong className="text-foreground">Google AdMob</strong>: para mostrar anuncios
            (recompensados e intersticiales) dentro del juego. AdMob puede recopilar identificadores
            de publicidad y datos de uso para mostrar anuncios relevantes. Podés gestionar tus
            preferencias de publicidad personalizada desde la configuración de tu dispositivo.
          </li>
          <li>
            <strong className="text-foreground">Google Play Games Services</strong>: para el inicio
            de sesión opcional, tablas de clasificación (leaderboard) y la copia de seguridad en la
            nube mencionada arriba.
          </li>
          <li>
            <strong className="text-foreground">Firebase Analytics</strong>: para entender de forma
            agregada y anónima cómo se usa el juego (por ejemplo, cuántas corridas se completan, qué
            power-ups se usan más) y así poder mejorarlo. Esta información no identifica personalmente
            a los usuarios.
          </li>
          <li>
            <strong className="text-foreground">Google Play Billing</strong>: si realizás una compra
            dentro de la app (paquetes de monedas o de revives), la transacción es procesada por
            Google Play Store — nosotros no almacenamos ni tenemos acceso a tus datos de tarjeta o
            pago.
          </li>
        </ul>

        <h3 className={h3}>1.4 Información que NO recopilamos</h3>
        <p>
          ParryRoad no te pide nombre completo, dirección, número de teléfono, ni ningún dato de
          contacto personal. No accedemos a tus contactos, cámara, micrófono ni galería de fotos.
        </p>
      </LegalSection>

      <LegalSection id="uso" title="2. Cómo usamos la información">
        <p>
          Usamos la información descripta para: permitirte jugar y guardar tu progreso, sincronizar
          tu partida entre dispositivos (si usás Google Play Games), mostrarte anuncios dentro del
          juego, procesar compras dentro de la aplicación, mostrar rankings globales, y analizar de
          forma agregada el uso del juego para mejorarlo.
        </p>
      </LegalSection>

      <LegalSection id="menores" title="3. Menores de edad">
        <p>
          ParryRoad está calificado para todo público (7+). No recopilamos intencionalmente
          información personal identificable de menores más allá de lo estrictamente necesario para
          el funcionamiento del juego (progreso de partida, identificador de Google Play Games si el
          usuario o su tutor decide iniciar sesión). Los anuncios mostrados a través de AdMob se
          configuran conforme a las políticas de contenido familiar de Google cuando corresponda.
        </p>
      </LegalSection>

      <LegalSection id="terceros" title="4. Compartir información con terceros">
        <p>
          No vendemos tu información personal. Compartimos datos únicamente con los proveedores de
          servicios mencionados en la sección 1.3 (Google AdMob, Google Play Games, Firebase), en la
          medida necesaria para que esos servicios funcionen, y sujeto a sus propias políticas de
          privacidad:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            Política de Privacidad de Google:{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              https://policies.google.com/privacy
            </a>
          </li>
          <li>
            Política de Privacidad de Firebase:{' '}
            <a
              href="https://firebase.google.com/support/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={link}
            >
              https://firebase.google.com/support/privacy
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="seguridad" title="5. Seguridad de la información">
        <p>
          Tomamos medidas razonables para proteger la información almacenada, pero ningún sistema es
          100% seguro. La mayor parte de tu progreso vive localmente en tu dispositivo bajo tu propio
          control.
        </p>
      </LegalSection>

      <LegalSection id="derechos" title="6. Tus derechos y opciones">
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            Podés desinstalar el juego en cualquier momento, lo que elimina la información almacenada
            localmente en tu dispositivo.
          </li>
          <li>
            Podés cerrar sesión de Google Play Games desde la configuración de tu dispositivo o
            cuenta de Google.
          </li>
          <li>
            Podés restringir la publicidad personalizada desde la configuración de anuncios de tu
            dispositivo Android.
          </li>
          <li>
            Para solicitar información sobre tus datos o su eliminación, escribinos a{' '}
            {/* TODO: reemplazar por el email de contacto real en lib/site.ts */}
            <a href={`mailto:${CONTACT_EMAIL}`} className={link}>
              {CONTACT_EMAIL}
            </a>
            .
          </li>
        </ul>
      </LegalSection>

      <LegalSection id="cambios" title="7. Cambios a esta política">
        <p>
          Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios importantes se
          reflejarán con una nueva fecha de &quot;última actualización&quot; en esta página. Te
          recomendamos revisarla periódicamente.
        </p>
      </LegalSection>

      <LegalSection id="contacto" title="8. Contacto">
        <p>
          Si tenés preguntas sobre esta Política de Privacidad, escribinos a:{' '}
          {/* TODO: reemplazar por el email de contacto real en lib/site.ts */}
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} font-bold`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </LegalSection>
    </LegalShell>
  )
}
