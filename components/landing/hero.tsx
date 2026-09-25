import Image from 'next/image'
import { StoreButtons } from '@/components/store-buttons'

export function Hero() {
  return (
    <section id="descargar" className="relative overflow-hidden">
      {/* glow accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 size-[42rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 md:grid-cols-2 md:pt-20 md:pb-24">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
            Endless Runner · Android · Público 13+
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Esquivá. Hacé <span className="text-primary">Parry</span>. No pares.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            ParryRoad es un endless runner donde cada segundo cuenta: cambiá de carril, reventá
            obstáculos con un parry perfecto y hacé la corrida más larga posible mientras juntás
            monedas y desbloqueás autos nuevos.
          </p>

          <StoreButtons className="mt-8 w-full max-w-md justify-center md:justify-start" />
        </div>

        <div className="flex justify-center">
          <PhoneMockup />
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 translate-y-6 scale-90 rounded-[3rem] bg-primary/20 blur-2xl"
      />
      <div className="relative w-[16rem] rounded-[2.5rem] border-[6px] border-secondary bg-secondary p-1.5 shadow-2xl sm:w-[18rem]">
        {/* notch */}
        <div className="absolute left-1/2 top-3 z-10 h-1.5 w-16 -translate-x-1/2 rounded-full bg-background/60" />
        <div className="overflow-hidden rounded-[2rem]">
          <Image
            src="/gameplay-downtown.png"
            alt="Gameplay de ParryRoad: un auto esquivando obstáculos en una autopista de ciudad con luces neón de noche."
            width={540}
            height={960}
            priority
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}
