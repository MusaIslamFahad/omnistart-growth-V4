export type Hue = "teal" | "lime" | "coral" | "violet";

// Icon badges that sit ON a matching tint-{hue} card. Light mode always uses
// dark ink for the glyph — every brand hue here is light/mid, so colored
// glyphs on their own tinted glass background fail contrast in light mode
// (same hue on same hue). Dark mode can safely use the pale hue shade since
// the card background is much darker there.
export const hueIcon: Record<Hue, string> = {
  teal: "bg-teal-400/35 text-ink-900 dark:bg-teal-500/25 dark:text-teal-200",
  lime: "bg-lime-400/45 text-ink-900 dark:bg-lime-500/25 dark:text-lime-200",
  coral: "bg-coral-400/35 text-ink-900 dark:bg-coral-500/25 dark:text-coral-200",
  violet: "bg-violet-400/35 text-ink-900 dark:bg-violet-500/25 dark:text-violet-200",
};

// Solid gradient chips (badges that float on the neutral page background or
// a photo scrim, not on their own tint) — safe to use a light glyph, except
// lime which stays dark-on-light because lime itself is too light for white text.
export const hueSolid: Record<Hue, string> = {
  teal: "bg-gradient-to-br from-teal-400 to-teal-600 text-white",
  lime: "bg-gradient-to-br from-lime-400 to-lime-600 text-ink-950",
  coral: "bg-gradient-to-br from-coral-400 to-coral-600 text-white",
  violet: "bg-gradient-to-br from-violet-400 to-violet-600 text-white",
};

export const hueRing: Record<Hue, string> = {
  teal: "focus-visible:ring-teal-400",
  lime: "focus-visible:ring-lime-400",
  coral: "focus-visible:ring-coral-400",
  violet: "focus-visible:ring-violet-400",
};

// Colored text for use ONLY on neutral/near-white or photo-scrim surfaces
// (e.g. glass-panel-solid, badges over an image) — never on a matching tint.
export const hueAccentText: Record<Hue, string> = {
  teal: "text-teal-600 dark:text-teal-300",
  lime: "text-lime-700 dark:text-lime-300",
  coral: "text-coral-600 dark:text-coral-300",
  violet: "text-violet-600 dark:text-violet-300",
};
