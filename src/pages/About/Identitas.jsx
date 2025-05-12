import identitasList from "../../docs/IdentitasData";

const Identitas = () => {
  return (
    <section>
      <div className="bg-white relative py-24">
        <div className="absolute -top-10 md:-top-32 w-full">
          <img
            src="/illustrator/tantangan.svg"
            className="w-screen"
            alt="Ilustrasi Tantangan"
          />
        </div>

        <h1
          className="text-center md:pt-20 text-xl font-semibold text-gray-800 px-3 md:px-0"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          Bondmates, ini dia
          <br />
          <span className="text-3xl font-bold">
            <span className="text-yellow-500">Upaya</span> Melestarikan
            Identitas Bangsa
          </span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 mt-12 md:mx-36">
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
                  <h2 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-sm text-justify md:text-base">
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
