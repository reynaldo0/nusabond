import identitasList from "../../docs/identitasData";

const Identitas = () => {
  return (
    <section>
      <div className="bg-white relative py-18 md:py-24">
        <div className="absolute -top-10 lg:-top-34 w-full">
          <img
            src="/illustrator/tantangan.svg"
            className="w-screen"
            alt="Ilustrasi Tantangan"
          />
        </div>

        <h1
          className="text-center pt-10 md:pt-20 xl:pt-44 2xl:pt-80 text-lg md:text-2xl font-semibold text-gray-800 px-4 md:px-20 lg:px-18"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Bondmates, ini dia
          <br />
          <span className="text-2xl md:text-3xl xl:text-4xl font-bold">
            <span className="text-yellow-500">Upaya</span> Melestarikan
            Identitas Bangsa
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-12 px-4 md:px-20 lg:px-18">
          {identitasList.map((item, index) => (
            <div
              key={index}
              className="flex items-start p-6 mx-10 shadow-md rounded-lg"
              style={{ backgroundColor: item.bg }}
              data-aos="fade-up"
              data-aos-duration={item.aosDelay}
            >
              <div className="relative">
                <div className="absolute top-12 md:top-10 -left-12">
                  <img
                    draggable="false"
                    src={`/identitas/${item.icon}`}
                    width="72"
                    alt={item.title}
                  />
                </div>

                <div className="ml-10">
                  <h2 className="text-lg md:text-2xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-base md:text-xl text-left mt-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identitas;
