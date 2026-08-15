import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";
import { hueIcon, hueRing, type Hue } from "./hueStyles";

export type { Hue };

interface ServiceCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  hue: Hue;
  className?: string;
}

export function ServiceCard({ number, icon: Icon, title, description, hue, className }: ServiceCardProps) {
  return (
    <div
      tabIndex={0}
      className={cn(
        "group glass-tint glass-sheen relative flex h-full min-h-[23rem] flex-col justify-between overflow-hidden rounded-[32px] p-8 outline-none transition-transform duration-500 ease-out hover:-translate-y-1.5 focus-visible:-translate-y-1.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]",
        `tint-${hue}`,
        hueRing[hue],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", hueIcon[hue])}>
          <Icon size={22} />
        </span>
        <span className="font-display select-none text-6xl font-bold leading-none text-ink-950/15 dark:text-ink-50/15 sm:text-7xl">
          {number}
        </span>
      </div>

      <div className="relative mt-10 transition-opacity duration-300 sm:group-hover:opacity-0 sm:group-focus-visible:opacity-0">
        <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
        {/* Touch devices can't hover — keep the detail reachable without it. */}
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)] sm:hidden">{description}</p>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden translate-y-[80%] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:block">
        <div className="glass-panel-solid rounded-t-[32px] px-8 pb-8 pt-6">
          <span className="mx-auto mb-4 block h-1 w-10 rounded-full bg-[var(--text-secondary)]/30" aria-hidden />
          <h3 className="font-display text-xl font-semibold sm:text-2xl">{title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
        </div>
      </div>
    </div>
  );
}
