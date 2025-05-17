import { BannerText } from "@/utils/Home";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

function Freight() {
    const { lang } = useLanguage();
  return (
    <div className="flex justify-evenly w-screen mx-20 ">
      <div className="bg-white rounded-lg border w-[300px] pb-5">
        <Image
          src="/assets/freight/truck-freight.webp"
          alt="truck-freight"
          width={300}
          height={30}
          className="rounded-t-lg shadow-xl h-[200px]"
        />
        <div className="p-2 relative -mt-10 ml-4">
          <Image
            src="/assets/freight/delivery-truck.svg"
            alt="delivery-truck"
            width={70}
            height={30}
            className="bg-white rounded-full p-2 shadow-xl"
          />
        </div>
        <p className="mx-5 mt-5 ">
          {BannerText.truckFreight.title[lang]}
          <br />
          <span className="text-sm text-gray-500 text-justify ">
            {BannerText.truckFreight.description[lang]}
          </span>
        </p>
      </div>
      <div className="bg-white rounded-lg border w-[300px] pb-5">
        <Image
          src="/assets/freight/air-freight.webp"
          alt="truck-freight"
          width={300}
          height={30}
          className="rounded-t-lg shadow-xl h-[200px]"
        />
        <div className="relative bg-white p-4 rounded-full shadow-xl flex items-center w-[70px] h-[70px] -mt-9 ml-6">
          <Image
            src="/assets/freight/airplane.svg"
            alt="airplane"
            width={40}
            height={40}
          />
        </div>
        <p className="mx-5 mt-5">
          {BannerText.airFreight.title[lang]}
          <br />
          <span className="text-sm text-gray-500 text-justify">
            {BannerText.airFreight.description[lang]}
          </span>
        </p>
      </div>
      <div className="bg-white rounded-lg border w-[300px] pb-5">
        <Image
          src="/assets/freight/ship-freight.webp"
          alt="ship-freight"
          width={300}
          height={29}
          className="rounded-t-lg shadow-xl h-[200px]"
        />
        <div className="p-2 relative -mt-10 ml-4">
          <Image
            src="/assets/freight/ship.svg"
            alt="delivery-truck"
            width={70}
            height={30}
            className="bg-white rounded-full p-2 shadow-xl"
          />
        </div>
        <p className="mx-5 mt-5">
          {BannerText.shipFreight.title[lang]}
          <br />
          <span className="text-sm text-gray-500 text-justify">
            {BannerText.shipFreight.description[lang]}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Freight;
