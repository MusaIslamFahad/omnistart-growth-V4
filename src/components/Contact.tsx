import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Globe, MessageCircle, Send, ArrowRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { GlassCard } from "./ui/GlassCard";

interface FormState {
  name: string;
  email: string;
  stage: string;
  message: string;
}

const initialState: FormState = { name: "", email: "", stage: "Pre-launch", message: "" };

export function Contact() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email address.";
    if (!form.message.trim() || form.message.trim().length < 10) next.message = "Tell us a bit more (10+ characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm(initialState);
    window.setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <section id="contact" className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-lime-600 dark:text-lime-400">Contact</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Ready to hand off the rest?
        </h2>
        <p className="mt-4 text-[var(--text-secondary)]">
          Tell us where your business is today. We'll show you exactly where to start.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-7 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <GlassCard className="relative p-8 sm:p-10">
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">Name</label>
                  <input
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:bg-white/5"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-coral-500">{errors.name}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">Email</label>
                  <input
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:bg-white/5"
                    placeholder="jane@business.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-coral-500">{errors.email}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">
                  Where's your business today?
                </label>
                <select
                  value={form.stage}
                  onChange={(e) => setForm({ ...form, stage: e.target.value })}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:bg-white/5"
                >
                  <option>Pre-launch</option>
                  <option>Growing</option>
                  <option>Scaling</option>
                </select>
              </div>

              <div>
                <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm outline-none ring-teal-500 transition focus:ring-2 dark:bg-white/5"
                  placeholder="What's slowing your business down right now?"
                />
                {errors.message && <p className="mt-1 text-xs text-coral-500">{errors.message}</p>}
              </div>

              <button
                type="submit"
                data-cursor-magnify
                className="mt-1 flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-teal-500 to-lime-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-teal-500/20 transition-transform hover:scale-105"
              >
                Send Message <ArrowRight size={16} />
              </button>
            </form>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 12, scale: 0.96 }}
                  className="glass-panel absolute bottom-6 right-6 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-medium"
                >
                  <CheckCircle2 size={18} className="text-teal-500" />
                  Thanks! We'll be in touch within one business day.
                </motion.div>
              )}
            </AnimatePresence>
          </GlassCard>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col gap-5">
          <GlassCard className="flex flex-col gap-5 p-8">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-500 dark:text-teal-300">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Email us</p>
                <p className="text-sm font-semibold">hello@omnistartgrowth.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-lime-500/15 text-lime-600 dark:text-lime-300">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Based in</p>
                <p className="text-sm font-semibold">Austin, TX - working with clients everywhere</p>
              </div>
            </div>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold transition-transform hover:scale-105 dark:bg-white/5"
            >
              Book a Free Call <ArrowRight size={14} />
            </a>
          </GlassCard>

          <GlassCard className="flex items-center justify-between p-6">
            <p className="text-sm font-medium">Follow along</p>
            <div className="flex gap-2">
              {[Globe, Send, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-transform hover:scale-110 dark:bg-white/5"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
