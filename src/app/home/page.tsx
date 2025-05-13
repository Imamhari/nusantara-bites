"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BannerText, type Lang } from "@/utils/Home";
const images = [
  "/assets/banner/banner-1.webp",
  "/assets/banner/banner-2.webp",
  "/assets/banner/banner-3.webp",
];

type BannerProps = {
  lang: Lang;}

function Home({lang}: BannerProps) {
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
      <div className="flex flex-col h-[50vh] lg:h-[70vh] items-center justify-center text-white">
        <h1>SHAKA AGRO GLOBAL</h1>
        <p className="text-white text-lg mt-4 text-center max-w-[800px] px-4">{BannerText.hero[lang]}</p>
        
        <div>
        </div>
      </div>
    </section>
  );
}

export default Home;
