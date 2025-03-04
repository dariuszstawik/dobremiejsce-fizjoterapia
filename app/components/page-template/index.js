import Banner from "../banner";

export default function PageTemplate({
  title,
  lead,
  img,
  alt,
  bannerBody,
  children,
}) {
  return (
    <section className="relative py-24 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
      {/* <img src="/blob3.svg" className="w-[640px] absolute top-24 -left-32" /> */}
      {/* <img
          src="/blob3.svg"
          className="w-[640px] absolute top-[600px] -right-32"
        />
        <img
          src="/blob3.svg"
          className="w-[1024px] absolute bottom-64 -left-32"
        /> */}
      {/* <img
          src="/blob.svg"
          className="w-[800px] absolute top-96 -right-64 rotate-90"
        /> */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="w-full flex justify-between items-start">
          <h1 className="mb-6 font-heading text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
            {title}
          </h1>
        </div>

        <p className="mb-6 text-2xl max-w-5xl ">{lead}</p>
        <a
          className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
          href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          Umów wizytę
        </a>
        <div
          className="mb-16 relative overflow-hidden rounded-3xl"
          style={{ height: "512px" }}
        >
          <img
            className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 rounded-3xl transition duration-200"
            src={img}
            alt={alt || title}
          />
        </div>
        <div className="max-w-4xl mx-auto">
          {children}
          <Banner>{bannerBody}</Banner>
        </div>
      </div>
    </section>
  );
}
