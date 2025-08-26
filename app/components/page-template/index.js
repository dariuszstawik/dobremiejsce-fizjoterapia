import Banner from "../banner";
import Image from "next/image";

export default function PageTemplate({
  title,
  bannerTitle,
  lead,
  img,
  imgHeight,
  alt,
  bannerBody,
  children,
  isBlog,
  isNews,
  imgBottom,
  isTeamPage,
}) {
  return (
    <section className=" py-32 mt-12 md:py-40 container mx-auto px-8 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
      <div className="bgy1-blur absolute right-0 top-0 z-0 h-full w-full opacity-20 sm:hidden"></div>
      {(isBlog || isNews || isTeamPage) && (
        <Image
          src="/blob3.svg"
          width={1024}
          height={512}
          // priority
          alt="Blog decoration"
          className="w-[1024px] absolute bottom-64 -left-32"
        />
      )}
      <div className="relative container mx-auto px-4 z-10">
        {isNews && (
          <p
            className="
mb-6 text-xl"
          >
            {" "}
            Aktualności
          </p>
        )}
        {isBlog && (
          <p
            className="
mb-6 text-xl"
          >
            Blog: pytania rodziców
          </p>
        )}

        {isTeamPage && (
          <p
            className="
mb-6 text-xl"
          >
            Dobre Miejsce - fizjoterapia dzieci
          </p>
        )}

        <div className="w-full flex justify-between items-start">
          <h1 className="mb-6 font-heading text-4xl md:text-5xl font-bold leading-tight max-w-5xl">
            {title}
          </h1>
        </div>

        <p className="mb-6 text-2xl max-w-5xl ">{lead}</p>

        {isBlog || isNews || isTeamPage ? (
          <span className="block h-8" />
        ) : (
          <a
            className="inline-block whitespace-nowrap rounded-full bg-orange px-5 py-4 mb-8  text-white no-underline shadow-lg hover:bg-heavy hover:text-white"
            href="https://dobremiejscefizjoterapiadzieci.booksy.com/"
            target="_blank"
            rel="noreferrer noopener nofollow"
          >
            Umów wizytę
          </a>
        )}

        {/* <div
          className="mb-16 relative overflow-hidden rounded-3xl"
          style={{ height: imgHeight ? `${imgHeight}px` : "512px" }}
        > */}

        {img && (
          <div
            className="
    mb-16 group relative w-full overflow-hidden rounded-3xl
    h-[var(--h)] md:h-[var(--h-md)] lg:h-[var(--h-lg)]
  "
            style={{
              "--h": `${imgHeight ? imgHeight / 2 : 300}px`,
              "--h-md": `${imgHeight ?? 400}px`,
              "--h-lg": `${imgHeight ?? 512}px`,
            }}
          >
            <img
              src={img}
              alt={alt ?? title ?? ""}
              className={[
                "absolute inset-0 w-full h-full",
                "object-cover",
                imgBottom ? "object-bottom" : "object-center",
                "transition-transform duration-200 group-hover:scale-105",
                "block",
              ].join(" ")}
              loading="lazy"
            />
          </div>
        )}
        {/* <Image
            className="object-cover transform hover:scale-105 rounded-3xl transition duration-200"
            src={img}
            alt={alt || title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center",
              // objectPosition: imgBottom ? "bottom" : "center",
            }}
          /> */}

        {/* <img
            src={img}
            alt={alt || title}
            className="w-full transform hover:scale-105 rounded-3xl transition duration-200"
            style={{
              objectFit: "cover",
              // objectPosition: "center",
              objectPosition: imgBottom ? "bottom" : "center",
            }}
          /> */}

        {/* </div> */}
        {isTeamPage ? (
          <div>{children}</div>
        ) : (
          <article
            className={`${isTeamPage ? "w-full" : "max-w-4xl"}  mx-auto`}
          >
            {children}
            {!(isBlog || isNews || isTeamPage) && (
              <Banner bannerTitle={bannerTitle}>{bannerBody}</Banner>
            )}
          </article>
        )}
      </div>
    </section>
  );
}
