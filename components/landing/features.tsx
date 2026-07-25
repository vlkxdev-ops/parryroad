import {
  ShieldCheck,
  ArrowLeftRight,
  Zap,
  Car,
  CalendarCheck,
  Trophy,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: ShieldCheck,
    title: 'Parry Perfecto',
    description:
      'Timing preciso: esquivá o hacé parry a los obstáculos justo a tiempo para sumar puntos extra y activar combos.',
  },
  {
    icon: ArrowLeftRight,
    title: '3 Carriles, Reflejos Reales',
    description:
      'Swipe simple para cambiar de carril, cada vez más rápido a medida que la distancia crece.',
  },
  {
    icon: Zap,
    title: 'Nitro y Power-Ups',
    description:
      'Imán de monedas, escudo, doble moneda y corazones extra te ayudan a llegar más lejos.',
  },
  {
    icon: Car,
    title: 'Garage de Autos',
    description:
      'Desbloqueá y personalizá autos con colores propios de carrocería y ruedas, cada uno con su propia identidad.',
  },
  {
    icon: CalendarCheck,
    title: 'Misiones Diarias',
    description:
      '3 misiones nuevas cada día + premio por tu primera corrida, con recompensas en monedas.',
  },
  {
    icon: Trophy,
    title: 'Ranking Global',
    description:
      'Competí contra el mundo en el leaderboard vía Google Play Games y mostrá tu mejor distancia.',
  },
]

export function Features() {
  return (
    <section id="features" className="scroll-mt-20 border-t border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Todo lo que hace a una corrida épica
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Mecánicas simples de aprender, imposibles de soltar.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="border-border bg-card transition-colors hover:border-primary/40"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-xl font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
