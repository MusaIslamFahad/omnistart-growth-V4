import { Check, ArrowRight, Rocket, TrendingUp, Layers, ShieldCheck } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { GlassCard } from "./ui/GlassCard";
import { GlassIcon3D } from "./ui/glass3d/GlassIcon3D";
import { DiamondIcon } from "./ui/glass3d/icons";
import { hueIcon } from "./ui/hueStyles";
import { cn } from "../utils/cn";

const tiers = [
  {
    number: "01",
    id: "launch",
    name: "Launch",
    icon: Rocket,
    accent: "teal",
    problem: "\u201cI don't have a professional online presence yet.\u201d",
    desc: "Your foundation — built fast, built right, built to grow with you.",
    items: ["Website design & development", "Brand identity — logo, voice, visual system", "Domain, hosting, CRM & booking/payment setup"],
    cta: "Start with Launch",
  },
  {
    number: "02",
    id: "grow",
    name: "Grow",
    icon: TrendingUp,
    accent: "lime",
    problem: "\u201cI have a business but no consistent leads or fast customer response.\u201d",
    desc: "Where dependency begins — leads and support flow through systems we own and run.",
    items: ["AI customer support agent (trained on your business)", "Marketing automation & lead generation", "Content & social presence support"],
    cta: "Grow with OG",
    featured: true,
  },
  {
    number: "03",
    id: "scale",
    name: "Scale",
    icon: Layers,
    accent: "coral",
    problem: "\u201cI'm growing but drowning in manual operations.\u201d",
    desc: "Your entire operation, living in infrastructure we built and maintain for you.",
    items: ["Internal dashboards & reporting", "Cross-department workflow automation", "Inventory tracking & staff scheduling software"],
    cta: "Talk About Scale",
  },
];

const accentMap: Record<string, { border: string; grad: string; tint: string; ring: string; hue: "teal" | "lime" | "coral" }> = {
  teal: { border: "border-teal-500/30", grad: "from-teal-400 to-teal-600", tint: "tint-teal", ring: "ring-teal-400/40", hue: "teal" },
  lime: { border: "border-lime-500/30", grad: "from-lime-400 to-lime-600", tint: "tint-lime", ring: "ring-lime-400/40", hue: "lime" },
  coral: { border: "border-coral-500/30", grad: "from-coral-400 to-coral-600", tint: "tint-coral", ring: "ring-coral-400/40", hue: "coral" },
};

export function Services() {
  return (
    <section id="tiers" className="container-fluid relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-3xl">
        <GlassIcon3D size={110} className="right-[-2%] top-0 hidden sm:block" rotateSpeed={0.85}>
          <DiamondIcon color="#8b6cf0" />
        </GlassIcon3D>
        <Reveal className="text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">The Model</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          One partner. Three layers. <span className="text-gradient">One path forward.</span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          We don't sell a menu of services — we sell outcomes, delivered as layered tiers. Start with Launch. Grow when ready. Scale when it hurts.
        </p>
        </Reveal>
      </div>

      <div className="relative mt-16 grid gap-7 lg:grid-cols-3">
        {/* connecting path (desktop) */}
        <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block" aria-hidden>
          <svg width="100%" height="2" className="overflow-visible">
            <line x1="16%" y1="1" x2="84%" y2="1" stroke="url(#tier-grad)" strokeWidth="2" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="tier-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#0FB5AE" />
                <stop offset="50%" stopColor="#A3E635" />
                <stop offset="100%" stopColor="#FF6B4A" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {tiers.map((tier, i) => {
          const accent = accentMap[tier.accent];
          const Icon = tier.icon;
          return (
            <Reveal key={tier.id} delay={i * 0.12}>
              <div
                className={cn(
                  "glass-tint glass-sheen relative flex h-full flex-col gap-5 overflow-hidden rounded-[32px] p-8 transition-transform duration-500 ease-out hover:-translate-y-1.5 sm:p-9",
                  accent.tint,
                  tier.featured && "lg:-translate-y-4 lg:scale-[1.03]",
                  tier.featured && `ring-2 ${accent.ring}`
                )}
              >
                <span className={cn("absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r", accent.grad)} aria-hidden />

                {tier.featured && (
                  <span className="w-fit self-start rounded-full bg-gradient-to-r from-lime-400 to-lime-500 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-950 shadow-sm">
                    Most Popular
                  </span>
                )}

                <div className="flex items-center justify-between">
                  <span className="font-display text-5xl font-bold text-ink-950/15 dark:text-ink-50/15">{tier.number}</span>
                  <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", hueIcon[accent.hue])}>
                    <Icon size={22} />
                  </div>
                </div>

                <div>
                  <h3 className="font-display text-2xl font-bold sm:text-3xl">{tier.name}</h3>
                  <p className="mt-1.5 text-sm font-medium italic text-ink-900/80 dark:text-ink-50/80">{tier.problem}</p>
                </div>

                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{tier.desc}</p>

                <ul className="flex flex-1 flex-col gap-3">
                  {tier.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <span className={cn("mt-0.5 flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full", hueIcon[accent.hue])}>
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-[var(--text-primary)]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  data-cursor-magnify
                  className={cn(
                    "mt-2 flex items-center justify-center gap-2 rounded-full border px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-105",
                    accent.border,
                    "bg-gradient-to-r",
                    accent.grad,
                    "text-ink-950"
                  )}
                >
                  {tier.cta} <ArrowRight size={14} />
                </a>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <GlassCard className="flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:p-10">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-500/10 text-ink-500 dark:text-ink-100">
            <ShieldCheck size={22} />
          </div>
          <div>
            <h4 className="font-display text-lg font-semibold sm:text-xl">What we deliberately don't do</h4>
            <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              We build the <strong className="text-[var(--text-primary)]">software</strong> that tracks your inventory — not the shelf management.
              We automate the <strong className="text-[var(--text-primary)]">workflows</strong> around HR, payroll and legal — onboarding checklists,
              reminders, scheduling — and connect you with trusted partners for the licensed work itself. Honest scope, always.
            </p>
          </div>
        </GlassCard>
      </Reveal>
    </section>
  );
}
