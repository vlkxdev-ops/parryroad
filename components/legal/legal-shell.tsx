import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Footer } from '@/components/footer'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { LAST_UPDATED } from '@/lib/site'

export type TocItem = { id: string; label: string }

export function LegalShell({
  title,
  intro,
  toc,
  children,
}: {
  title: string
  intro: ReactNode
  toc: TocItem[]
  children: ReactNode
}) {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Logo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <article className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-16">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">
            {/* TODO: reemplazar [FECHA] en lib/site.ts */}
            Última actualización: {LAST_UPDATED}
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            {title}
          </h1>
          <div className="mt-5 text-base leading-relaxed text-muted-foreground text-pretty">
            {intro}
          </div>

          <Card className="mt-8 border-border bg-card">
            <CardContent className="p-6">
              <h2 className="font-heading text-lg font-bold">Tabla de contenidos</h2>
              <Separator className="my-4" />
              <nav aria-label="Tabla de contenidos">
                <ol className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            </CardContent>
          </Card>

          <div className="prose-legal mt-10 flex flex-col gap-8">{children}</div>
        </article>
      </main>

      <Footer />
    </div>
  )
}

export function LegalSection({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">{title}</h2>
      <div className="mt-4 flex flex-col gap-4 text-[0.95rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}
