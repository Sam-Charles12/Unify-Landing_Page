import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Problem from "./sections/Problem";
import HowItWorks from "./sections/HowItWorks";
import ProductShowcase from "./sections/ProductShowcase";
import Features from "./sections/Features";
import SocialProof from "./sections/SocialProof";
import Vision from "./sections/Vision";
import ForUniversities from "./sections/ForUniversities";
import About from "./sections/About";
import FAQ from "./sections/FAQ";
import FinalCTA from "./sections/FinalCTA";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-x-clip pb-3">
      <div
        className="ambient-blob w-72 h-72 -top-20 -left-16 bg-brand-green/20"
        aria-hidden="true"
      />
      <div
        className="ambient-blob w-80 h-80 top-[22%] -right-24 bg-emerald-300/25"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />
      <div
        className="ambient-blob w-64 h-64 bottom-24 left-[40%] bg-lime-200/30"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />

      <Navbar />
      <main className="space-y-5 md:space-y-6 pt-2">
        <div className="surface-section">
          <Hero />
        </div>
        <div className="surface-section">
          <Problem />
        </div>
        <div className="surface-section">
          <HowItWorks />
        </div>
        <div className="surface-section">
          <ProductShowcase />
        </div>
        <div className="surface-section">
          <Features />
        </div>
        <div className="surface-section">
          <SocialProof />
        </div>
        <div className="surface-section">
          <Vision />
        </div>
        <div className="surface-section">
          <ForUniversities />
        </div>
        <div className="surface-section">
          <About />
        </div>
        <div className="surface-section">
          <FAQ />
        </div>
        <div className="surface-section">
          <FinalCTA />
        </div>
      </main>
      <div className="surface-section">
        <Footer />
      </div>
    </div>
  );
}
