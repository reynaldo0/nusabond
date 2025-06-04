import React from "react";

const Content = ({ current }) => {
  if (!current) return null;

  return (
    <section className="relative md:pb-16">
      <div className="absolute bottom-0 w-screen">
        <img
          src="/illustrator/wave/footer.png"
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      <div id="content" className="text-white pt-32 bg-primary-400 pb-10">
        <div
          className="flex items-center justify-center"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <div className="relative inline-block">
            <span className="absolute inset-0 translate-y-2 translate-x-3 bg-[#A6AC8A] rounded"></span>
            <h2 className="relative text-white text-lg font-bold">
              {current.title}
            </h2>
          </div>
        </div>
        <p
          className="text-lg text-justify pt-5 mx-5 md:mx-32"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          {current.text}
        </p>
      </div>

      <div className="bg-gradient-to-b from-primary-400 to-transparent">
        <div className="mx-2 px-3 md:px-5 md:py-1 pb-32 md:mx-32 md:pb-40 bg-white rounded-xl shadow-lg">
          <div>
            <iframe
              className="pdf-frame w-full h-[500px] rounded-md border mt-10 border-gray-300"
              src={current.pdfUrl}
              title="PDF Viewer"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
