"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { IconChevronDown, IconPhone, IconX } from "@tabler/icons-react";
import { CONTACT, MAIN_NAV, OFFER_GROUPS } from "@/app/data/site";
import ButtonLink from "@/app/components/ui/ButtonLink";
import cx from "@/app/components/ui/cx";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Pełnoekranowe menu mobilne (< 1100px): role="dialog", pułapka fokusu,
// Escape zamyka, po zamknięciu fokus wraca na przycisk otwierający.
export default function MobileMenu({ open, onClose, isActive, offerActive }) {
  const panelRef = useRef(null);
  const closeRef = useRef(null);
  const [offerOpen, setOfferOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      setOfferOpen(false);
      return;
    }

    // blokada przewijania strony pod menu
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose(true);
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const els = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      if (!els.length) return;
      const first = els[0];
      const last = els[els.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || !panelRef.current.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && (active === last || !panelRef.current.contains(active))) {
        e.preventDefault();
        first.focus();
      }
    };

    // po poszerzeniu okna do wersji desktop menu znika
    const mq = window.matchMedia("(min-width: 1100px)");
    const onMq = (e) => e.matches && onClose(false);

    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, onClose]);

  if (!open) return null;

  // kliknięcie linku: zamknij bez przenoszenia fokusu (nawigacja i tak go zmieni)
  const closeOnNav = () => onClose(false);

  const rowClass =
    "flex min-h-14 items-center border-b border-line text-lg font-semibold";

  // Portal do <body>: nagłówek (sticky, z-40) tworzy własny kontekst warstw,
  // a menu musi przykryć pływający widżet opinii Elfsight (z-index 9999999).
  return createPortal(
    <div
      id="menu-mobile"
      ref={panelRef}
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className="fixed inset-0 z-[10000000] flex flex-col overflow-y-auto overscroll-contain bg-white"
    >
      <div className="flex items-center justify-between border-b border-line px-gutter py-3.5">
        <Link href="/" onClick={closeOnNav} className="flex items-center">
          <Image
            src="/logo-dobre-miejsce.svg"
            alt="Dobre Miejsce Fizjoterapia Dzieci, strona główna"
            width={138}
            height={56}
            className="block h-14 w-auto"
          />
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={() => onClose(true)}
          aria-label="Zamknij menu"
          className="flex h-11 w-11 items-center justify-center text-ink"
        >
          <IconX size={24} stroke={1.75} aria-hidden="true" />
        </button>
      </div>

      <nav aria-label="Menu główne" className="flex flex-1 flex-col px-gutter pb-6 pt-2">
        {MAIN_NAV.map((item) =>
          item.offer ? (
            <div key="oferta" className="border-b border-line">
              <button
                type="button"
                aria-expanded={offerOpen}
                aria-controls="menu-mobile-oferta"
                onClick={() => setOfferOpen((v) => !v)}
                className={cx(
                  "flex min-h-14 w-full items-center justify-between text-lg font-semibold",
                  offerActive ? "text-accent" : "text-ink",
                )}
              >
                {item.label}
                <IconChevronDown
                  size={20}
                  stroke={2}
                  aria-hidden="true"
                  className={cx("text-brand transition-transform duration-200", offerOpen && "rotate-180")}
                />
              </button>
              <div
                id="menu-mobile-oferta"
                hidden={!offerOpen}
                className={cx("flex-col pb-3 pl-3", offerOpen ? "flex" : "hidden")}
              >
                {OFFER_GROUPS.map((group) => (
                  <Link
                    key={group.name}
                    href={group.href}
                    onClick={closeOnNav}
                    className="flex min-h-11 items-center text-base text-ink-body"
                  >
                    {group.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeOnNav}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={cx(rowClass, isActive(item.href) ? "text-accent" : "text-ink")}
            >
              {item.label}
            </Link>
          ),
        )}

        <div className="mt-7 flex flex-col gap-2.5">
          <ButtonLink href={CONTACT.bookingUrl} size="lg" className="w-full !text-base">
            Umów wizytę
          </ButtonLink>
          <ButtonLink
            href={CONTACT.phoneHref}
            variant="secondary"
            size="lg"
            className="w-full !text-base"
          >
            <IconPhone size={20} stroke={1.75} aria-hidden="true" />
            Zadzwoń: {CONTACT.phone}
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-ink-muted">{CONTACT.addressShort}</p>
      </nav>
    </div>,
    document.body,
  );
}
