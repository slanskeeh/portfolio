import { ProjectAdmin } from "@/components/projects/ProjectAdmin";
import { ProjectAnalytics } from "@/components/projects/ProjectAnalytics";
import { ProjectMotion } from "@/components/projects/ProjectMotion";
import { ProjectSaas } from "@/components/projects/ProjectSaas";

export function Projects() {
  return (
    <section id="surfaces" className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
      <h2 className="font-display text-4xl font-medium tracking-[-0.03em] md:text-5xl">
        Интерфейсы в работе
      </h2>
      <p className="mt-4 max-w-[54ch] text-lg leading-relaxed text-mist">
        Живые UI-поверхности на этой странице. Не кейсы клиентов, а демонстрация, как я собираю админки, графики и состояния.
      </p>
      <div className="mt-12 flex flex-col gap-6">
        <ProjectAdmin />
        <ProjectAnalytics />
        <ProjectSaas />
        <ProjectMotion />
      </div>
    </section>
  );
}
