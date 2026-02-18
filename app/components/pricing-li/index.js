import Link from "next/link";

export default function PricingLi({
  title,
  description,
  price,
  download,
  href,
}) {
  return (
    <li className="mb-0 odd:bg-peach p-4 rounded-md flex items-center gap-3">
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p>{description}</p>
          </div>
          {price && (
            <div className="rounded-full bg-orange text-white text-sm px-4 py-2">
              {price}
            </div>
          )}
          {download && (
            <Link
              href={href}
              className="rounded-full bg-orange text-white text-sm px-4 py-2"
            >
              {download}
            </Link>
          )}
        </div>
      </div>
    </li>
  );
}
