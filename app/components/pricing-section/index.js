export default function Pricing() {
  return (
    <section className="bg-peach px-3 py-12 lg:py-20">
      <div
        className="max-w-2xl rounded-2xl bg-light bg-shape-hat bg-contain bg-top bg-no-repeat md:m-auto"
        style={{ backgroundImage: 'url("/hat.svg")' }}
      >
        <div className="flex flex-col p-6 md:p-10" id="cennik">
          <h2 className="mb-14 text-center text-3xl font-bold text-white md:mb-24 lg:mb-28">
            Cennik
          </h2>
          <div className="rounded-2xl bg-white p-12 pl-20 pb-10">
            <ul
              className="flex flex-col gap-4"
              style={{ listStyleImage: 'url("/checkmark.png")' }}
            >
              <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">
                    Wizyta diagnostyczna / Pierwsza wizyta
                  </h3>
                  <p>210 zł — 60 minut</p>
                </div>
              </li>
              <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">Terapia</h3>
                  <p>160 zł — 45 minut</p>
                </div>
              </li>
              {/* <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">
                    Nauka pielęgnacji noworodka i niemowlęcia Handling NDT
                    Bobath
                  </h3>
                </div>
                <p>180 zł — 60 minut</p>
              </li> */}
              <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">Diagnoza SI</h3>
                </div>
                <p>
                  {" "}
                  480 zł — 2 spotkania x 45 minut
                  {/* klinicznej obserwacji */}
                  {/* <span className="italic">
                    + papierowa opinia wydana do 2 tygodni po zakończeniu
                    obserwacji
                  </span> */}
                </p>
              </li>
              {/* <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">Kinesiotaping podczas wizyty</h3>
                  <p>+30zł</p>
                </div>
              </li> */}
              <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">Terapia integracji sensorycznej</h3>
                </div>
                <p>160 zł — 45 minut</p>
              </li>
              <li className="mb-0 pl-4">
                <div className="relative -top-3">
                  <h3 className="font-bold">Wykonanie wkładek IGLI</h3>
                </div>
                <p>480 zł — 60min</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
