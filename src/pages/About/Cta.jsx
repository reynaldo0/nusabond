import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const Cta = () => {
  return (
    <section class="relative pb-20 md:pb-28 lg:pb-40 xl:pb-80">
      <div class="absolute -bottom-2 w-full">
        <img
          src="/illustrator/wave/footer.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div class="-top-12 relative inset-0 flex justify-center items-center">
        <div class="bg-white rounded-2xl shadow-lg w-full max-w-5xl h-auto mx-8 md:mx-24 lg:mx-20 flex flex-col sm:flex-row items-center justify-between px-6 py-4 md:py-8">
          {/* <!-- Teks di sebelah kiri --> */}
          <div class="text-center sm:text-left">
            <h1
              class="text-gray-900 font-bold text-lg sm:text-xl"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              Ingin menjelajahi lebih detail?
            </h1>
            <p
              class="text-gray-500 text-sm sm:text-base"
              data-aos="fade-up"
              data-aos-duration="900"
            >
              Jelajahi 5 pulau besar di indonesia dengan memilih dan klik lokasi
              pulau pada petanya!
            </p>
          </div>

          {/* <!-- Tombol di sebelah kanan --> */}
          <a
            href="#eksplore"
            class="bg-secondary-300 text-white font-semibold px-4 py-2 rounded-lg hover:bg-secondary-300/90 transition mt-4 sm:mt-0 sm:ml-4"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            Jelajahi Sekarang
            <FontAwesomeIcon icon={faArrowUp} className="pl-2 text-white" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;
