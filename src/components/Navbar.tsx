"use client";
import { useState } from "react";
import { Text, Lang } from "@/utils/Navbar";
import Image from "next/image";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";


function Navbar() {
  const [lang, setLang] = useState<Lang>("id");
  const [showDropdown, setShowDropdown] = useState(false);

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    setShowDropdown(false);
  };

  return (
    <section className="bg-slate-900 p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex justify-between items-center w-full md:mx-[10vh]">
        <div className="flex gap-2 items-center ">
          <Image src={"/logo.webp"} alt="logo" width={50} height={50} />
          <p className=" text-white">NUSANTARA BITES</p>
        </div>
        <div className="hidden md:flex items-center justify-between">
          <div className="flex gap-7 text-md font-semibold text-white items-center">
            <Link href="/" className="hover:text-amber-400">
              <span>{Text.navbar.home[lang]}</span>
            </Link>
            <Link href="/about" className="hover:text-amber-400">
              <span>{Text.navbar.about[lang]}</span>
            </Link>
            <Link href="/product" className="hover:text-amber-400">
              <span>{Text.navbar.product[lang]}</span>
            </Link>
            <Link href="/gallery" className="hover:text-amber-400">
              <span>{Text.navbar.gallery[lang]}</span>
            </Link>
            <Link href="/contact" className="hover:text-amber-400">
              <span>{Text.navbar.contact[lang]}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden md:flex relative mr-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-900 text-white hover:bg-slate-800 cursor-pointer"
        >
          <Image
            src={`/assets/${lang}.png`}
            width={20}
            height={20}
            alt="flag"
          />
          <span>{lang.toUpperCase()}</span>
          <SlArrowDown
            size={30}
            color="white"
            className={`text-white  ${showDropdown ? "rotate-180" : ""}`}
          />
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-2 w-30 bg-white shadow-md border rounded z-10">
            <button
              onClick={() => changeLang("id")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-black"
            >
              <Image src="/assets/id.png" width={20} height={20} alt="ID" />
              Indonesia
            </button>
            <button
              onClick={() => changeLang("en")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-black"
            >
              <Image src="/assets/en.png" width={20} height={20} alt="EN" />
              English
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Navbar;
