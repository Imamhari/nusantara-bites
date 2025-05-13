"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BannerText, type Lang } from "@/utils/Home";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

const images = [
  "/assets/banner/banner-1.webp",
  "/assets/banner/banner-2.webp",
  "/assets/banner/banner-3.webp",
];

type BannerProps = {
  lang: Lang;
};

function Home({ lang }: BannerProps) {
  console.log("Language:", lang);
  console.log("Text:", BannerText.hero[lang]);

  return (
    <section className="bg-black/50 items-center justify-center">
      <div className="absolute w-full -z-10 h-screen bg-cover bg-center  ">
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
                className="w-full h-screen bg-cover bg-center "
                style={{ backgroundImage: `url(${src})` }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col h-[50vh] lg:h-[70vh] items-center justify-center text-white gap-10">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <h1 className="text-5xl font-bold">SHAKA AGRO GLOBAL</h1>
          <p className="text-white text-xl text-bold mt-4 text-center  px-4">
            {BannerText.hero[lang]}
          </p>
        </div>

        <button>
          <a
            href="#product"
            className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-4 rounded-lg mt-10"
          >
            {BannerText.button[lang]}
            <LuSquareArrowOutUpRight className="inline-block ml-2" size={20} />
          </a>
        </button>
      </div>
    </section>
  );
}

export default Home;
