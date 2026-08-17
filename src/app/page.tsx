import { Capabilities } from "@/components/capabilities/Capabilities";
import { Contact } from "@/components/contact/Contact";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { StackGraph } from "@/components/stack/StackGraph";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Capabilities />
      <StackGraph />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
