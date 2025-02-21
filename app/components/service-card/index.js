import Link from "next/link";

export default function ServiceCard({ title, description, img }) {
  return (
    <div className="max-w-xl lg:max-w-2xl mx-auto transition duration-300 transform bg-primaryGray rounded shadow-lg hover:-translate-y-1 hover:shadow md:text-center">
      <div className="relative">
        <img
          className="object-cover w-full h-48 rounded-t lg:h-96 xl:h-96"
          src={img}
        />
        <div className="w-full h-6 bg-orange" />
      </div>
      <div className="px-6 py-8 border border-t-0 rounded-b sm:px-8">
        <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {title}
        </h5>
        {description}
        <Link href="">
          <button className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
            dowiedz się więcej
          </button>
        </Link>
      </div>
    </div>
  );
}
