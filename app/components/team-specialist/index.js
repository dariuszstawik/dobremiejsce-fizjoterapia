import Image from "next/image";

export default function TeamSpecialistCard({
  name,
  role,
  image,
  alt,
  priority = false,
}) {
  return (
    <article className="group flex flex-col items-center text-center">
      <div className="relative mb-5 h-44 w-44 overflow-hidden rounded-full border border-stone-200 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_16px_38px_rgba(0,0,0,0.12)] sm:h-48 sm:w-48 lg:h-52 lg:w-52">
        <Image
          src={image}
          alt={alt || name}
          fill
          priority={priority}
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 176px, (max-width: 1024px) 192px, 208px"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      <h3 className="max-w-[16rem] text-lg font-semibold tracking-[0.01em] text-zinc-800 sm:text-xl">
        {name}
      </h3>

      <p className="mt-2 max-w-[18rem] text-sm font-medium leading-6 text-zinc-500 sm:text-base">
        {role}
      </p>
    </article>
  );
}

// Przykład użycia:
//
// import TeamSpecialistCard from '@/components/TeamSpecialistCard';
//
// export default function TeamSection() {
//   const specialists = [
//     {
//       name: 'Kamila Włodarczyk',
//       role: 'Fizjoterapeutka pediatryczna',
//       image: '/images/team/kamila.jpg',
//     },
//     {
//       name: 'Martyna Cesarczyk',
//       role: 'Fizjoterapeutka pediatryczna',
//       image: '/images/team/martyna.jpg',
//     },
//     {
//       name: 'Sabina Szober',
//       role: 'Neurologopedka',
//       image: '/images/team/sabina.jpg',
//     },
//   ];
//
//   return (
//     <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
//       <div className="mb-10 text-center">
//         <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">
//           Dobre Miejsce
//         </p>
//         <h2 className="text-3xl font-semibold text-zinc-900 sm:text-4xl">
//           Poznaj nasz zespół
//         </h2>
//       </div>
//
//       <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
//         {specialists.map((specialist) => (
//           <TeamSpecialistCard key={specialist.name} {...specialist} />
//         ))}
//       </div>
//     </section>
//   );
// }
