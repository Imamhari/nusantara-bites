"use client";
import { useState, useEffect } from "react";
import { Text, Lang } from "@/utils/Navbar";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { CgMenuRight } from "react-icons/cg";
import { IoCloseSharp } from "react-icons/io5";
import { Poppins } from "next/font/google";
import { useLanguage } from '@/context/LanguageContext';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ["latin"],
})

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { lang, setLang } = useLanguage();

  
  const [activeSection, setActiveSection] = useState("home");

 
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let current = "home";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          current = section.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLang = (newLang: Lang) => {
    setLang(newLang);
    setShowDropdown(false);
  };

  return (
    <section className="flex justify-between items-center sticky top-0 z-50">
      <div className="flex justify-between items-center w-full p-2 bg-black z-50 top-0 shadow-md">
        <div className="flex justify-between items-center w-full lg:mx-[10vh]">
          <div className="flex items-center">
            <Image src={"/logo.webp"} alt="logo" width={70} height={60} />
            <p className="text-white flex flex-col font-jersey">
              <span style={{ fontFamily: '"Jersey 15", sans-serif', fontSize:"24px" }}>Shaka Agro</span>
              <span style={{ fontFamily: '"Jura Variable", sans-serif', fontSize:"18px"}} className="font-extrabold -mt-1">G L O B A L</span>
            </p>
          </div>
          <div className={`${poppins.className} hidden lg:flex items-center justify-between`}>
            <div className="flex gap-7 text-md font-semibold text-white items-center">
              <a href="#" className={`hover:text-amber-400 ${activeSection === "home" ? "text-amber-400 border-b-3 border-white rounded-b-md " : "text-white"}`}>
                <span>{Text.navbar.home[lang]}</span>
              </a>
              <a href="#about" className={`hover:text-amber-400 ${activeSection === "about" ? "text-amber-400 border-b-3 border-white rounded-b-md" : "text-white"}`}>
                <span>{Text.navbar.about[lang]}</span>
              </a>
              <a href="#product" className={`hover:text-amber-400 ${activeSection === "product" ? "text-amber-400 border-b-3 border-white rounded-b-md" : "text-white"}`}>
                <span>{Text.navbar.product[lang]}</span>
              </a>
              <a href="#gallery" className={`hover:text-amber-400 ${activeSection === "gallery" ? "text-amber-400 border-b-3 border-white rounded-b-md" : "text-white"}`}>
                <span>{Text.navbar.gallery[lang]}</span>
              </a>
              <a href="#contact" className={`hover:text-amber-400 ${activeSection === "contact" ? "text-amber-400 border-b-3 border-white rounded-b-md" : "text-white"}`}>
                <span>{Text.navbar.contact[lang]}</span>
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative mr-4">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="flex items-center gap-2 px-3 py-2 border rounded bg-black text-white hover:bg-slate-800 cursor-pointer"
          >
            <Image src={`/assets/${lang}.png`} width={20} height={20} alt="flag" />
            <span>{lang.toUpperCase()}</span>
            <SlArrowDown size={30} color="white" className={`text-white  ${showDropdown ? "rotate-180" : ""}`} />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-12 w-35 bg-white shadow-md border rounded z-10">
              <button onClick={() => changeLang("id")} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full hover:rounded text-black">
                <Image src="/assets/id.png" width={20} height={20} alt="ID" />
                Indonesia
              </button>
              <button onClick={() => changeLang("en")} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full hover:rounded text-black">
                <Image src="/assets/en.png" width={20} height={20} alt="EN" />
                English
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="absolute lg:hidden right-0 mr-[5px] flex items-center justify-center w-10 h-10 text-white cursor-pointer z-50">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="text-white text-2xl focus:outline-none transition-transform duration-300 ease-in-out"
        >
          {showMobileMenu ? <IoCloseSharp /> : <CgMenuRight />}
        </button>
      </div>

      {/* Menu Mobile Drop-down */}
      <div className={`fixed lg:hidden top-[70px] left-0 w-full bg-black text-white transform transition-transform duration-300 ease-in-out rounded-b-2xl shadow-2xl ${
        showMobileMenu ? "translate-y-0" : "-translate-y-full"
      }`}>
        <div className="flex justify-between -z-50">
          <div className="flex flex-col gap-4 px-6 py-6">
            <a href="#" onClick={() => setShowMobileMenu(false)} className={`hover:text-amber-400 ${activeSection === "home" ? "text-amber-400 border-b-3 border-white" : "text-white"}`}>
              {Text.navbar.home[lang]}
            </a>
            <a href="#about" onClick={() => setShowMobileMenu(false)} className={`hover:text-amber-400 ${activeSection === "about" ? "text-amber-400 border-b-3 border-white" : "text-white"}`}>
              {Text.navbar.about[lang]}
            </a>
            <a href="#product" onClick={() => setShowMobileMenu(false)} className={`hover:text-amber-400 ${activeSection === "product" ? "text-amber-400 border-b-3 border-white" : "text-white"}`}>
              {Text.navbar.product[lang]}
            </a>
            <a href="#gallery" onClick={() => setShowMobileMenu(false)} className={`hover:text-amber-400 ${activeSection === "gallery" ? "text-amber-400 border-b-3 border-white" : "text-white"}`}>
              {Text.navbar.gallery[lang]}
            </a>
            <a href="#contact" onClick={() => setShowMobileMenu(false)} className={`hover:text-amber-400 ${activeSection === "contact" ? "text-amber-400 border-b-3 border-white" : "text-white"}`}>
              {Text.navbar.contact[lang]}
            </a>
          </div>
          <div className="relative mt-4">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center gap-2 px-3 py-2 border rounded bg-slate-800 hover:bg-slate-700 mr-[5px]"
            >
              <Image src={`/assets/${lang}.png`} width={20} height={20} alt="flag" />
              <span>{lang.toUpperCase()}</span>
              <SlArrowDown size={15} className={`transition-transform ${showDropdown ? "rotate-180" : ""}`} />
            </button>

            {showDropdown && (
              <div className="absolute right-0 mt-2 w-40 bg-white shadow-md border rounded z-10 mr-[5px]">
                <button onClick={() => changeLang("id")} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-black">
                  <Image src="/assets/id.png" width={20} height={20} alt="ID" />
                  Indonesia
                </button>
                <button onClick={() => changeLang("en")} className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-black">
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
