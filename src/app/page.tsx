"use client";
import { useState } from "react";
import type { Lang } from "@/utils/Navbar";
import Home from "./home/page";
import Navbar from "@/components/Navbar";


export default function Page() {
  const [lang, setLang] = useState<Lang>("id");
  return (
    <main>
       <Navbar lang={lang} setLang={setLang} />
      <Home lang={lang}/>
      
    </main>
  );
}
