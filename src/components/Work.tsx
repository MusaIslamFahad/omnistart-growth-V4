import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { cn } from "../utils/cn";

const projects = [
  {
    title: "Havenwood Cafe",
    tier: "Launch",
    accent: "teal",
    image: "https://images.pexels.com/photos/34104248/pexels-photo-34104248.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "New brand identity, booking-ready website, and POS/CRM stack launched in 3 weeks for a first-time cafe owner.",
    result: "+58% online reservations in month one.",
  },
  {
    title: "Marlin & Co. Boutique",
    tier: "Grow",
    accent: "lime",
    image: "https://images.pexels.com/photos/8311890/pexels-photo-8311890.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "AI support agent trained on the full product catalog plus automated outreach for repeat customers.",
    result: "3.4x lead volume, 87% faster response time.",
  },
  {
    title: "Iron Line Fitness",
    tier: "Scale",
    accent: "coral",
    image: "https://images.pexels.com/photos/18499504/pexels-photo-18499504.png?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    summary: "Custom ops dashboard for class scheduling, staff workflows, and membership/inventory tracking across 3 locations.",
    result: "1,200+ admin hours automated per year.",
  },
];

const accentText: Record<string, string> = {
  teal: "text-teal-600 dark:text-teal-300 bg-teal-500/15",
  lime: "text-lime-600 dark:text-lime-300 bg-lime-500/15",
  coral: "text-coral-500 bg-coral-500/15",
};

const accentTint: Record<string, string> = {
  teal: "tint-teal",
  lime: "tint-lime",
  coral: "tint-coral",
};

export function Work() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);

  return (
    <section id="work" className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">Our Work</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Real businesses, running on OG systems.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <button onClick={() => setActive(p)} className="group block w-full text-left" data-cursor-magnify>
              <div className="glass-sheen relative flex h-full flex-col overflow-hidden rounded-[32px] shadow-xl shadow-black/5">
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <span className={`absolute left-5 top-5 rounded-full px-3 py-1 text-[11px] font-semibold ${accentText[p.accent]}`}>
                    {p.tier} Tier
                  </span>
                </div>

                {/* Floating tinted glass panel overlapping the photo — real z-depth
                    between the image and the written content, not a flat stack. */}
                <div
                  className={cn(
                    "glass-tint relative z-10 -mt-10 mx-4 mb-4 flex flex-1 flex-col gap-3 rounded-[26px] p-6 shadow-2xl",
                    accentTint[p.accent]
                  )}
                >
                  <h3 className="font-display text-lg font-semibold sm:text-xl">{p.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{p.summary}</p>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-teal-700 dark:text-teal-200">
                    View case study <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setActive(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-[32px] shadow-2xl"
            >
              <button
                onClick={() => setActive(null)}
                className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-white"
              >
                <X size={16} />
              </button>
              <img src={active.image} alt={active.title} className="h-60 w-full object-cover" />
              <div className={cn("glass-tint relative -mt-10 mx-4 mb-4 flex flex-col gap-3 rounded-[26px] p-8 shadow-2xl", accentTint[active.accent])}>
                <span className={`w-fit rounded-full px-3 py-1 text-[11px] font-semibold ${accentText[active.accent]}`}>
                  {active.tier} Tier
                </span>
                <h3 className="font-display text-2xl font-bold">{active.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{active.summary}</p>
                <p className="font-display text-sm font-semibold text-gradient">{active.result}</p>
                <a
                  href="#contact"
                  onClick={() => setActive(null)}
                  className="mt-2 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-lime-500 px-5 py-2.5 text-sm font-semibold text-ink-950"
                >
                  Start a project like this <ArrowUpRight size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
