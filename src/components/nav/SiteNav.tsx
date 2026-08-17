import { MobileNav } from "@/components/nav/MobileNav";
import { navItems, profile } from "@/data/profile";

export function SiteNav() {
  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-volt focus:px-3 focus:py-2 focus:text-ink"
      >
        К содержанию
      </a>
      <div className="relative mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-4 md:px-6">
        <a
          href="#top"
          className="font-display text-[15px] font-medium tracking-[-0.02em] text-fog"
        >
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Основная">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] text-mist transition-colors duration-[var(--dur-fast)] hover:text-volt"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
}
