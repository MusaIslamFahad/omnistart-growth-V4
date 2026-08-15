import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { cn } from "../utils/cn";

const posts = [
  {
    tag: "Launch",
    hue: "tint-teal",
    title: "5 things your website needs before you spend a dollar on ads",
    excerpt: "Most ad budgets get wasted on sites that aren't ready to convert. Here's the pre-launch checklist we run for every client.",
    date: "Jul 2026",
    image: "https://images.pexels.com/photos/7652541/pexels-photo-7652541.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Grow",
    hue: "tint-lime",
    title: "What makes an AI support agent actually trustworthy",
    excerpt: "RAG grounding, escalation paths, and tone matching — the architecture decisions behind an agent customers don't hate.",
    date: "Jul 2026",
    image: "https://images.pexels.com/photos/8092507/pexels-photo-8092507.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  {
    tag: "Scale",
    hue: "tint-coral",
    title: "The dashboard that finally got our client's team off spreadsheets",
    excerpt: "A behind-the-scenes look at building a lightweight ops layer that departments actually adopt.",
    date: "Jun 2026",
    image: "https://images.pexels.com/photos/38882512/pexels-photo-38882512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
];

export function Insights() {
  return (
    <section id="insights" className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-500">Insights</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Notes from inside the systems we build.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.title} delay={i * 0.1}>
            <a href="#" data-cursor-magnify className="group block h-full">
              <div className="glass-sheen relative flex h-full flex-col overflow-hidden rounded-[32px] shadow-xl shadow-black/5">
                <div className="relative h-56 overflow-hidden">
                  <img src={post.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
                    {post.tag}
                  </span>
                </div>

                <div className={cn("glass-tint relative z-10 -mt-10 mx-4 mb-4 flex flex-1 flex-col gap-2 rounded-[26px] p-6 shadow-2xl", post.hue)}>
                  <p className="text-xs text-[var(--text-secondary)]">{post.date}</p>
                  <h3 className="font-display text-base font-semibold leading-snug sm:text-lg">{post.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{post.excerpt}</p>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-teal-700 dark:text-teal-200">
                    Read more <ArrowUpRight size={14} />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
