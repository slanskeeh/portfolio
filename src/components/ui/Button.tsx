import { type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "ink";

const styles: Record<Variant, string> = {
  primary:
    "bg-volt text-ink hover:-translate-y-px active:translate-y-0 active:scale-[0.98]",
  ghost:
    "border border-fog/20 text-fog hover:border-volt hover:text-volt active:scale-[0.98]",
  ink: "bg-ink text-fog hover:bg-ink/90 active:scale-[0.98]",
};

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  href?: string;
};

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...rest
}: Props) {
  const cls = `inline-flex items-center justify-center rounded-[var(--radius-control)] px-5 py-3 text-[15px] font-medium tracking-[-0.01em] transition-[transform,background-color,border-color,color] duration-[var(--dur-fast)] ease-[var(--ease-out-expo)] whitespace-nowrap ${styles[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
