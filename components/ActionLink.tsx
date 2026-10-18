import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant: "primary" | "secondary";
  theme?: "dark" | "light";
};

export default function ActionLink({
  children,
  className = "",
  variant,
  theme = "dark",
  ...props
}: ActionLinkProps) {
  return (
    <a className={`action-link action-link--${theme} action-link--${variant} ${className}`.trim()} {...props}>
      {children}
    </a>
  );
}
