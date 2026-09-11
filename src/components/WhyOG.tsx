import { Handshake, Receipt, Server, LifeBuoy } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { GlassCard } from "./ui/GlassCard";
import { GlassIcon3D } from "./ui/glass3d/GlassIcon3D";
import { GearIcon, LinkIcon, ShieldIcon } from "./ui/glass3d/icons";
import { FeatureBannerCard } from "./ui/FeatureBannerCard";
import type { Hue } from "./ui/hueStyles";

const points: { icon: typeof Handshake; title: string; copy: string; hue: Hue }[] = [
  { icon: Handshake, title: "One point of contact", copy: "No more chasing five freelancers across four time zones. One team, always accountable.", hue: "teal" },
  { icon: Receipt, title: "One invoice", copy: "Website, support, marketing, ops - billed simply, so your books stay as clean as your operations.", hue: "lime" },
  { icon: Server, title: "Your operation, in systems built for you", copy: "Every workflow, agent, and dashboard is yours to run - engineered and owned by OG.", hue: "coral" },
  { icon: LifeBuoy, title: "We maintain, you focus", copy: "Systems evolve as you grow. We monitor, patch, and improve - quietly, in the background.", hue: "violet" },
];

export function WhyOG() {
  return (
    <section className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-coral-500">Why OG</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Earned dependency, not hostage-taking.
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          We create lock-in the honest way: by owning the infrastructure your business runs on, and running it well.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <FeatureBannerCard icon={p.icon} title={p.title} description={p.copy} hue={p.hue} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6">
        <GlassCard className="relative flex flex-col items-center gap-8 overflow-hidden p-10 sm:p-14">
          <GlassIcon3D size={130} className="left-[4%] top-[6%] hidden sm:block" rotateSpeed={0.9}>
            <GearIcon color="#2dd4bf" />
          </GlassIcon3D>
          <GlassIcon3D size={100} className="right-[6%] top-[12%] hidden sm:block" rotateSpeed={1.15} floatSpeed={1.2}>
            <LinkIcon color="#a3e635" />
          </GlassIcon3D>
          <GlassIcon3D size={95} className="bottom-[6%] left-[9%] hidden sm:block" rotateSpeed={1} floatSpeed={0.9}>
            <ShieldIcon color="#ff6b4a" />
          </GlassIcon3D>

          <div className="relative flex h-40 w-40 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-lime-400 text-center shadow-xl shadow-teal-500/20 sm:h-48 sm:w-48">
            <div className="flex h-[86%] w-[86%] flex-col items-center justify-center rounded-full bg-[var(--bg)]">
              <span className="font-display text-sm font-bold sm:text-base">Your Business</span>
              <span className="mt-1 text-[10px] text-[var(--text-secondary)]">at the center</span>
            </div>
          </div>

          <div className="grid w-full max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {["Website & Brand", "AI Support Agent", "Lead Pipelines", "Ops Dashboards"].map((s) => (
              <div key={s} className="glass rounded-2xl px-3 py-3 text-center text-xs font-medium">
                {s}
              </div>
            ))}
          </div>
          <p className="max-w-md text-center text-sm text-[var(--text-secondary)]">
            Every system orbits your business - built, connected, and maintained by Omnistart Growth.
          </p>
        </GlassCard>
      </Reveal>
    </section>
  );
}
