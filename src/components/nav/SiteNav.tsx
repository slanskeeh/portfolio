"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/data/profile";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-nav fixed inset-x-0 top-0 z-50 h-[72px] border-b backdrop-blur-md">
      <a
        href="#top"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-[var(--radius-control)] focus:bg-volt focus:px-3 focus:py-2 focus:text-ink"
      >
        К содержанию
      </a>
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between px-4 md:px-6">
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
        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`absolute block h-[1.5px] w-5 bg-fog transition-transform duration-[var(--dur-fast)] ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-5 bg-fog transition-opacity duration-[var(--dur-fast)] ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute block h-[1.5px] w-5 bg-fog transition-transform duration-[var(--dur-fast)] ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-fog/10 bg-ink lg:hidden">
          <nav className="flex flex-col px-4 py-4" aria-label="Мобильная">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="border-b border-fog/8 py-3 text-lg text-fog last:border-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
