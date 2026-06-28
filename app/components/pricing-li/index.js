import Link from "next/link";

export default function PricingLi({
  title,
  description,
  price,
  download,
  href,
}) {
  return (
    <li className="py-4 flex items-center gap-3 bg-transparent">
      <div className="flex-1">
        <div className="flex justify-between items-center gap-4">
          <div>
            <h3 className="font-semibold text-gray-950">{title}</h3>
            {description && (
              <p className="text-sm text-gray-500 mt-0.5">{description}</p>
            )}
          </div>

          {price && (
            /* Zmiana: Zamiast bg-orange i białego tekstu – delikatne tło i ciemny, elegancki napis */
            <div className="rounded-full bg-orange/10 text-orange-950 border border-orange/20 text-sm font-bold px-4 py-1.5 shrink-0 tabular-nums">
              {price}
            </div>
          )}

          {download && (
            <Link
              href={href}
              className="rounded-full bg-orange text-white text-sm font-medium px-4 py-2 shrink-0 hover:bg-orange-600 transition-colors"
            >
              {download}
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
// import Link from "next/link";

// export default function PricingLi({
//   title,
//   description,
//   price,
//   download,
//   href,
// }) {
//   return (
//     <li className="mb-0 odd:bg-peach p-4 rounded-md flex items-center gap-3">
//       <div className="flex-1">
//         <div className="flex justify-between items-center">
//           <div>
//             <h3 className="font-semibold">{title}</h3>
//             <p>{description}</p>
//           </div>
//           {price && (
//             <div className="rounded-full bg-orange text-white text-sm px-4 py-2">
//               {price}
//             </div>
//           )}
//           {download && (
//             <Link
//               href={href}
//               className="rounded-full bg-orange text-white text-sm px-4 py-2"
//             >
//               {download}
//             </Link>
//           )}
//         </div>
//       </div>
//     </li>
//   );
// }
