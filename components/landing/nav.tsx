import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { GOOGLE_PLAY_URL } from '@/lib/site'

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <nav aria-label="Navegación principal" className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#como-se-juega"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            Cómo se juega
          </a>
          <a
            href="#descargar"
            className="text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
          >
            Descargar
          </a>
        </nav>

        <Button
          size="lg"
          nativeButton={false}
          render={<a href={GOOGLE_PLAY_URL} />}
          className="rounded-xl px-4 font-heading text-sm font-extrabold shadow-[0_0_24px_-8px_var(--color-primary)]"
        >
          Jugar Gratis
        </Button>
      </div>
    </header>
  )
}
