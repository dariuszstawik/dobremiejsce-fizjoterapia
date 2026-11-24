"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { IconX } from "@tabler/icons-react";
import { ANNOUNCEMENT } from "@/app/data/site";

const STORAGE_KEY = "dm-announcement-closed";

// Pasek ogłoszeń nad nagłówkiem. Włączanie i treść: ANNOUNCEMENT w app/data/site.js.
// Zamknięcie zapamiętujemy w przeglądarce dla danej treści – nowe ogłoszenie pokaże się ponownie.
export default function AnnouncementBar() {
  // domyślnie ukryty do czasu sprawdzenia localStorage (bez mignięcia po zamknięciu)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let closed = null;
    try {
      closed = window.localStorage.getItem(STORAGE_KEY);
    } catch {}
    setVisible(closed !== ANNOUNCEMENT.text);
  }, []);

  if (!ANNOUNCEMENT.enabled || !visible) return null;

  const close = () => {
    setVisible(false);
    try {
      window.localStorage.setItem(STORAGE_KEY, ANNOUNCEMENT.text);
    } catch {}
    // fokus nie może zniknąć razem z przyciskiem
    document.getElementById("tresc")?.focus();
  };

  return (
    <div role="region" aria-label="Ogłoszenie" className="bg-blush text-sm text-ink">
      <div className="relative mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-2.5 px-14 py-2 text-center">
        <span>{ANNOUNCEMENT.text}</span>
        {ANNOUNCEMENT.link && (
          <Link
            href={ANNOUNCEMENT.link.href}
            className="whitespace-nowrap font-semibold text-link hover:text-link-hover"
          >
            {ANNOUNCEMENT.link.label}&nbsp;<span aria-hidden="true">→</span>
          </Link>
        )}
        <button
          type="button"
          onClick={close}
          aria-label="Zamknij komunikat"
          className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center text-ink-muted hover:text-ink"
        >
          <IconX size={16} stroke={2} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
