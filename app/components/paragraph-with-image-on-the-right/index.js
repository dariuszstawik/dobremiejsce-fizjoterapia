"use client";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
import Image from "next/image";
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
  imgFill,
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
          {img && (
            // <Image
            //   src={img}
            //   alt={alt ? alt : ""}
            //   // width={imgFill ? imgFill : 1000}
            //   // height={imgFill ? imgFill : 800}
            //   // priority
            //   // fill={imgFill}
            //   {...(!imgFill ? { width: 1000, height: 800 } : { fill: true })}
            //   sizes="(max-width: 1000px) 100vw, 50vw"
            //   style={{
            //     // maxHeight: hasSmallerImg ? "300px" : "none",
            //     transform: isLeft ? "scaleX(-1)" : "none",
            //     // width: "100%",
            //     // height: "auto",
            //     objectFit: "contain",
            //   }}
            //   className="rounded"
            // />

            <img
              src={img}
              alt={alt ? alt : ""}
              className={`rounded ${hasSmallerImg && "max-h-[300px]"} ${
                isLeft && "scale-x-[-1]"
              }`}
            />
          )}
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
              {" "}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// "use client";
// import { Slide } from "react-awesome-reveal";
// import Link from "next/link";
// import BlockTitle from "../block-title";
// import Button from "../Button";

// export default function ParagraphWithImageOnTheRight({
//   title,
//   children,
//   img,
//   alt,
//   buttonTitle,
//   buttonLink,
//   hasBlueBackground,
//   hasBg,
//   isLeft,
//   hasSmallerTitle,
//   subtitle,
//   hasSmallerImg,
// }) {
//   return (
//     <div
//       className={`w-full py-10 flex flex-col ${
//         isLeft ? "lg:flex-row gap-16" : "lg:flex-row-reverse"
//       }  ${hasBlueBackground && "bg-peach px-8 py-16 rounded-xl"}`}
//     >
//       <Slide
//         direction={isLeft ? "left" : "right"}
//         delay={200}
//         triggerOnce
//         className="flex justify-center items-start w-full lg:w-1/2"
//       >
//         <div>
//           {img && (
//             <img
//               src={img}
//               alt={alt ? alt : ""}
//               className={`rounded ${hasSmallerImg && "max-h-[300px]"} ${
//                 isLeft && "scale-x-[-1]"
//               }`}
//             />
//           )}
//         </div>
//       </Slide>
//       <div className="w-full lg:w-1/2 mr-6 pr-6 pt-8 lg:pt-0 lg:pr-0 lg:mr-16 flex flex-col gap-0">
//         <BlockTitle
//           isAlignedLeft
//           subtitle={subtitle}
//           title={title}
//           hasSmallerTitle={hasSmallerTitle}
//         />
//         {children}
//         {buttonTitle && buttonLink && (
//           <div className="mr-auto mt-6">
//             <Button
//               className="mr-auto mt-6"
//               title={buttonTitle}
//               href={buttonLink}
//             >
//               {" "}
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
