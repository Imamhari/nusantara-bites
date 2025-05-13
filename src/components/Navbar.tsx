"use client";
import { useState } from "react";
import { Text, Lang } from "@/utils/Navbar";
import Image from "next/image";
import Link from "next/link";
import { SlArrowDown } from "react-icons/sl";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Poppins } from "next/font/google";


type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};


const poppins = Poppins({
    weight: ['400', '700'],
    subsets: ["latin"],
})


function Navbar({ lang, setLang }: NavbarProps) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    setShowDropdown(false);
  };

  return (
    <section className="flex justify-between items-center sticky top-0 z-50 ">
      <div className="flex justify-between items-center w-full p-2 bg-black  z-50 top-0 shadow-md">
        <div className="flex justify-between items-center w-full lg:mx-[10vh] ">
          <div className="flex items-center">
          <Image src={"/logo.webp"} alt="logo" width={70} height={60} />
          <p className=" text-white flex flex-col font-jersey">
            <span style={{ fontFamily: '"Jersey 15", sans-serif', fontSize:"24px" }}>Shaka Agro</span>
            <span style={{ fontFamily: '"Jura Variable", sans-serif', fontSize:"18px"}} className="font-extrabold -mt-1">G L O B A L</span>
          </p>
        </div>
        <div className={`${poppins.className} hidden lg:flex items-center justify-between`}>
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
      <div className="hidden lg:flex relative mr-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 px-3 py-2 border rounded bg-black text-white hover:bg-slate-800 cursor-pointer"
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
          <div className="absolute right-0  mt-12 w-35 bg-white shadow-md border rounded z-10">
            <button
              onClick={() => changeLang("id")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full hover:rounded text-black"
            >
              <Image src="/assets/id.png" width={20} height={20} alt="ID" />
              Indonesia
            </button>
            <button
              onClick={() => changeLang("en")}
              className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full hover:rounded text-black"
            >
              <Image src="/assets/en.png" width={20} height={20} alt="EN" />
              English
            </button>
          </div>
        )}
      </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      {/* Tombol Hamburger */}
      <div className="absolute lg:hidden right-0 mr-[5px] flex items-center justify-center w-10 h-10  text-white cursor-pointer z-50">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-white text-2xl focus:outline-none transition-transform duration-300 ease-in-out" 
        >
          {showMobileMenu ? <IoCloseSharp  /> : <CgMenuRight />}
        </button>
      </div>

      {/* Menu Mobile Drop-down dari atas */}
      <div
        className={`fixed lg:hidden top-[70px] left-0 w-full bg-black  text-white transform transition-transform duration-300 ease-in-out rounded-b-2xl shadow-2xl ${
          showMobileMenu ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex justify-between -z-50">
          <div className="flex flex-col gap-4 px-6 py-6">
            <Link
              href="/"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-amber-400"
            >
              {Text.navbar.home[lang]}
            </Link>
            <Link
              href="/about"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-amber-400"
            >
              {Text.navbar.about[lang]}
            </Link>
            <Link
              href="/product"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-amber-400"
            >
              {Text.navbar.product[lang]}
            </Link>
            <Link
              href="/gallery"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-amber-400"
            >
              {Text.navbar.gallery[lang]}
            </Link>
            <Link
              href="/contact"
              onClick={() => setShowMobileMenu(false)}
              className="hover:text-amber-400"
            >
              {Text.navbar.contact[lang]}
            </Link>

            {/* Language Dropdown */}
          </div>
          <div className="relative mt-4">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-800 hover:bg-slate-700 mr-[5px]"
            >
              <Image
                src={`/assets/${lang}.png`}
                width={20}
                height={20}
                alt="flag"
              />
              <span>{lang.toUpperCase()}</span>
              <SlArrowDown
                size={15}
                className={`transition-transform ${
                  showDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md border rounded z-10 mr-[5px]">
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
        </div>
      </div>
    </section>
  );
}

export default Navbar;
