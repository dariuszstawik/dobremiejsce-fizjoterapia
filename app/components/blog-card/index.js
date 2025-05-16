import Link from "next/link";
import Arrow from "../arrow";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

export default function BlogCard({ title, content, slug, img, href, alt }) {
  return (
    <Fade direction="bottom" delay="30" triggerOnce>
      <div className="max-w-xl mx-auto transition duration-300 transform bg-peach border rounded shadow-sm hover:-translate-y-1 hover:shadow md:text-center flex">
        <div className=" relative w-1/2">
          <Image
            className="object-cover h-full rounded-br-[100px] lg:min-h-48 xl:min-h-64 w-full"
            src={img ? `https:${img.fields.file.url}` : ""}
            // width={img?.fields?.file?.details?.image?.width}
            // height={img?.fields?.file?.details?.image?.height}
            width={280}
            height={300}
            alt={img?.fields?.description ? img.fields.description : title}
          />
          {/* <img
            src={img}
            alt={alt || title}
            className="object-cover h-full rounded-br-[100px] lg:h-48 xl:h-56 w-full"
          /> */}

          {/* <Image
            className="object-cover h-full rounded-br-[100px] lg:h-48 xl:h-56 w-full"
            src={img}
            width={280}
            height={280}
            // layout="responsive"
            alt={alt || title}
          /> */}
        </div>
        <div className="w-1/2 flex flex-col justify-between items-start px-6 py-8  rounded-b sm:px-8">
          <div className="flex flex-col justify-start items-start">
            <h3 className="mb-2 text-lg text-left font-semibold leading-none md:text-xl">
              {title}
            </h3>
          </div>
          <button className="relative font-medium text-orange before:absolute before:-bottom-1 before:h-0.5 before:w-full before:origin-left before:scale-x-0 before:bg-green-800 before:transition hover:before:scale-100">
            {" "}
            <Link href={href || ""}>
              dowiedz się więcej
              <Arrow />
            </Link>
          </button>
        </div>
      </div>
    </Fade>
  );
}
