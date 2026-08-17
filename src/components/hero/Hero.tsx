import { InstrumentCluster } from "@/components/hero/InstrumentCluster";
import { Button } from "@/components/ui/Button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto grid min-h-[100dvh] max-w-[1400px] items-center gap-8 px-4 pb-10 pt-24 md:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10"
    >
      <div className="max-w-xl">
        <h1 className="fade-up font-display text-[40px] font-medium leading-[1.08] tracking-[-0.03em] text-fog sm:text-5xl lg:text-[56px]">
          {profile.headline}
        </h1>
        <p
          className="fade-up mt-5 max-w-[36ch] text-[17px] leading-relaxed text-mist sm:text-lg"
          style={{ animationDelay: "0.08s" }}
        >
          {profile.subhead}
        </p>
        <div className="fade-up mt-8 flex flex-wrap gap-3" style={{ animationDelay: "0.14s" }}>
          <Button href="#projects">Смотреть проекты</Button>
          <Button href="#contact" variant="ghost">
            Написать мне
          </Button>
        </div>
      </div>
      <div className="relative" style={{ animationDelay: "0.12s" }}>
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-8 h-64 w-64 rounded-full bg-volt/15 blur-3xl"
        />
        <div className="fade-up">
          <InstrumentCluster />
        </div>
      </div>
    </section>
  );
}
