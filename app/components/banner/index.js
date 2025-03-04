import { HandHeart } from "lucide-react";

export default function Banner({ children, icon }) {
  return (
    <div className="text-white text-md lg:text-lg my-16 bg-orange p-8 rounded-md flex ">
      {children}
      <HandHeart size={148} absoluteStrokeWidth className="shrink-0" />
    </div>
  );
}
