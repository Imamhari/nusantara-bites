"use client";

import { BannerText } from "@/utils/Home";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Freight() {
  const { lang } = useLanguage();

  const renderCard = (image: string, icon: string, title: string, desc: string, alt: string) => (
    <div className="bg-white rounded-lg border pb-5 w-full max-w-[300px] mx-auto">
      <Image
        src={image}
        alt={alt}
        width={300}
        height={200}
        className="rounded-t-lg shadow-xl h-[200px] w-full object-cover"
      />
      <div className="p-2 relative -mt-10 ml-4 w-fit">
        <Image
          src={icon}
          alt={`${alt}-icon`}
          width={70}
          height={70}
          className="bg-white rounded-full p-2 shadow-xl"
        />
      </div>
      <p className="mx-5 mt-5">
        {title}
        <br />
        <span className="text-sm text-gray-500 text-justify">{desc}</span>
      </p>
    </div>
  );

  return (
    <div className="w-full">
      {/* Desktop view */}
      <div className="hidden lg:flex justify-center xl:mx-[10vw]">
        {renderCard(
          "/assets/freight/truck-freight.webp",
          "/assets/freight/delivery-truck.svg",
          BannerText.truckFreight.title[lang],
          BannerText.truckFreight.description[lang],
          "truck-freight"
        )}
        {renderCard(
          "/assets/freight/air-freight.webp",
          "/assets/freight/airplane.svg",
          BannerText.airFreight.title[lang],
          BannerText.airFreight.description[lang],
          "air-freight"
        )}
        {renderCard(
          "/assets/freight/ship-freight.webp",
          "/assets/freight/ship.svg",
          BannerText.shipFreight.title[lang],
          BannerText.shipFreight.description[lang],
          "ship-freight"
        )}
      </div>

      {/* Mobile & Tablet View */}
      <div className="lg:hidden px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="w-full"
        >
          <SwiperSlide>
            {renderCard(
              "/assets/freight/truck-freight.webp",
              "/assets/freight/delivery-truck.svg",
              BannerText.truckFreight.title[lang],
              BannerText.truckFreight.description[lang],
              "truck-freight"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderCard(
              "/assets/freight/air-freight.webp",
              "/assets/freight/airplane.svg",
              BannerText.airFreight.title[lang],
              BannerText.airFreight.description[lang],
              "air-freight"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderCard(
              "/assets/freight/ship-freight.webp",
              "/assets/freight/ship.svg",
              BannerText.shipFreight.title[lang],
              BannerText.shipFreight.description[lang],
              "ship-freight"
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Freight;
