import { Hand, Target, Flame } from 'lucide-react'

const steps = [
  {
    icon: Hand,
    title: 'Deslizá',
    description: 'Deslizá para cambiar de carril y esquivar el tráfico.',
  },
  {
    icon: Target,
    title: 'Hacé Parry',
    description: 'Tocá en el momento justo para ejecutar un Parry y ganar puntos extra.',
  },
  {
    icon: Flame,
    title: 'Batí tu récord',
    description: 'Sumá monedas, activá el Nitro y batí tu récord de distancia.',
  },
]

export function HowToPlay() {
  return (
    <section id="como-se-juega" className="scroll-mt-20">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Cómo se juega
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Tres gestos. Cero tutoriales aburridos.
          </p>
        </div>

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, description }, i) => (
            <li
              key={title}
              className="relative flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center"
            >
              <span className="absolute -top-4 left-1/2 flex size-9 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-heading text-base font-extrabold text-primary-foreground">
                {i + 1}
              </span>
              <span className="mt-2 flex size-14 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-bold">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
