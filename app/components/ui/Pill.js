import Link from "next/link";
import cx from "./cx";

const CLASSES =
  "inline-flex min-h-[38px] items-center gap-2 whitespace-nowrap rounded-full bg-blush px-4 text-sm font-medium text-link-hover no-underline transition-colors duration-200";

const LINK_HOVER = "hover:bg-accent hover:text-white";

// Pigułka: link (z href) albo etykieta bez interakcji
export default function Pill({ href, className, children, ...props }) {
  if (!href) {
    return (
      <span className={cx(CLASSES, className)} {...props}>
        {children}
      </span>
    );
  }

  return (
    <Link href={href} className={cx(CLASSES, LINK_HOVER, className)} {...props}>
      {children}
    </Link>
  );
}
