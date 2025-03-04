import Link from "next/link";
import Button from "../Button";
import Arrow from "../arrow";

export default function ServiceCard({ title, description, img }) {
  return (
    <div className="max-w-xl bg-peach lg:max-w-xl transition duration-300 transform rounded-lg shadow-sm hover:-translate-y-1 hover:shadow w-full">
      <div className="">
        <img
          className="object-cover w-full h-48 rounded-t lg:h-64 xl:h-80"
          src={img}
        />
        {/* <div className="w-full h-2 bg-orange" /> */}
      </div>
      <div className="relative  px-6 py-8 border border-t-0 rounded-b sm:px-8 min-h-44">
        <div className=" flex flex-col">
          <h3 className="relative mb-2 text-xl  font-bold leading-none sm:text-2xl">
            {title}
          </h3>
          <div className="flex justify-between items-end gap-6">
            {description}
            {/* <Link href=""> */}
            {/* <button className="relative font-medium text-green-800 before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
            dowiedz się więcej
          </button> */}
            {/* <div className="block mt-8 mb-4">
            <Button title="zobacz więcej" />
          </div> */}
            {/* </Link> */}
          </div>
          <div className="block mt-8 mb-4">
            <Button title="zobacz więcej" />
            {/* <Link href="" className="text-orange">
              zobacz więcej
              <Arrow />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
