import {
  FAQSection,
  Features,
  Footer,
  Header,
  Hero,
} from "@/components/landing";
import { ScrollToTop } from "@/components/shared/scroll-to-top";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white flex flex-col">
      <Header />
      <Hero />
      <Features />
      <FAQSection />
      <Footer />
      <ScrollToTop/>
    </div>
  );
}
