"use client";

import { HomeText } from "@/utils/Home";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Freight() {
  const { lang } = useLanguage();

  const renderCard = (
    image: string,
    icon: string,
    title: string,
    desc: string,
    alt: string
  ) => (
    <div className="bg-white rounded-lg border pb-5 w-full max-w-[300px] mx-auto">
      <Image
        src={image}
        alt={alt}
        width={300}
        height={200}
        className="rounded-t-lg shadow-xl h-[200px] w-full object-cover"
      />
      <div className="relative -mt-10 ml-4 w-[70px] h-[70px] bg-white rounded-full shadow-xl flex items-center justify-center p-2">
        <Image
          src={icon}
          alt={`${alt}-icon`}
          width={40}
          height={40}
          className="object-contain"
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
      {/* Desktop View */}
      <div className="hidden lg:flex justify-center gap-6 xl:mx-[15vw]">
        {renderCard(
          "/assets/freight/truck-freight.webp",
          "/assets/freight/delivery-truck.svg",
          HomeText.truckFreight.title[lang],
          HomeText.truckFreight.description[lang],
          "truck-freight"
        )}
        {renderCard(
          "/assets/freight/air-freight.webp",
          "/assets/freight/airplane.svg",
          HomeText.airFreight.title[lang],
          HomeText.airFreight.description[lang],
          "air-freight"
        )}
        {renderCard(
          "/assets/freight/ship-freight.webp",
          "/assets/freight/ship.svg",
          HomeText.shipFreight.title[lang],
          HomeText.shipFreight.description[lang],
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
            0: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
          }}
          className="w-full"
        >
          <SwiperSlide>
            {renderCard(
              "/assets/freight/truck-freight.webp",
              "/assets/freight/delivery-truck.svg",
              HomeText.truckFreight.title[lang],
              HomeText.truckFreight.description[lang],
              "truck-freight"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderCard(
              "/assets/freight/air-freight.webp",
              "/assets/freight/airplane.svg",
              HomeText.airFreight.title[lang],
              HomeText.airFreight.description[lang],
              "air-freight"
            )}
          </SwiperSlide>
          <SwiperSlide>
            {renderCard(
              "/assets/freight/ship-freight.webp",
              "/assets/freight/ship.svg",
              HomeText.shipFreight.title[lang],
              HomeText.shipFreight.description[lang],
              "ship-freight"
            )}
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Freight;
