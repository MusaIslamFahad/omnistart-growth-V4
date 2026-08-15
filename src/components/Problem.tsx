import { Users, Clock, Cpu } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { GlassCard } from "./ui/GlassCard";
import { ServiceCard, type Hue } from "./ui/ServiceCard";

const pains: { number: string; icon: typeof Users; title: string; copy: string; hue: Hue }[] = [
  {
    number: "01",
    icon: Users,
    title: "Too many vendors",
    copy: "A web designer here, a marketing freelancer there, an app for support, a spreadsheet for everything else. Nothing talks to each other — and neither do the people running it.",
    hue: "coral",
  },
  {
    number: "02",
    icon: Clock,
    title: "No time to grow",
    copy: "You're answering DMs at midnight and fixing the booking calendar at 6am. There's no time left to actually build the business you started.",
    hue: "violet",
  },
  {
    number: "03",
    icon: Cpu,
    title: "Tech overwhelm",
    copy: "CRMs, automations, dashboards, AI tools — the landscape moves faster than you can learn it, let alone wire it together yourself.",
    hue: "teal",
  },
];

export function Problem() {
  return (
    <section className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-coral-500">The Problem</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Running a business shouldn't mean running five different jobs.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {pains.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <ServiceCard number={p.number} icon={p.icon} title={p.title} description={p.copy} hue={p.hue} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-8">
        <GlassCard className="p-8 text-center sm:p-10">
          <p className="font-display text-lg font-semibold sm:text-xl">
            What if one partner just… ran it for you? <span className="text-gradient">That's Omnistart Growth.</span>
          </p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
