import { AboutText } from "@/utils/About";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

function About() {
  const { lang } = useLanguage();

  return (
    <section
      id="about"
      className="items-center justify-center h-screen mt-30 "
    >
      <div className="bg-[#F6F6F6] flex flex-row  h-[592px] ">
        <div className="bg-amber-400 w-7xl flex justify-center items-center">
        <Image
          src="/assets/about-us.webp"
          alt="about-us"
          width={500}
          height={500}
          priority
          className="object-cover w-[500px] h-[500px] ml-60 rounded-lg shadow-2xl border-2 border-amber-400"
          />
        </div>
        <div className="flex flex-col  p-20">
          <h3>About Us</h3>
          <p>ifdsjhksdjfh</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nam alias asperiores quae quod blanditiis similique quaerat sit, provident, nemo fugiat dolor odit quidem libero nobis debitis necessitatibus assumenda sint!</p>
          <button></button>
        </div>
      </div>
    </section>
  );
}

export default About;
