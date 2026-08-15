import { Star, Quote } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { cn } from "../utils/cn";
import { hueSolid, type Hue } from "./ui/hueStyles";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  hue: Hue;
}

const rowOne: Testimonial[] = [
  { name: "Marcus Whitfield", role: "Founder, Iron Line Fitness", quote: "Omnistart Growth didn't just build our website — they became our tech department. Our AI agent answers customer questions at 2am, and I finally sleep.", hue: "teal" },
  { name: "Dana Reyes", role: "Marlin & Co. Boutique", quote: "They wired together everything we needed in one system. No more logging into five different tools before 9am.", hue: "violet" },
  { name: "Priya Nandan", role: "Havenwood Cafe", quote: "Launch tier had us live and taking bookings in three weeks. It felt less like hiring a vendor and more like gaining a co-founder.", hue: "lime" },
  { name: "Tomás Herrera", role: "Herrera Legal Group", quote: "The ops dashboard alone saved us 20 hours a week. Our paralegals finally trust the numbers on the screen.", hue: "coral" },
];

const rowTwo: Testimonial[] = [
  { name: "Aisha Cole", role: "Cole Skincare", quote: "One invoice, one team, zero chasing vendors. Exactly what we needed to actually focus on the product again.", hue: "coral" },
  { name: "Ben Okafor", role: "Okafor Logistics", quote: "Their AI support agent feels like a real team member — it escalates the right things and handles the rest quietly.", hue: "lime" },
  { name: "Sofia Marchetti", role: "Marchetti Home Goods", quote: "We went from a spreadsheet-run warehouse to a real inventory system in under a month, with zero downtime.", hue: "teal" },
  { name: "Jordan Ellis", role: "Ellis & Row Studio", quote: "Every system they built is ours to keep. No black boxes, no ransom — just infrastructure that works.", hue: "violet" },
];

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <div className={cn("glass-tint flex h-full w-[22rem] shrink-0 flex-col gap-6 rounded-[32px] p-9 sm:w-[26rem] sm:p-10", `tint-${t.hue}`)}>
      <div className="flex items-center justify-between">
        <span className={cn("flex h-11 w-11 items-center justify-center rounded-2xl shadow-md", hueSolid[t.hue])}>
          <Quote size={18} fill="currentColor" strokeWidth={0} />
        </span>
        <div className="flex gap-1 text-lime-500">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
          ))}
        </div>
      </div>
      <p className="font-display flex-1 text-lg leading-snug sm:text-xl">&ldquo;{t.quote}&rdquo;</p>
      <div>
        <p className="text-sm font-semibold">{t.name}</p>
        <p className="text-sm text-[var(--text-secondary)]">{t.role}</p>
      </div>
    </div>
  );
}

export function Testimonials() {
  const loopA = [...rowOne, ...rowOne];
  const loopB = [...rowTwo, ...rowTwo];

  return (
    <section className="container-fluid relative py-24 sm:py-32">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-coral-500">Testimonials</p>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Clients who stopped juggling vendors.
        </h2>
      </Reveal>

      <div className="mt-16 flex flex-col gap-6">
        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee gap-6 hover:[animation-play-state:paused]">
            {loopA.map((t, i) => (
              <TestimonialCard key={`a-${i}`} t={t} />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee-reverse gap-6 hover:[animation-play-state:paused]">
            {loopB.map((t, i) => (
              <TestimonialCard key={`b-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
