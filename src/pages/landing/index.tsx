import {
  FAQSection,
  Features,
  Footer,
  Header,
  Hero,
} from "@/components/landing";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white flex flex-col">
      <Header />
      <Hero />
      <Features />
      <FAQSection />
      <Footer />
    </div>
  );
}
