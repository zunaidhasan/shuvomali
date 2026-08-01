import { useRevealAll } from "./hooks/useReveal";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Education from "./components/Education";
import Gallery from "./components/Gallery";
import Connect from "./components/Connect";
import Footer from "./components/Footer";
import { tickerWords } from "./data/profile";

export default function App() {
  useRevealAll();

  return (
    <div className="grain min-h-screen bg-paper font-body text-ink antialiased">
      <Navbar />
      <main>
        <Hero />
        <div className="-rotate-1 scale-[1.02]">
          <Marquee words={tickerWords} dark />
        </div>
        <About />
        <Education />
        <Gallery />
        <Connect />
      </main>
      <Footer />
    </div>
  );
}
