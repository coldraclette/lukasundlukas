import Link from "next/link";
import { useEffect, useState } from "react";
import { NavigationDesktop } from "./navigationDesktop";
import { NavigationMobile } from "./navigationMobile";

export const Navigation = () => {
  const getWindowSize = () => {
    if (typeof window !== "undefined") {
      const { innerWidth } = window;
      return { innerWidth };
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWitdth] = useState(getWindowSize());
  const hamburgerLine = `h-1 w-9 my-1 rounded-full bg-white transition ease transform duration-300`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowResize = () => setWindowWitdth(getWindowSize());
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  if (windowWidth && windowWidth.innerWidth > 768 && isOpen) {
    setIsOpen(false)
  }

  const closeNav = () => setIsOpen(false);

  return (
    <div className="flex justify-between mb-4">
      <Link href="/">
        <a className="text-lg font-bold">Lukas und Lukas.</a>
      </Link>
      <NavigationDesktop />
      <button
        className="sm:hidden fixed top-2 right-2 h-12 w-12 rounded z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex flex-col  justify-center items-center">
          <div
            className={`${hamburgerLine} ${
              isOpen ? "rotate-45 translate-y-3 " : ""
            }`}
          />
          <div className={`${hamburgerLine} ${isOpen ? "opacity-0" : ""}`} />
          <div
            className={`${hamburgerLine} ${
              isOpen ? "-rotate-45 -translate-y-3" : ""
            }`}
          />
        </div>
      </button>
      {isOpen && <NavigationMobile closeNav={() => closeNav()} />}
    </div>
  );
};
