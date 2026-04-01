import Image from "next/image";

export default function TeamMember({ name, role, imageSrc }) {
  return (
    <div className="group flex flex-col items-center bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 max-w-sm mx-auto">
      {/* Okrągły kontener ze zdjęciem */}
      <div className="relative w-44 h-44 mb-6 rounded-full overflow-hidden border-4 border-stone-50 group-hover:border-teal-50 transition-colors duration-300">
        <Image
          src={imageSrc}
          alt={`Zdjęcie specjalisty: ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 176px"
          className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Imię i nazwisko */}
      <h3 className="text-2xl font-bold text-stone-800 mb-2 text-center">
        {name}
      </h3>

      {/* Stanowisko */}
      <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest text-center">
        {role}
      </p>

      {/* Subtelny dekoracyjny akcent na dole */}
      <div className="w-8 h-1 bg-teal-400 rounded-full mt-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
}

// const TeamMember = ({ name, position, imageUrl }) => {
//   return (
//     <div className="flex flex-col items-center group p-4 transition-transform duration-300 hover:-translate-y-2">
//       {/* Okrągłe zdjęcie z delikatnym obramowaniem */}
//       <div className="relative w-48 h-48 md:w-56 md:h-56 mb-6">
//         <div className="absolute inset-0 rounded-full border-2 border-[#8fb43d]/20 scale-110 group-hover:scale-105 transition-transform duration-500" />
//         <div className="relative w-full h-full overflow-hidden rounded-full border-4 border-white shadow-lg">
//           <Image
//             src={imageUrl}
//             alt={name}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>
//       </div>

//       {/* Dane specjalisty */}
//       <div className="text-center">
//         <h3 className="text-xl font-semibold text-gray-800 tracking-tight mb-1">
//           {name}
//         </h3>
//         <p className="text-[#8fb43d] font-medium text-sm uppercase tracking-wider">
//           {position}
//         </p>
//       </div>

//       {/* Subtelna linia dekoracyjna widoczna przy hoverze */}
//       <div className="w-12 h-1 bg-[#8fb43d] mt-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//     </div>
//   );
// };

// export default TeamMember;
