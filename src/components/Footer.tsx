import { ArrowRight } from "lucide-react";

const columns = [
  {
    title: "Tiers",
    links: ["Launch", "Grow", "Scale"],
  },
  {
    title: "Company",
    links: ["How It Works", "Our Work", "Insights", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

const marqueeText = Array(6).fill("You focus on business. We handle the rest");

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 rounded-t-[50%] bg-gradient-to-b from-transparent to-ink-950" />
      <div className="relative bg-gradient-to-b from-teal-900 to-ink-950 pt-20 text-ink-50">
        <div className="container-fluid">
          <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-teal-400 to-lime-400 text-sm font-bold text-ink-950">
                  OG
                </span>
                <span className="font-display text-lg font-semibold">Omnistart Growth</span>
              </div>
              <p className="max-w-xs text-sm text-ink-100/70">
                A full-stack business operations agency. You focus on your business; we run everything else.
              </p>
              <a
                href="#contact"
                className="flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-lime-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-105"
              >
                Book a Call <ArrowRight size={14} />
              </a>
            </div>

            {columns.map((col) => (
              <div key={col.title}>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-lime-300">{col.title}</p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-ink-100/70 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border-y border-white/10 py-4">
          <div className="flex w-max animate-marquee-slow gap-8 whitespace-nowrap">
            {[...marqueeText, ...marqueeText].map((text, i) => (
              <span key={i} className="font-display flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-ink-100/50">
                {text} <span className="text-lime-400">→</span>
              </span>
            ))}
          </div>
        </div>

        <div className="container-fluid py-8">
          <p className="font-display select-none text-center text-[13vw] font-bold leading-none tracking-tighter text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.15)] sm:text-[9vw]">
            OMNISTART
          </p>
        </div>

        <div className="container-fluid flex flex-col items-center justify-between gap-3 pb-8 text-xs text-ink-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Omnistart Growth. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
