import React from "react";
import { Slack } from "lucide-react";
import { Link } from "react-router-dom";
import ShinyText from "./shinytext";

export function Header() {
  return (
    <>
      <header
        data-aos="fade-down"
        data-aos-delay="50"
        className="fixed top-0 left-0 right-0 z-50 
        backdrop-blur-xl 
        flex items-center 
        justify-between 
        max-w-4xl 
        mx-auto 
        px-4 
        py-4 
        border 
        border-[rgb(33,33,33)]
        rounded-b-xl 
        lg:px-6 
        font-geist 
        transition-all 
        duration-300 
        ease-in-out 
        shadow-lg 
        hover:backdrop-blur-2xl 
      "
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
          <Slack size={40} className="text-white" />
        </Link>
        <div className="flex items-center justify-evenly gap-4">
          <a
            href="https://tdrn-blog.netlify.app/"
            target="_blank"
            className="rounded-full font-russo p-2 px-6 flex bg-[rgb(17,17,17)] tracking-widest hover:scale-110 transition-transform duration-200 cursor-pointer"
          >
            <ShinyText text="Blog" />
          </a>
        </div>
      </header>

      <div className="h-20"></div>
    </>
  );
}

export default Header;
