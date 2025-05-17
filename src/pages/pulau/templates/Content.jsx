import React from "react";

const Content = () => {
  return (
    <section class="relative md:pb-16">
      <div class="absolute bottom-0 w-screen">
        <img
          src="assets/illustrator/wave/footer.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div id="content" class="text-white pt-32 bg-primary-400 pb-10">
        <div
          class="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div class="relative inline-block">
            <span class="absolute inset-0 translate-y-2 translate-x-3 bg-[#A6AC8A] rounded"></span>
            <h2 class="relative text-white text-lg font-bold">
              Batik (Suku Jawa)
            </h2>
          </div>
        </div>
        <p
          class="text-lg text-justify pt-5 mx-5 md:mx-32"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Jaipongan adalah tarian tradisional yang berasal dari Sunda, Jawa
          Barat. Tarian ini terkenal dengan gerakan yang energik dan dinamis.
        </p>
      </div>

      <div class="bg-gradient-to-b from-primary-400 to-transparent">
        <div class="mx-2 px-3 md:px-5 md:py-1 pb-32 md:mx-32 md:pb-40 bg-white rounded-xl shadow-lg">
          <div>
            <iframe
              id="pdf-iframe"
              class="pdf-frame w-full h-[500px] rounded-md border mt-10 border-gray-300"
              src="https://repositori.kemdikbud.go.id/19890/1/Keajaiban%20Batik%20Full.pdf"
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
