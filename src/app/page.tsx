// app/page.tsx
"use client";

import { useLanguage } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import Home from "./home/page";
import { TextSEO } from "@/utils/TextSEO";
import Head from "next/head";
import About from "./about/page";

export default function Page() {
  const { lang } = useLanguage();

  return (
    <>
      <Head>
        <title>{TextSEO.title[lang]}</title>
        <meta name="description" content={TextSEO.description[lang]} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <Navbar />
        <div className="scroll-smooth">
          <div id="home" className="md:scroll-mt-24">
            <Home />
          </div>
        <div id="about" className="md:scroll-mt-24">
            <About />
          </div>
        </div>
      </main>
    </>
  );
}
