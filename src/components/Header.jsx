import React, { useState, useEffect } from "react";
// import header data
import { headerData } from "../data";
// import components
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
// import icons
import { TiThMenuOutline } from "react-icons/ti";
const Header = () => {
  // destructure header data
  const { logo } = headerData;
  // header state
  const [isActive, setIsActive] = useState(false);
  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);
  // scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "bg-red-500 h-[100px] lg:h-[110px]" : "bg-green-500"
      } fixed left-0 right-0 top-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      Header
    </header>
  );
};

export default Header;
