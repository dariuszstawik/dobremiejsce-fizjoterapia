// Łączy klasy CSS, pomijając puste wartości: cx("a", cond && "b") -> "a b"
export default function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}
