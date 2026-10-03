import { ArrowUpRight } from "lucide-react";

interface ButtonLinkProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  return (
    <a
      className={`button-link button-link--${variant} ${className}`}
      href={href}
    >
      <span>{children}</span>
      <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.7} />
    </a>
  );
}
