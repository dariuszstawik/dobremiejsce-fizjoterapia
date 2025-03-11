// export default function SectionTitle({ title }) {
//   return (
//     <div className="flex flex-col gap-2 mb-16 justify-center items-center">
//       <h2 className="mt-2 text-4xl font-bold text-gray">{title}</h2>
//       <img
//         src="decorated-underline.svg"
//         alt="decorated underline"
//         className="mx-auto w-64"
//       />
//     </div>
//   );
// }

export default function SectionTitle({ title, isWhite, isAlignedLeft }) {
  return (
    <div
      className={`mt-24 mb-16 flex flex-col ${
        !isAlignedLeft && "justify-center items-center"
      } gap-2`}
    >
      <p className={`${isWhite ? "text-white" : "text-orange"} text-lg my-0`}>
        Dobre Miejsce w Katowicach
      </p>
      <h2
        className={`text-4xl font-bold text-gray ${
          isAlignedLeft ? "text-left" : "text-center"
        } ${isWhite && "text-white"} `}
      >
        {" "}
        {title}
      </h2>
      {/* <div
        className={`mt-4 w-28 h-1 rounded-sm ${
          isWhite ? "bg-orange" : "bg-orange"
        }`}
      /> */}
    </div>
  );
}
