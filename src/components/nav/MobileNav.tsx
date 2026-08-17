"use client";

import { useEffect, useState } from "react";
import { navItems } from "@/data/profile";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
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
      {open ? (
        <div
          id="mobile-nav"
          className="absolute inset-x-0 top-full border-t border-fog/10 bg-ink lg:hidden"
        >
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
    </>
  );
}
