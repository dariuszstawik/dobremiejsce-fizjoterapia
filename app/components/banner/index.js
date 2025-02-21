import { HandHeart } from "lucide-react";

export default function Banner({ children, icon }) {
  return (
    <div className="text-white text-md lg:text-lg my-16 bg-orange p-8 rounded-md flex ">
      W Dobrym Miejscu każdy wcześniak i jego rodzina znajdą ciepłą, przyjazną
      atmosferę oraz profesjonalną opiekę opartą na najnowszej wiedzy i
      wieloletnim doświadczeniu. Razem zadbamy o to, by Twój maluszek mógł
      rozwijać się w najlepszy możliwy sposób.
      <HandHeart size={148} absoluteStrokeWidth className="shrink-0" />
    </div>
  );
}
