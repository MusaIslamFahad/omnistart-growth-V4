import type { LucideIcon } from "lucide-react";
import { cn } from "../../utils/cn";
import { hueIcon, type Hue } from "./hueStyles";

interface FeatureBannerCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  hue: Hue;
  className?: string;
}

export function FeatureBannerCard({ icon: Icon, title, description, hue, className }: FeatureBannerCardProps) {
  return (
    <div
      className={cn(
        "glass-tint glass-sheen relative flex h-full flex-col gap-4 overflow-hidden rounded-[28px] p-7 transition-transform duration-500 ease-out hover:-translate-y-1.5",
        `tint-${hue}`,
        className
      )}
    >
      <div className="flex items-center gap-3.5">
        <span className={cn("flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl", hueIcon[hue])}>
          <Icon size={20} />
        </span>
        <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}
