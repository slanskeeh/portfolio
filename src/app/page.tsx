import { Capabilities } from "@/components/capabilities/Capabilities";
import { Contact } from "@/components/contact/Contact";
import { SiteFooter } from "@/components/footer/SiteFooter";
import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { StackGraph } from "@/components/stack/StackGraph";
import { Work } from "@/components/work/Work";

export const dynamic = "force-static";

export default function Home() {
  return (
    <main className="flex min-w-0 flex-1 flex-col overflow-x-clip">
      <Hero />
      <Capabilities />
      <StackGraph />
      <Work />
      <Projects />
      <Contact />
      <SiteFooter />
    </main>
  );
}
