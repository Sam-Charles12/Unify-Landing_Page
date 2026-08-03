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
      <main className="page-flow pt-2">
        <Hero />
        <Problem />
        <HowItWorks />
        <ProductShowcase />
        <Features />
        <SocialProof />
        <Vision />
        <ForUniversities />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
