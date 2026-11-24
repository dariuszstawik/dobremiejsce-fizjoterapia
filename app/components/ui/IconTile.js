import cx from "./cx";

const SIZES = {
  md: "h-16 w-16 rounded-[18px]", // 64px – karty usług i kroków
  lg: "aspect-[1.15] w-full rounded-[24px]", // duży kafelek w „Jak pracujemy”
};

// Kafelek z ikoną na tle #FFCEA0. Ikona jest dekoracyjna (aria-hidden).
// Przykład: <IconTile icon={IconBabyCarriage} />
export default function IconTile({ icon: Icon, size = "md", iconSize, stroke = 1.5, className }) {
  const defaultIconSize = size === "lg" ? 72 : 32;

  return (
    <span
      className={cx("flex shrink-0 items-center justify-center bg-apricot text-ink", SIZES[size], className)}
      aria-hidden="true"
    >
      {Icon && <Icon size={iconSize ?? defaultIconSize} stroke={stroke} aria-hidden="true" />}
    </span>
  );
}
