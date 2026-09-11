import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import { GlassIcon3D } from "./ui/glass3d/GlassIcon3D";
import { RocketIcon, GearIcon, DiamondIcon } from "./ui/glass3d/icons";
import { GlassCard } from "./ui/GlassCard";

const trust = [
  { label: "Active Clients", value: "40+" },
  { label: "Hours Automated / mo", value: "1,200+" },
  { label: "Avg. Response Time", value: "< 2 min" },
  { label: "Client Retention", value: "94%" },
];

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 -z-20 bg-noise" />
      <div
        className="absolute inset-0 -z-20 opacity-40 dark:opacity-60"
        style={{
          backgroundImage: "url('/images/hero-glass.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 20%, transparent 75%)",
        }}
      />
      <GlassIcon3D size={220} className="left-[6%] top-[16%] hidden md:block" rotateSpeed={0.8}>
        <RocketIcon color="#2dd4bf" />
      </GlassIcon3D>
      <GlassIcon3D size={150} className="right-[9%] top-[26%] hidden md:block" rotateSpeed={1.1} floatSpeed={1.3}>
        <GearIcon color="#a3e635" />
      </GlassIcon3D>
      <GlassIcon3D size={110} className="bottom-[14%] left-[13%] hidden md:block" rotateSpeed={1} floatSpeed={0.9}>
        <DiamondIcon color="#ff6b4a" />
      </GlassIcon3D>

      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-6 flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-600 dark:text-teal-300"
        >
          <Sparkles size={14} /> Full-Stack Business Operations
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          You Run the Vision.
          <br />
          <span className="text-gradient">We Run Everything Else.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-balance text-base text-[var(--text-secondary)] sm:text-lg"
        >
          Website, brand, AI customer support, marketing automation, and operations dashboards
          built and maintained by one partner. One system. One invoice.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            data-cursor-magnify
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-lime-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 transition-transform hover:scale-105"
          >
            Book a Free Call
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#tiers"
            data-cursor-magnify
            className="glass flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-transform hover:scale-105"
          >
            <PlayCircle size={16} /> See How It Works
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-16 grid w-full grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {trust.map((t) => (
            <GlassCard key={t.label} className="px-4 py-4" hoverLift={false}>
              <p className="font-display text-xl font-bold text-gradient sm:text-2xl">{t.value}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wide text-[var(--text-secondary)] sm:text-xs">{t.label}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
