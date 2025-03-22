"use client";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import BlockTitle from "../block-title";
import Button from "../Button";

export default function ParagraphWithImageOnTheRight({
  title,
  children,
  img,
  alt,
  buttonTitle,
  buttonLink,
  hasBlueBackground,
  hasBg,
  isLeft,
  hasSmallerTitle,
  subtitle,
  hasSmallerImg,
}) {
  return (
    <div
      className={`w-full py-10 flex flex-col ${
        isLeft ? "lg:flex-row gap-16" : "lg:flex-row-reverse"
      }  ${hasBlueBackground && "bg-peach px-8 py-16 rounded-xl"}`}
    >
      <Slide
        direction={isLeft ? "left" : "right"}
        delay={200}
        triggerOnce
        className="flex justify-center items-start w-full lg:w-1/2"
      >
        <div>
          {/* {contentfulImg && (
            <img
              src={
                contentfulImg?.fields.file.url
                  ? contentfulImg.fields.file.url
                  : ""
              }
              alt={
                contentfulImg.fields.file.description
                  ? contentfulImg.fields.file.description
                  : ""
              }
              style={{ width: "400px", height: "440px", objectFit: "cover" }}
              className="rounded"
            />
          )} */}
          {img && (
            <img
              src={img}
              alt={alt ? alt : ""}
              className={`rounded ${hasSmallerImg && "max-h-[300px]"} ${
                isLeft && "scale-x-[-1]"
              }`}
            />
          )}

          {/* {isOnAboutPage && (
            <div className="grid grid-cols-2 gap-10">
              <img
                className="object-cover w-full col-span-2 rounded shadow-lg"
                src="/grupa-samorozwojowa.jpg"
                alt=""
              />
              <img
                className="object-cover w-full rounded shadow-lg"
                src="/onas3.jpg"
                alt=""
              />
              <img
                className="object-cover w-full rounded shadow-lg"
                src="/onas4.jpg"
                alt=""
              />
            </div>
          )} */}
        </div>
      </Slide>
      <div className="w-full lg:w-1/2 mr-6 pr-6 pt-8 lg:pt-0 lg:pr-0 lg:mr-16 flex flex-col gap-0">
        <BlockTitle
          isAlignedLeft
          subtitle={subtitle}
          title={title}
          hasSmallerTitle={hasSmallerTitle}
        />
        {children}
        {buttonTitle && buttonLink && (
          <div className="mr-auto mt-6">
            <Button
              className="mr-auto mt-6"
              title={buttonTitle}
              href={buttonLink}
            >
              {/* <Link href={buttonLink}>{buttonTitle}</Link> */}
              {/* {buttonTitle} */}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
