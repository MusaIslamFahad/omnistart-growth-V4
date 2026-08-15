import { ThemeProvider } from "./hooks/useTheme";
import { CustomCursor } from "./components/CustomCursor";
import { BackgroundArt } from "./components/ui/BackgroundArt";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { WhyOG } from "./components/WhyOG";
import { Stats } from "./components/Stats";
import { Work } from "./components/Work";
import { Testimonials } from "./components/Testimonials";
import { Insights } from "./components/Insights";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg)] text-[var(--text-primary)]">
        <BackgroundArt />
        <CustomCursor />
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Services />
          <Process />
          <WhyOG />
          <Stats />
          <Work />
          <Testimonials />
          <Insights />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
