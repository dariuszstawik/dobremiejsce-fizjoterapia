// Plik: app/components/Button/index.js
import Link from "next/link";
import Arrow from "../arrow";

export default function Button({ title, href, hasSecondBg, onClick }) {
  // Jeżeli mamy onClick, ale nie mamy href, renderujemy zwykły button zamiast Link
  if (onClick && !href) {
    return (
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
    );
  }

  // W przeciwnym wypadku używamy Link
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

// import Link from "next/link";
// import Arrow from "../arrow";

// export default function Button({ title, href, hasSecondBg, onClick }) {
//   return (
//     <Link href={href || ""}>
//       <button
//         onClick={onClick}
//         className={`whitespace-nowrap rounded-full ${
//           hasSecondBg
//             ? "bg-secondaryOrange text-gray-800"
//             : "bg-orange text-white"
//         }  px-4 py-3 no-underline shadow-lg hover:bg-heavy hover:text-white text-sm`}
//       >
//         {title}
//         <Arrow />
//       </button>
//     </Link>
//   );
// }
