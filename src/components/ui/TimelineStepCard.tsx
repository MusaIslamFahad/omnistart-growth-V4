import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";
import { hueSolid, type Hue } from "./hueStyles";

interface TimelineStepCardProps {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  hue: Hue;
  className?: string;
}

export function TimelineStepCard({ number, icon: Icon, title, description, hue, className }: TimelineStepCardProps) {
  return (
    <div
      className={cn(
        "glass-tint glass-sheen relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-[32px] p-8 text-center transition-transform duration-500 ease-out hover:-translate-y-1.5",
        `tint-${hue}`,
        className
      )}
    >
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Step {number}</span>
      <div className={cn("mt-1 flex h-16 w-16 items-center justify-center rounded-2xl shadow-lg", hueSolid[hue])}>
        <Icon size={26} />
      </div>
      <h3 className="font-display mt-1 text-lg font-semibold sm:text-xl">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}
