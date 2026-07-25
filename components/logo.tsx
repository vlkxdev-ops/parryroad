import Link from 'next/link'
import { Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        'group flex items-center gap-2 font-heading text-xl font-extrabold tracking-tight text-foreground',
        className,
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_20px_-4px_var(--color-primary)] transition-transform group-hover:scale-105">
        <Zap className="size-5 fill-current" aria-hidden="true" />
      </span>
      <span>
        Parry<span className="text-primary">Road</span>
      </span>
    </Link>
  )
}
