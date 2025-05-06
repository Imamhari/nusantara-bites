import React from "react";
import Image from "next/image";
function Navbar() {
  return (
    <section>
      <div>
        <Image
        src={"/logo.webp"}
        alt="logo"
        width={50}
        height={50}
        />
      </div>
      <div>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </section>
  );
}

export default Navbar;
