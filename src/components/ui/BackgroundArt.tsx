// Sits once at the root of the page, absolutely positioned behind every
// section. Glassmorphism only reads as "glass" when there's varied color and
// texture behind it to blur — a flat single-color body background makes any
// backdrop-blur panel look like plain translucent plastic. This layer gives
// every section (not just the hero) something colorful and textured to pick
// up: soft drifting color fields, a faint structural grid, and a whisper of
// grain.
export function BackgroundArt() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-grid-lines opacity-[0.4] dark:opacity-[0.5]" />
      <div className="absolute inset-0 bg-grain opacity-[0.05]" />

      <div className="absolute left-[-12%] top-[2%] h-[560px] w-[560px] rounded-full bg-teal-400/25 blur-[130px] animate-float-slow dark:bg-teal-500/15" />
      <div className="absolute right-[-8%] top-[12%] h-[440px] w-[440px] rounded-full bg-coral-400/20 blur-[120px] animate-float-slower dark:bg-coral-500/12" />
      <div className="absolute left-[8%] top-[26%] h-[380px] w-[380px] rounded-full bg-lime-400/22 blur-[110px] animate-float-slow dark:bg-lime-500/12" />
      <div className="absolute right-[2%] top-[38%] h-[500px] w-[500px] rounded-full bg-violet-400/22 blur-[130px] animate-float-slower dark:bg-violet-500/12" />
      <div className="absolute left-[-10%] top-[50%] h-[520px] w-[520px] rounded-full bg-teal-400/18 blur-[130px] animate-float-slow dark:bg-teal-500/10" />
      <div className="absolute right-[-10%] top-[62%] h-[440px] w-[440px] rounded-full bg-coral-400/20 blur-[120px] animate-float-slower dark:bg-coral-500/12" />
      <div className="absolute left-[4%] top-[74%] h-[400px] w-[400px] rounded-full bg-lime-400/18 blur-[110px] animate-float-slow dark:bg-lime-500/10" />
      <div className="absolute right-[6%] top-[86%] h-[460px] w-[460px] rounded-full bg-violet-400/20 blur-[120px] animate-float-slower dark:bg-violet-500/12" />
      <div className="absolute left-[-8%] top-[96%] h-[480px] w-[480px] rounded-full bg-teal-400/18 blur-[130px] animate-float-slow dark:bg-teal-500/10" />
    </div>
  );
}
