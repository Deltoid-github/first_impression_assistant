import React from "react";
import logo from "../../public/images/logo.png";
import Image from "next/image";

export const Character = () => {
  return (
    <div z-index={20}>
      <Image src={logo.src} alt={"logo"} width={120} height={120}></Image>
    </div>
  );
};
