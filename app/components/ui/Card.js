import cx from "./cx";

// Biała karta z zaokrągleniem 20px. elevated – delikatny cień (na białym tle);
// na kremowym tle zwykle wystarczy karta bez cienia.
export default function Card({ as: Tag = "div", elevated = false, className, children, ...props }) {
  return (
    <Tag
      className={cx("rounded-card bg-white", elevated && "shadow-card", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
