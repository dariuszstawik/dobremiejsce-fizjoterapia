import BlockTitle from "../block-title";

export default function ListSection() {
  return (
    <section className="mx-auto px-4 py-4 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-20">
      {/* <h2 className="mb-12 text-5xl font-semibold text-heavy lg:mb-20"> */}
      <BlockTitle
        isAlignedLeft
        subtitle="Dobre Miejsce w Katowicach"
        title="Obejmujemy opieką dzieci:"
      />
      {/* </h2> */}
      <ul
        className="mt-10 list-outside gap-32 p-0 pl-12 lg:columns-3"
        style={{ listStyleImage: 'url("/checkmark.png")' }}
      >
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">Urodzone przedwcześnie</p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative-top-2">Po długotrwałej hospitalizacji</p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">Z zaburzeniami napięcia mięśniowego</p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">
            Z zaburzeniami w rozwoju psycho-ruchowym
          </p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">
            Z trudnościami z organizacją i integracją sensoryczną
          </p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">Z zaburzeniami neurologicznymi</p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">Z wadami genetycznymi</p>
        </li>
        <li className="mb-4 pl-4 lg:mb-8">
          <p className="relative -top-2">Z wadami postawy ciała</p>
        </li>
      </ul>
    </section>
  );
}
