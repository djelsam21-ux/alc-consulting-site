import { SiteShell } from "@/components/SiteShell";
import { Header } from "@/components/Header";
import { WaveDivider } from "@/components/WaveDivider";
import { Hero } from "@/components/sections/Hero";
import { Results } from "@/components/sections/Results";
import { Expertise } from "@/components/sections/Expertise";
import { Method } from "@/components/sections/Method";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { COLORS } from "@/lib/content";

export default function Home() {
  return (
    <SiteShell>
      <Header />
      <main>
        <Hero />
        <WaveDivider from={COLORS.paper} to={COLORS.ink} />
        <Results />
        <WaveDivider from={COLORS.ink} to={COLORS.paper} flip dip />
        <Expertise />
        <WaveDivider from={COLORS.paper} to={COLORS.moss} />
        <Method />
        <WaveDivider from={COLORS.moss} to={COLORS.paper} flip dip />
        <About />
        <WaveDivider from={COLORS.paper} to={COLORS.ink} />
        <Contact />
      </main>
      <Footer />
    </SiteShell>
  );
}
