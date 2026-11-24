import cx from "./cx";

// Kontener treści: max 1160px, padding boczny 24px
export default function Container({ as: Tag = "div", className, children, ...props }) {
  return (
    <Tag className={cx("mx-auto w-full max-w-content px-gutter", className)} {...props}>
      {children}
    </Tag>
  );
}
