"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BannerText } from "@/utils/Home";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageContext";
import { FaHandshake, FaGlobe, FaBox  } from "react-icons/fa";

const images = [
  "/assets/banner/banner-1.webp",
  "/assets/banner/banner-2.webp",
  "/assets/banner/banner-3.webp",
];

function Home() {
  const { lang } = useLanguage();

  return (
    <section id="home" className="items-center justify-center">
      <div className="bg-black/60 ">
        <div className="absolute w-full -z-10 h-screen bg-cover bg-center">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            slidesPerView={1}
            className="w-full h-[50vh] lg:h-[70vh] shadow-2xl"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div
                  className="w-full h-screen bg-cover bg-center"
                  style={{ backgroundImage: `url(${src})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col h-[50vh] lg:h-[70vh] items-center justify-center text-white gap-10">
          <div className="flex flex-col items-center justify-center text-center gap-10">
            <h1 className="text-5xl font-bold">SHAKA AGRO GLOBAL</h1>
            <p className="text-white text-xl font-bold mt-4 text-center px-4">
              {BannerText.hero[lang]}
            </p>
          </div>

          <button>
            <a
              href="#product"
              className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-4 rounded-lg mt-10"
            >
              {BannerText.button[lang]}
              <LuSquareArrowOutUpRight
                className="inline-block ml-2"
                size={20}
              />
            </a>
          </button>
        </div>
      </div>
      <div className="md:flex bg-white space-x-8 justify-between mx-3 xl:mx-50 -mt-15 px-10 py-5 rounded-2xl shadow-2xl hidden ">
        <div className="space-y-2">
          <div className="flex gap-5 items-center justify-center">
            <FaHandshake className="text-amber-400" size={40} />
          <p className="text-3xl text-red-400">5+</p>
          </div>
          <span>{BannerText.data.partnersCount[lang]}</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-5 items-center justify-center">
            <FaGlobe className="text-amber-400" size={40} />
          <p className="text-3xl text-red-400">5+</p>
          </div>
          <span>{BannerText.data.countries[lang]}</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-5 items-center justify-center">
            <FaBox className="text-amber-400" size={40} />
          <p className="text-3xl text-red-400">5+</p>
          </div>
          <span>{BannerText.data.product[lang]}</span>
        </div>
      </div>
    </section>
  );
}

export default Home;
