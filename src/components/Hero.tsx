"use client";
import { useState, useEffect } from "react";

const images = ["/assets/banner/banner-1.webp", "/assets/banner/banner-2.webp", "/assets/banner/banner-3.webp"];

function Banner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
      <div className="h-[50vh] bg-cover bg-center transition-all duration-1000 text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${images[currentImage]})` }}>
         <div className="bg-black bg-opacity-50 p-8 rounded-md text-center max-w-3xl">
        <p className="text-lg mb-2">Cocoa Powder Supplier From Indonesia</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          World’s Leading Cocoa Powder Manufacturer
        </h1>
        <p className="text-md md:text-lg font-medium">
          We are one of the leading cocoa manufacturers and coffee roaster from
          Indonesia. We are happy to grow with your business!
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md">
          Explore More
        </button>
      </div>
      </div>
   
  );
}

export default Banner;
