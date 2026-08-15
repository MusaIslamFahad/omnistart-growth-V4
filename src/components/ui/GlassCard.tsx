import { type ReactNode, type CSSProperties } from "react";
import { cn } from "../../utils/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div";
  style?: CSSProperties;
  sheen?: boolean;
  hoverLift?: boolean;
}

export function GlassCard({ children, className, style, sheen = true, hoverLift = true }: GlassCardProps) {
  return (
    <div
      style={style}
      className={cn(
        "glass rounded-[32px]",
        sheen && "glass-sheen",
        hoverLift && "transition-transform duration-500 ease-out hover:-translate-y-1.5",
        className
      )}
    >
      {children}
    </div>
  );
}
