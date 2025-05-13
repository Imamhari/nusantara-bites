"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const images = [
  "/assets/banner/banner-1.webp",
  "/assets/banner/banner-2.webp",
  "/assets/banner/banner-3.webp",
];

function Home() {
  return (
    <section className="bg-black/50 items-center justify-center">
      <div className="absolute w-full -z-10 h-screen bg-cover bg-center ">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          speed={1000}
          slidesPerView={1}
          className="w-full h-[50vh] lg:h-[70vh] "
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Commodi soluta quo officia vero doloribus totam rerum quaerat animi neque molestiae possimus, quibusdam mollitia modi, unde sunt ullam recusandae deserunt sapiente?</p>
        <div>
        </div>
      </div>
    </section>
  );
}

export default Home;
