import React, { useState } from "react";
import plusIcon from "/icon/plus.svg";
import minusIcon from "/icon/minus.svg";
import accordionData from "../../docs/TantanganData";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="accordion-item my-2 overflow-hidden transition-all duration-300 ease-in-out">
      <button
        onClick={onClick}
        className="accordion-title flex w-full items-center justify-between bg-primary-200 px-4 py-4 text-white rounded-2xl transition-colors duration-300 focus:outline-none"
      >
        <span className="text-left text-base font-medium md:text-xl tracking-wide">
          {title}
        </span>
        <img
          src={isOpen ? minusIcon : plusIcon}
          alt="toggle icon"
          className="h-6 w-6"
        />
      </button>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[1000px] mt-3" : "max-h-0"
        }`}
      >
        <div className="accordion-content rounded-2xl bg-secondary-300 px-10 text-justify font-normal pt-3 pb-5 text-lg md:text-xl text-black">
          {content}
        </div>
      </div>
    </div>
  );
};

const Tantangan = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section>
      <div id="wave">
        <div id="temuanUmum" className="-mt-1 pb-36 pt-20 bg-primary-400">
          <div className="container mx-auto px-5 md:px-28">
            <h1
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-center text-2xl font-bold text-white md:text-4xl"
            >
              <span className="underline underline-offset-4 md:underline-offset-[12px] decoration-[#FBC740]">
                Tantangan Utama{" "}
              </span>
              Pelestarian Budaya Lokal
            </h1>

            <div className="mt-10 md:mt-16 w-full">
              <div className="accordion flex flex-col">
                {accordionData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tantangan;
