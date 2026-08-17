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
        <h1 className="font-display text-[40px] font-medium leading-[1.08] tracking-[-0.03em] text-fog sm:text-5xl lg:text-[56px]">
          {profile.headline}
        </h1>
        <p className="mt-5 max-w-[36ch] text-[17px] leading-relaxed text-mist sm:text-lg">
          {profile.subhead}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#projects">Смотреть проекты</Button>
          <Button href="#contact" variant="ghost">
            Написать мне
          </Button>
        </div>
      </div>
      <div className="relative">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-10 top-8 h-64 w-64 rounded-full bg-volt/15 blur-3xl"
        />
        <InstrumentCluster />
      </div>
    </section>
  );
}
