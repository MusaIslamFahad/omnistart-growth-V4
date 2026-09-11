import { PhoneCall, FileSearch, Wrench, Gauge } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { TimelineStepCard } from "./ui/TimelineStepCard";
import type { Hue } from "./ui/hueStyles";

const steps: { number: string; icon: typeof PhoneCall; title: string; copy: string; hue: Hue }[] = [
  { number: "01", icon: PhoneCall, title: "Discovery Call", copy: "We map your business, your bottlenecks, and where you sit on the Launch → Grow → Scale path.", hue: "teal" },
  { number: "02", icon: FileSearch, title: "System Blueprint", copy: "You get a concrete plan: what we build, what it replaces, and how it connects to everything else.", hue: "lime" },
  { number: "03", icon: Wrench, title: "Build & Deploy", copy: "Our team builds your site, brand, agents, and automations on productized systems - customized to you.", hue: "coral" },
  { number: "04", icon: Gauge, title: "Run & Optimize", copy: "We operate and improve the systems continuously. You focus on the business; we handle the infrastructure.", hue: "violet" },
];

export function Process() {
  return (
    <section id="process" className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">How It Works</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Hand us the running part.
        </h2>
      </Reveal>

      <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* connecting path (desktop) — same device used for the tier line, ties the two "journey" sections together visually */}
        <div className="pointer-events-none absolute left-0 right-0 top-16 hidden lg:block" aria-hidden>
          <svg width="100%" height="2" className="overflow-visible">
            <line x1="12%" y1="1" x2="88%" y2="1" stroke="url(#step-grad)" strokeWidth="2" strokeDasharray="6 6" />
            <defs>
              <linearGradient id="step-grad" x1="0" x2="1">
                <stop offset="0%" stopColor="#0FB5AE" />
                <stop offset="33%" stopColor="#A3E635" />
                <stop offset="66%" stopColor="#FF6B4A" />
                <stop offset="100%" stopColor="#8B6CF0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {steps.map((s, i) => (
          <Reveal key={s.number} delay={i * 0.1}>
            <TimelineStepCard number={s.number} icon={s.icon} title={s.title} description={s.copy} hue={s.hue} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
