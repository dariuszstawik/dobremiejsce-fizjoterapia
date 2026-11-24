import cx from "./cx";

// Etykieta nad nagłówkiem: 13px, 600, wersaliki, #B23A12
export function Eyebrow({ as: Tag = "p", className, children }) {
  return (
    <Tag className={cx("text-eyebrow uppercase text-link", className)}>{children}</Tag>
  );
}

const TITLE_SIZES = {
  md: "text-h2",
  sm: "text-h2-sm",
};

// Nagłówek sekcji: opcjonalna etykieta, H2 i wstęp.
// align="center" (domyślnie) lub "left"; level – poziom nagłówka (domyślnie h2).
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "center",
  size = "md",
  level = 2,
  id,
  className,
}) {
  const Heading = `h${level}`;

  return (
    <div
      className={cx(
        "flex flex-col gap-2",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading id={id} className={cx(TITLE_SIZES[size], "text-ink text-balance")}>
        {title}
      </Heading>
      {intro && (
        <p className="mt-1.5 max-w-[560px] text-base text-ink-body text-pretty">{intro}</p>
      )}
    </div>
  );
}
