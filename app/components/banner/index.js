import { HandHeart } from "lucide-react";
import Button from "../Button";

export default function Banner({ children, icon }) {
  return (
    <div className="text-white text-md lg:text-lg my-16 bg-orange p-8 rounded-md flex ">
      <div className="flex flex-col gap-4">
        {children}
        <Button
          title="Umów wizytę"
          hasSecondBg
          href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
        />
      </div>

      <HandHeart
        size={148}
        absoluteStrokeWidth
        className="shrink-0 hidden md:block"
      />
    </div>
  );
}
