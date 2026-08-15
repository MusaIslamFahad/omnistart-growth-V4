import { useCountUp } from "../hooks/useCountUp";
import { Reveal } from "./ui/Reveal";
import { GlassIcon3D } from "./ui/glass3d/GlassIcon3D";
import { ChartIcon } from "./ui/glass3d/icons";
import { cn } from "../utils/cn";
import type { Hue } from "./ui/ServiceCard";

const stats: { target: number; decimals?: number; suffix: string; label: string; hue: Hue }[] = [
  { target: 3.4, decimals: 1, suffix: "x", label: "Avg. lead volume increase within 90 days", hue: "teal" },
  { target: 87, suffix: "%", label: "Faster customer response time via AI agents", hue: "lime" },
  { target: 1200, suffix: "+", label: "Operational hours automated every month", hue: "coral" },
  { target: 94, suffix: "%", label: "Client retention across active retainers", hue: "violet" },
];

function StatCard({ stat, delay }: { stat: (typeof stats)[number]; delay: number }) {
  const { ref, value } = useCountUp(stat.decimals ? stat.target * 10 : stat.target);
  const display = stat.decimals ? (value / 10).toFixed(stat.decimals) : value;
  return (
    <Reveal delay={delay}>
      <div className={cn("glass-tint glass-sheen flex h-full min-h-[13rem] flex-col justify-between gap-6 rounded-[32px] p-8", `tint-${stat.hue}`)}>
        <div ref={ref} className="font-display text-5xl font-bold sm:text-6xl">
          {display}
          {stat.suffix}
        </div>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{stat.label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section className="container-fluid relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-2xl">
        <GlassIcon3D size={100} className="left-[6%] -top-10 hidden sm:block" rotateSpeed={0.9}>
          <ChartIcon color="#ff6b4a" />
        </GlassIcon3D>
        <Reveal className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Results</p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Numbers our clients feel every week.
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatCard key={s.label} stat={s} delay={i * 0.1} />
        ))}
      </div>

      <Reveal delay={0.25} className="mt-8">
        <div className="group relative overflow-hidden rounded-[32px] shadow-2xl shadow-black/10">
          <div
            className="h-[24rem] w-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[28rem]"
            style={{ backgroundImage: "url('https://images.pexels.com/photos/8092461/pexels-photo-8092461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/5" />
          <div className="absolute inset-0 flex flex-col justify-end gap-4 p-8 sm:p-12">
            <span className="w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-md">
              Case Study — Grow Tier
            </span>
            <h3 className="max-w-xl font-display text-2xl font-bold text-white sm:text-3xl">
              A local service business went from voicemail to a 24/7 AI front desk.
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              After onboarding onto Grow, missed calls dropped 92% and booked jobs rose 3.4x in the first quarter —
              without hiring a single new receptionist.
            </p>
            <a href="#work" className="flex w-fit items-center gap-2 text-sm font-semibold text-white underline-offset-4 hover:underline">
              Read the full story →
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
