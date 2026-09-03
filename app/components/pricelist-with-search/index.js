"use client";

import { useEffect, useMemo, useState } from "react";
import PricingLi from "../pricing-li";

// "Zoga" -> "zoga", "Terapia oddechowa" -> bez ogonków, żeby
// wpisanie "logopedia" znalazło "Neurologopedia", a "cwiczenia" -> "ćwiczenia"
const normalize = (text) =>
  (text ?? "")
    .toString()
    .toLowerCase()
    .replaceAll("ł", "l") // ł nie rozkłada się przez NFD
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function PricelistWithSearch({ sections }) {
  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState(() => new Set());

  const terms = useMemo(
    () => normalize(query).split(/\s+/).filter(Boolean),
    [query],
  );

  const filtered = useMemo(() => {
    if (terms.length === 0) return sections;

    return sections
      .map((section) => {
        // trafienie w nazwę kategorii = pokazujemy całą kategorię
        const categoryText = normalize(section.category);
        if (terms.every((t) => categoryText.includes(t))) return section;

        const items = section.items.filter((item) => {
          const haystack = normalize(
            `${section.category} ${item.title} ${item.description ?? ""} ${item.price ?? ""}`,
          );
          return terms.every((t) => haystack.includes(t));
        });

        return items.length > 0 ? { ...section, items } : null;
      })
      .filter(Boolean);
  }, [sections, terms]);

  const resultCount = filtered.reduce((sum, s) => sum + s.items.length, 0);

  // podczas szukania rozwijamy kategorie z trafieniami, po wyczyszczeniu - zwijamy wszystko
  useEffect(() => {
    setOpenCategories(
      terms.length === 0 ? new Set() : new Set(filtered.map((s) => s.category)),
    );
  }, [terms, filtered]);

  const toggleCategory = (category) =>
    setOpenCategories((prev) => {
      const next = new Set(prev);
      if (next.has(category)) next.delete(category);
      else next.add(category);
      return next;
    });

  return (
    <>
      {/* Pole wyszukiwania */}
      <div className="mb-6">
        <label htmlFor="pricelist-search" className="sr-only">
          Szukaj usługi w cenniku
        </label>
        <div className="relative">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-orange-600/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>

          <input
            id="pricelist-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Szukaj usługi, np. SI, oddechowa, wkładki..."
            className="w-full rounded-2xl border border-orange/20 bg-white py-3 pl-12 pr-11 text-sm text-orange-900 shadow-sm outline-none transition-colors placeholder:text-orange-900/40 focus:border-orange focus:ring-2 focus:ring-orange/20"
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Wyczyść wyszukiwanie"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-orange-600 transition-colors hover:bg-orange/10"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <p
          aria-live="polite"
          className="mt-2 min-h-[1.25rem] px-1 text-xs text-orange-900/70"
        >
          {query &&
            (resultCount > 0
              ? `Znaleziono ${resultCount} ${
                  resultCount === 1
                    ? "usługę"
                    : resultCount < 5
                      ? "usługi"
                      : "usług"
                }`
              : "Brak wyników")}
        </p>
      </div>

      {/* Lista kategorii */}
      <div className="mb-12 mt-4 flex flex-col gap-3">
        {filtered.map((section) => (
          <details
            key={section.category}
            open={openCategories.has(section.category)}
            className="group select-none overflow-hidden rounded-2xl border border-orange/10 bg-white shadow-sm transition-all duration-200 hover:border-orange/20 hover:shadow-md open:border-orange/20 open:shadow-md"
          >
            <summary
              onClick={(e) => {
                e.preventDefault();
                toggleCategory(section.category);
              }}
              className="flex cursor-pointer list-none items-center justify-between bg-white p-4 transition-colors duration-200 hover:bg-orange/5 group-open:bg-orange/5 sm:p-5 [&::-webkit-details-marker]:hidden"
            >
              <span className="text-sm font-bold uppercase tracking-wide text-orange-900">
                {section.category}
              </span>

              <div className="rounded-full bg-orange/5 p-1 transition-colors group-hover:bg-orange/10 group-open:bg-orange/10">
                <svg
                  className="h-5 w-5 text-orange-600 transition-transform duration-300 group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </summary>

            <div className="border-t border-orange/5 bg-white px-4 pb-4 sm:px-6 sm:pb-6">
              <ul className="m-0 flex list-none flex-col divide-y divide-orange/10 p-0">
                {section.items.map((item, i) => (
                  <PricingLi
                    key={i}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                  />
                ))}
              </ul>
            </div>
          </details>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-orange/20 bg-peach/60 p-6 text-center text-sm text-orange-900">
            <p className="font-semibold">Nie znaleźliśmy takiej usługi.</p>
            <p className="mt-1 text-orange-900/80">
              Spróbuj innego słowa lub{" "}
              <button
                type="button"
                onClick={() => setQuery("")}
                className="font-semibold text-orange-700 underline decoration-orange/40 underline-offset-4"
              >
                zobacz cały cennik
              </button>
              .
            </p>
          </div>
        )}
      </div>
    </>
  );
}
