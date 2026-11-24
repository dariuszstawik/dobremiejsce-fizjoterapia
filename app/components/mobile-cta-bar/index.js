import { IconPhone } from "@tabler/icons-react";
import { CONTACT } from "@/app/data/site";
import ButtonLink from "@/app/components/ui/ButtonLink";

// Przyklejony pasek „Zadzwoń / Umów wizytę” na dole ekranu (< 1100px).
// Treść strony ma wtedy dolny padding 70px (globals.css), żeby pasek jej nie zasłaniał.
export default function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_1.4fr] gap-2.5 border-t border-line bg-white px-3 pb-[calc(10px+env(safe-area-inset-bottom))] pt-2.5 nav:hidden">
      <ButtonLink
        href={CONTACT.phoneHref}
        variant="secondary"
        aria-label={`Zadzwoń: ${CONTACT.phone}`}
        className="!gap-1.5 !px-3"
      >
        <IconPhone size={20} stroke={1.75} aria-hidden="true" />
        Zadzwoń
      </ButtonLink>
      <ButtonLink href={CONTACT.bookingUrl} className="!px-3 !shadow-none">
        Umów wizytę
      </ButtonLink>
    </div>
  );
}
