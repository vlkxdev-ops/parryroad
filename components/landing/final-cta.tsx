import { StoreButtons } from '@/components/store-buttons'

export function FinalCta() {
  return (
    <section className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card px-6 py-14 text-center sm:px-10">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-20 left-1/2 size-[30rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
          />
          <div className="relative flex flex-col items-center">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
              Sumate a la carrera
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground text-pretty">
              Descargá ParryRoad gratis y empezá a batir récords hoy mismo.
            </p>

            <StoreButtons className="mt-8 justify-center" />

            <p className="mt-6 text-xs text-muted-foreground">
              Gratis para jugar · Compras opcionales dentro de la app · Apto para todo público (7+)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
