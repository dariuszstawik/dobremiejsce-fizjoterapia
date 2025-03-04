import Arrow from "../arrow";

export default function Button({ title }) {
  return (
    <a
      className="whitespace-nowrap rounded-full bg-orange px-4 py-3 text-white no-underline shadow-lg hover:bg-heavy hover:text-white text-sm"
      href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      {title}
      <Arrow />
    </a>
  );
}
