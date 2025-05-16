import Link from "next/link";
import Arrow from "../arrow";

export default function Button({ title, href, hasSecondBg, onClick }) {
  return (
    <Link href={href || ""}>
      <button
        onClick={onClick}
        className={`whitespace-nowrap rounded-full ${
          hasSecondBg
            ? "bg-secondaryOrange text-gray-800"
            : "bg-orange text-white"
        }  px-4 py-3 no-underline shadow-lg hover:bg-heavy hover:text-white text-sm`}
      >
        {title}
        <Arrow />
      </button>
    </Link>
  );
}
