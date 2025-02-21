import Link from "next/link";

export default function ServicesCard() {
  return (
    <>
      <div className="w-[80%] mx-auto mt-20 flex flex-wrap flex-row-reverse rounded-lg overflow-hidden">
        <div className="w-full lg:w-1/2 rounded-lg flex">
          <img className="object-cover" src="/dobremiejsce002.jpg" alt="" />
        </div>
        <div
          className="relative flex flex-col items-end w-full lg:w-1/2 py-6 lg:pt-10 px-10 rounded-r bg-gray-200 shadow-md"
          // style={{
          //   clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0% 25%)",
          // }}
        >
          <h3 className="my-4 mb-7 flex-auto text-3xl font-bold text-gray">
            Rehabilitacja najmłodszych
          </h3>
          <div className="w-10 h-1 rounded-sm bg-primaryGreen mb-4" />
          <p className="mb-4 text-lg text-right">
            Wspieramy prawidłowy rozwój wcześniaków i niemowląt z zaburzeniami
            napięcia mięśniowego
          </p>

          <button className="mb-2 mt-auto">
            <Link href="">Zobacz więcej</Link>
          </button>
        </div>
      </div>
    </>
  );
}
