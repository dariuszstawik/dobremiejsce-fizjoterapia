import BlockTitle from "../block-title";

export default function BlockWith3Blobs() {
  return (
    <section className="overflow-hidden pb-16 lg:mb-2 lg:py-24" id="o-nas">
      <div className="container mx-auto px-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8">
        <div className="grid lg:grid-flow-col lg:grid-cols-3 lg:grid-rows-2">
          <div className="col-span-3 col-start-1 row-start-1 pr-12 lg:col-span-2 lg:w-4/5">
            <BlockTitle
              isAlignedLeft
              subtitle="Dobre Miejsce w Katowicach"
              title="Profesjonalna opieka od pierwszych dni życia
"
            />
            {/* <h1 className="mb-7 flex-auto text-3xl font-bold text-gray">
              Profesjonalna opieka od pierwszych dni życia
            </h1> */}
            <div className="text-md mb-12 mt-2 flex-none font-medium leading-7">
              W Dobrym Miejscu znajdziecie korzyści dla swojego dziecka już od
              pierwszych dni jego życia. Gabinet urządziłyśmy tak, by zachęcał
              do terapii, którą praktykujemy poprzez zabawę.
            </div>
          </div>
          <div className="col-span-3 lg:hidden">
            <img
              alt="Features mobile"
              src="/features-mobile.webp"
              className="object-cover w-full"
            />
          </div>
          <div className="col-span-1 col-start-1 row-span-1 row-start-2 hidden lg:block lg:translate-x-24 lg:transform">
            <div
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained -mt-20 z-20"
              style={{ clipPath: "url(#blob-clip-left)" }}
            >
              <img
                alt="Blob image left"
                src="/blob-image-left.webp"
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-1 col-start-2 row-span-1 row-start-2 hidden lg:block">
            <div
              className="gatsby-image-wrapper gatsby-image-wrapper-constrained -mt-20 z-20"
              style={{ clipPath: "url(#blob-clip-center)" }}
            >
              <img
                alt="Blob image center"
                src="/blob-image-center.webp"
                className="object-cover w-full"
              />
            </div>
          </div>
          <div className="col-span-1 col-start-3 row-span-1 row-start-2 hidden lg:row-span-2 lg:row-start-1 lg:block lg:-translate-x-24 lg:transform">
            <img
              alt="Blob image right"
              src="/blob-image-right.webp"
              className="object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
