"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconChevronDown } from "@tabler/icons-react";
import { MAIN_NAV, OFFER_GROUPS } from "@/app/data/site";
import cx from "@/app/components/ui/cx";

const MEGA_MAX_W = 760;
const VIEWPORT_MARGIN = 24;

function isActive(pathname, href) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const OFFER_PATHS = new Set(
  OFFER_GROUPS.flatMap((g) => [g.href, ...g.links.map((l) => l.href)]),
);

// Przyklejony nagłówek: zmniejsza się po przewinięciu > 64px.
// Od 1100px menu poziome z mega menu „Oferta”; poniżej – przycisk menu mobilnego (krok 7).
export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      // histereza jak w makiecie: zwija się > 64px, rozwija dopiero przy samej górze
      setScrolled((prev) => (prev ? y > 4 : y > 64));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cx(
        "sticky top-0 z-40 bg-white transition-shadow duration-200",
        scrolled && "shadow-header",
      )}
    >
      <div
        className={cx(
          "mx-auto flex max-w-content items-center gap-7 px-gutter transition-[padding] duration-[250ms] ease-out",
          scrolled ? "py-2 nav:py-2.5" : "py-3 nav:py-[21px]",
        )}
      >
        <Link
          href="/"
          className="flex flex-none items-center gap-2.5 text-ink nav:gap-3.5"
        >
          <Image
            src="/logo-dm-znak.svg"
            alt=""
            width={88}
            height={101}
            priority
            className={cx(
              "block w-auto transition-[height,margin] duration-[250ms] ease-out",
              scrolled
                ? "-mb-[6.7px] h-12 nav:-mb-[7.2px] nav:h-[52px]"
                : "-mb-[7.8px] h-14 nav:-mb-[9.4px] nav:h-[68px]",
            )}
          />
          <Image
            src="/logo-dm-napis.svg"
            alt="Dobre Miejsce Fizjoterapia Dzieci, strona główna"
            width={143}
            height={21}
            priority
            className={cx(
              "block w-auto transition-[height] duration-[250ms] ease-out",
              scrolled ? "h-[10px] nav:h-4" : "h-[11.6px] nav:h-[19.1px]",
            )}
          />
        </Link>

        <nav
          aria-label="Menu główne"
          className="ml-auto hidden items-center gap-[clamp(20px,2.2vw,40px)] text-base font-medium nav:flex"
        >
          {MAIN_NAV.map((item) =>
            item.offer ? (
              <OfferMenu
                key="oferta"
                label={item.label}
                pathname={pathname}
                active={OFFER_PATHS.has(pathname)}
              />
            ) : (
              <NavLink key={item.href} href={item.href} active={isActive(pathname, item.href)}>
                {item.label}
              </NavLink>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cx(
        "whitespace-nowrap",
        active
          ? "text-accent underline decoration-2 underline-offset-[7px] hover:text-accent-hover"
          : "text-ink hover:text-accent",
      )}
    >
      {children}
    </Link>
  );
}

function OfferMenu({ label, pathname, active }) {
  const [open, setOpen] = useState(false);
  const [left, setLeft] = useState(-40);
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);

  // Panel ma szer. min(760px, 100vw − 48px) i nie może wyjść poza ekran
  const openMenu = useCallback(() => {
    const el = wrapperRef.current;
    if (el) {
      const vw = document.documentElement.clientWidth;
      const r = el.getBoundingClientRect();
      const pw = Math.min(MEGA_MAX_W, vw - 2 * VIEWPORT_MARGIN);
      setLeft(
        Math.round(
          Math.max(VIEWPORT_MARGIN - r.left, Math.min(-40, vw - VIEWPORT_MARGIN - pw - r.left)),
        ),
      );
    }
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Menu otwarte najechaniem myszą: kliknięcie nie zamyka go (użytkownik i tak chce je otworzyć)
  const openedByHover = useRef(false);
  const onClick = () => {
    if (open && openedByHover.current) {
      openedByHover.current = false;
      return;
    }
    openedByHover.current = false;
    if (open) close();
    else openMenu();
  };

  // Zamknięcie po zmianie strony
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape zamyka i oddaje fokus przyciskowi; klik poza menu zamyka
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onPointer = (e) => {
      if (!wrapperRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => {
        if (!open) {
          openedByHover.current = true;
          openMenu();
        }
      }}
      onMouseLeave={close}
      onBlur={(e) => {
        // fokus wyszedł poza przycisk i panel (Tab dalej) → zamknij
        if (!wrapperRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="menu-oferta"
        onClick={onClick}
        className={cx(
          "flex h-11 items-center gap-[3px] font-medium",
          active ? "text-accent hover:text-accent-hover" : "text-ink hover:text-accent",
        )}
      >
        {label}
        <IconChevronDown
          size={15}
          stroke={2}
          aria-hidden="true"
          className={cx("transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      <div
        id="menu-oferta"
        hidden={!open}
        className="absolute top-full pt-2"
        style={{ left }}
      >
        <div className="grid w-[min(760px,calc(100vw-48px))] grid-cols-3 gap-x-8 gap-y-[22px] rounded-[14px] bg-white px-8 py-7 shadow-card-lg">
          {OFFER_GROUPS.map((group) => (
            <div key={group.name} className="flex flex-col gap-[3px]">
              <Link
                href={group.href}
                onClick={close}
                className="text-[15px] font-semibold text-ink hover:text-accent"
              >
                {group.name}
              </Link>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={close}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="text-sm text-ink-muted hover:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
