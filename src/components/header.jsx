import React from "react";
import { Slack, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { RiHome2Fill } from "react-icons/ri";

export function Header() {
  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-delay="50"
        className="fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl 
        bg-white/90 dark:bg-[rgb(17,17,17)]/90 
        flex items-center 
        justify-between 
        max-w-4xl 
        mx-auto 
        px-4 
        py-4 
        border 
        border-gray-200 dark:border-[rgb(33,33,33)] 
        rounded-b-xl 
        lg:px-6 
        font-geist 
        transition-all 
        duration-300 
        ease-in-out 
        shadow-lg 
        hover:backdrop-blur-2xl 
        hover:bg-white/95 dark:hover:bg-[rgb(17,17,17)]/95"
      >
        <Link
          to="/"
          className="cursor-pointer 
          transition-transform 
          duration-200 
          ease-in-out 
          hover:scale-105 
          active:scale-95"
        >
          <Slack size={40} className="text-black dark:text-white" />
        </Link>
        <div className="flex items-center justify-evenly gap-4">
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                window.scrollTo({
                  top: aboutSection.offsetTop - 100,
                  behavior: "smooth",
                });
              }
            }}
            className="rounded-full p-2 bg-gray-800 hover:scale-110 transition-transform duration-200 cursor-pointer"
          >
            <RiHome2Fill size={24} className="text-white" />
          </button>

          <button
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 
          hover:scale-110 transition-transform duration-200"
            aria-label="Toggle Theme"
          >
            <Moon size={24} className="text-black dark:hidden" />
            <Sun size={24} className="text-white hidden dark:inline" />
          </button>
        </div>
      </header>

      <div className="h-20"></div>
    </>
  );
}

export default Header;
