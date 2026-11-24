import Container from "./Container";
import cx from "./cx";

const TONES = {
  white: "bg-white",
  cream: "bg-cream",
};

// Sekcja na całą szerokość (tło białe lub kremowe) z kontenerem i pionowym
// paddingiem clamp(72px, 8vw, 104px). Sekcje układamy naprzemiennie white/cream.
export default function Section({
  id,
  tone = "white",
  as: Tag = "section",
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <Tag id={id} className={cx(TONES[tone], className)} {...props}>
      <Container className={cx("py-section", containerClassName)}>{children}</Container>
    </Tag>
  );
}
