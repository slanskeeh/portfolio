import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-6 text-[13px] text-mist md:px-6">
        <p>
          {profile.name} · {new Date().getFullYear()}
        </p>
        <a href="#top" className="hover:text-volt">
          Наверх
        </a>
      </div>
    </footer>
  );
}
