import Link from "next/link";
import cx from "./cx";

const BASE =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold no-underline transition-colors duration-200";

const VARIANTS = {
  // Główny: wypełniony #C9431A, cień
  primary: "bg-accent text-white shadow-cta hover:bg-accent-hover hover:text-white",
  // Drugorzędny: obrys 1.5px, po najechaniu wypełniony
  secondary:
    "border-[1.5px] border-accent bg-transparent text-link hover:bg-accent hover:text-white",
};

const SIZES = {
  md: "h-12 px-[26px] text-base", // 48px
  lg: "h-[52px] px-7 text-[17px]", // 52px
};

function isExternal(href) {
  return /^(https?:|tel:|mailto:)/.test(href);
}

// Przycisk-link (lub <button>, gdy brak href).
// Linki zewnętrzne (http) otwierają się w nowej karcie z rel="noopener".
export default function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  newTab,
  type = "button",
  ...props
}) {
  const classes = cx(BASE, VARIANTS[variant], SIZES[size], className);

  if (!href) {
    return (
      <button type={type} className={classes} {...props}>
        {children}
      </button>
    );
  }

  if (isExternal(href)) {
    const openInNewTab = newTab ?? href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(openInNewTab && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
