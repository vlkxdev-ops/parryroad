import type { Metadata } from 'next'
import { LegalShell, LegalSection, type TocItem } from '@/components/legal/legal-shell'
import { CONTACT_EMAIL, LAST_UPDATED } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Política de Privacidad — ParryRoad',
  description: 'Cómo ParryRoad recopila, usa y protege la información de los jugadores en Android.',
}

const toc: TocItem[] = [
  { id: 'informacion', label: '1. Información que recopilamos' },
  { id: 'uso', label: '2. Cómo usamos la información' },
  { id: 'publicidad', label: '3. Publicidad y consentimiento' },
  { id: 'edad', label: '4. Edad mínima' },
  { id: 'terceros', label: '5. Compartir información con terceros' },
  { id: 'seguridad', label: '6. Seguridad y conservación' },
  { id: 'derechos', label: '7. Tus derechos y opciones' },
  { id: 'cambios', label: '8. Cambios a esta política' },
  { id: 'contacto', label: '9. Contacto' },
]

const h3 = 'font-heading text-lg font-bold text-foreground'
const link = 'font-semibold text-primary underline-offset-4 hover:underline'

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Política de Privacidad de ParryRoad"
      toc={toc}
      intro={
        <>
          <p>Última actualización: {LAST_UPDATED}</p>
          <p>
            Esta Política de Privacidad describe cómo ParryRoad (&quot;el Juego&quot;, &quot;nosotros&quot;)
            recopila, usa y protege la información de las personas (&quot;vos&quot;, &quot;el jugador&quot;)
            que descargan y usan la aplicación móvil ParryRoad para Android.
          </p>
        </>
      }
    >
      <LegalSection id="informacion" title="1. Información que recopilamos">
        <h3 className={h3}>1.1 Progreso guardado en tu dispositivo</h3>
        <p>
          Para que puedas jugar, ParryRoad guarda en tu dispositivo tu progreso (monedas, distancia récord,
          autos y colores desbloqueados, misiones diarias) y tus preferencias (idioma, volumen, vibración,
          botones de dirección). No necesitás crear una cuenta para jugar.
        </p>
        <h3 className={h3}>1.2 Google Play Games (opcional)</h3>
        <p>
          Si iniciás sesión con Google Play Games, usamos tu ID y nombre de jugador para guardar tu progreso
          en la nube mediante Partidas guardadas y mostrar tu mejor distancia y monedas en tablas de
          clasificación. Tu nombre y puntajes pueden ser visibles en la tabla pública según la privacidad de
          tu perfil. Iniciar sesión es voluntario.
        </p>
        <h3 className={h3}>1.3 Servicios de terceros integrados</h3>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li><strong className="text-foreground">Google AdMob</strong>: muestra anuncios recompensados e intersticiales y puede usar el identificador de publicidad y datos de uso del anuncio.</li>
          <li><strong className="text-foreground">Google Play Games Services</strong>: ofrece inicio de sesión opcional, tablas de clasificación y copia en la nube.</li>
          <li><strong className="text-foreground">Firebase Analytics</strong>: recopila estadísticas de uso mediante identificadores anónimos de instalación.</li>
          <li><strong className="text-foreground">Firebase Crashlytics</strong>: recibe datos técnicos y de diagnóstico para corregir errores.</li>
          <li><strong className="text-foreground">Google Play Billing</strong>: procesa compras; no vemos ni almacenamos tus datos de tarjeta.</li>
        </ul>
        <h3 className={h3}>1.4 Lo que NO recopilamos</h3>
        <p>
          No te pedimos nombre completo, dirección, teléfono ni datos de contacto. No accedemos a tus
          contactos, cámara, micrófono, galería ni ubicación precisa.
        </p>
      </LegalSection>

      <LegalSection id="uso" title="2. Cómo usamos la información">
        <p>
          Usamos la información para permitirte jugar y guardar tu progreso, sincronizar tu partida, mostrar
          rankings y anuncios, procesar compras, detectar y corregir errores, y analizar de forma agregada
          cómo se usa el juego para mejorarlo.
        </p>
      </LegalSection>

      <LegalSection id="publicidad" title="3. Publicidad y consentimiento">
        <p>
          ParryRoad muestra anuncios de Google AdMob. En las regiones donde la ley lo exige, mostramos un
          formulario de consentimiento para que elijas si aceptás anuncios personalizados. Podés cambiar tu
          decisión desde Opciones → Privacidad de anuncios cuando esta opción esté disponible, o desde los
          ajustes de anuncios de tu dispositivo Android.
        </p>
      </LegalSection>

      <LegalSection id="edad" title="4. Edad mínima">
        <p>
          ParryRoad está dirigido a personas de 13 años o más. No recopilamos intencionalmente información
          personal de menores de 13 años. Si sos madre, padre o tutor y creés que un menor nos proporcionó
          información, escribinos a <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a> y la eliminaremos.
        </p>
      </LegalSection>

      <LegalSection id="terceros" title="5. Compartir información con terceros">
        <p>
          No vendemos tu información personal. Solo compartimos datos con los proveedores necesarios para
          operar los servicios descritos arriba, sujetos a sus políticas:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={link}>Google</a></li>
          <li><a href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className={link}>Firebase</a></li>
        </ul>
      </LegalSection>

      <LegalSection id="seguridad" title="6. Seguridad y conservación">
        <p>
          Los datos enviados a Google, AdMob, Firebase y Play Games viajan por conexiones cifradas. Tu
          progreso local queda en tu dispositivo; la copia en la nube y los datos de análisis y errores se
          conservan según los períodos definidos por Google y Firebase.
        </p>
      </LegalSection>

      <LegalSection id="derechos" title="7. Tus derechos y opciones">
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Desinstalar el juego o borrar sus datos desde los ajustes de Android para eliminar datos locales.</li>
          <li>Eliminar la copia en la nube y tu actividad de Play Games desde Google Play Games o tu cuenta de Google.</li>
          <li>Ver o cambiar tu visibilidad en el ranking desde los ajustes de privacidad de Google Play Games.</li>
          <li>Gestionar los anuncios desde Opciones → Privacidad de anuncios y los ajustes de Android.</li>
          <li>Solicitar información o eliminación de datos escribiendo a <a href={`mailto:${CONTACT_EMAIL}`} className={link}>{CONTACT_EMAIL}</a> o siguiendo las instrucciones de <a href="https://parryroad.vercel.app/account-deletion" className={link}>Eliminación de cuenta</a>.</li>
        </ul>
      </LegalSection>

      <LegalSection id="cambios" title="8. Cambios a esta política">
        <p>Podemos actualizar esta política. Los cambios importantes se reflejarán con una nueva fecha de última actualización.</p>
      </LegalSection>

      <LegalSection id="contacto" title="9. Contacto">
        <p>
          Si tenés preguntas sobre esta Política de Privacidad, escribinos a{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className={`${link} font-bold`}>{CONTACT_EMAIL}</a>.
        </p>
      </LegalSection>
    </LegalShell>
  )
}

