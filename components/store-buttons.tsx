import { Play } from 'lucide-react'
import { cn } from '@/lib/utils'
import { GOOGLE_PLAY_URL } from '@/lib/site'

export function StoreButtons({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row', className)}>
      <a
        href={GOOGLE_PLAY_URL}
        className="flex items-center justify-center gap-3 rounded-2xl bg-primary px-5 py-3.5 text-primary-foreground shadow-[0_0_28px_-8px_var(--color-primary)] transition-transform hover:scale-[1.03] active:scale-95"
      >
        <Play className="size-6 shrink-0 fill-current" aria-hidden="true" />
        <span className="text-left leading-tight">
          <span className="block text-[0.7rem] font-semibold opacity-80">Descargá en</span>
          <span className="block font-heading text-base font-extrabold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
