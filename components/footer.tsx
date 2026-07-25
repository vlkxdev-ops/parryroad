import Link from 'next/link'
import { Logo } from '@/components/logo'
import { CONTACT_EMAIL } from '@/lib/site'

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Un endless runner mobile de reflejos, parrys y récords de distancia.
          </p>
        </div>

        <nav aria-label="Enlaces del pie de página">
          <ul className="flex flex-col gap-3 text-sm font-semibold sm:flex-row sm:gap-6">
            <li>
              <Link
                href="/"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Términos de Servicio
              </Link>
            </li>
            <li>
              <Link
                href="/account-deletion"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Eliminación de cuenta
              </Link>
            </li>
            <li>
              {/* TODO: reemplazar por el email de soporte real */}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto w-full max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-center text-xs text-muted-foreground sm:text-left">
            &copy; 2026 ParryRoad. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
