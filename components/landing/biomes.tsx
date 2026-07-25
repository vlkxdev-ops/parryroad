import Image from 'next/image'

const biomes = [
  {
    name: 'Downtown',
    mood: 'Noche azul',
    description: 'Arrancás entre rascacielos, luces neón y tráfico veloz bajo un cielo azul noche.',
    image: '/biome-downtown.png',
    alt: 'Bioma Downtown de ParryRoad: una autopista neón entre rascacielos de noche.',
  },
  {
    name: 'Village',
    mood: 'Atardecer dorado',
    description:
      'Más adelante el escenario cambia a un pueblo entre colinas bañado por un atardecer dorado.',
    image: '/biome-village.png',
    alt: 'Bioma Village de ParryRoad: una ruta rural entre colinas al atardecer dorado.',
  },
]

export function Biomes() {
  return (
    <section className="border-t border-border/60 bg-card/30">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">
            Recorré la ciudad
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            El escenario cambia a medida que avanzás. Cuanto más lejos llegás, más mundo descubrís.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {biomes.map((biome) => (
            <article
              key={biome.name}
              className="group overflow-hidden rounded-3xl border border-border bg-card"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={biome.image}
                  alt={biome.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary backdrop-blur-sm">
                  {biome.mood}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="font-heading text-2xl font-extrabold">{biome.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{biome.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
