import { profile } from "@/data/profile";

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, kind: "Email" },
  { href: profile.github, label: "slanskeeh", kind: "GitHub" },
  { href: profile.telegram, label: "@slanskeeh", kind: "Telegram" },
  { href: profile.hh, label: "HeadHunter", kind: "HeadHunter" },
] as const;

export function Contact() {
  return (
    <section id="contact" className="bg-volt text-ink">
      <div className="mx-auto max-w-[1400px] px-4 py-24 md:px-6 md:py-32">
        <h2 className="max-w-[16ch] font-display text-4xl font-medium leading-[1.08] tracking-[-0.03em] md:text-6xl">
          Есть идея? Давайте соберём что-то интересное.
        </h2>
        <p className="mt-6 max-w-[46ch] text-lg text-ink/75">
          Пишите по продуктовому UI, админкам, графикам и интерактивным интерфейсам.
        </p>
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          {links.map((link) => (
            <li key={link.kind}>
              <a
                href={link.href}
                className="group inline-flex flex-col"
                target="_blank"
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              >
                <span className="font-mono text-[11px] text-ink/55">{link.kind}</span>
                <span className="mt-1 text-lg underline-offset-4 transition-colors group-hover:underline">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
