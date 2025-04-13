export default function BlockTitle({
  title,
  isWhite,
  subtitle,
  isAlignedLeft,
  hasSmallerTitle,
}) {
  return (
    <div
      className={`mb-4 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      <h2
        className={`${
          hasSmallerTitle ? "text-xl md:text-2xl" : "text-2xl md:text-4xl"
        } font-bold text-gray ${isAlignedLeft ? "text-left" : "text-center"} ${
          isWhite && "text-white"
        } `}
      >
        <span
          className={`${
            isWhite ? "text-white" : "text-orange"
          } text-lg my-0 block font-normal`}
        >
          {subtitle}
        </span>{" "}
        {title}
      </h2>
    </div>
  );
}
