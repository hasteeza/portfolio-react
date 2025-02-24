import React, { useState } from "react";
import { Code, AppWindow, Layers, Cpu } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="bg-black text-white pt-4 pb-6 max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <h2
        data-aos="fade-in"
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
        className="text-xl font-bold mb-2 capitalize flex items-center gap-2"
      >
        <Layers size={20} color="white" /> Tech Stack
      </h2>
      <nav className="flex justify-start items-center my-4 space-x-6">
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-all duration-300 ease-in-out ${
            activeCategory === "frontend"
              ? "border-white text-white"
              : "border-transparent text-gray-400 hover:text-white hover:border-white"
          }`}
          onClick={() => handleCategoryClick("frontend")}
        >
          <Code size={20} color="white" />
          <span className="text-sm font-semibold uppercase">Frontend</span>
        </button>
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-all duration-300 ease-in-out ${
            activeCategory === "uiux"
              ? "border-white text-white"
              : "border-transparent text-gray-400 hover:text-white hover:border-white"
          }`}
          onClick={() => handleCategoryClick("uiux")}
        >
          <AppWindow size={20} color="white" />
          <span className="text-sm font-semibold uppercase">Ui/Ux</span>
        </button>
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-all duration-300 ease-in-out ${
            activeCategory === "devtools"
              ? "border-white text-white"
              : "border-transparent text-gray-400 hover:text-white hover:border-white"
          }`}
          onClick={() => handleCategoryClick("devtools")}
        >
          <Cpu size={20} color="white" />
          <span className="text-sm font-semibold uppercase">
            Developer Tools
          </span>
        </button>
      </nav>

      <div className="relative w-full overflow-hidden">
        {/* Frontend Skills */}
        <div
          id="frontend"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-500 ease-out sm:grid-cols-2 ${
            activeCategory === "frontend"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/html.svg" alt="HTML" className="w-8 h-8" />
            <span>HTML</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/css.svg" alt="CSS" className="w-8 h-8" />
            <span>CSS</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/js.svg" alt="JAVASCRIPT" className="w-8 h-8" />
            <span>JAVASCRIPT</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="500"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/tailwind.svg" alt="TAILWIND" className="w-8 h-8" />
            <span>TAILWIND</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="600"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/react.svg" alt="REACT" className="w-8 h-8" />
            <span>REACT</span>
          </div>
        </div>

        {/* Ui/Ux Skills */}
        <div
          id="uiux"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-500 ease-out sm:grid-cols-2 ${
            activeCategory === "uiux"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/figma.svg" alt="FIGMA" className="w-8 h-8" />
            <span>FIGMA</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/canva.svg" alt="CANVA" className="w-8 h-8" />
            <span>CANVA</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/ps.svg" alt="PHOTOSHOP" className="w-8 h-8" />
            <span>PHOTOSHOP</span>
          </div>
        </div>

        {/* Developer Tools Skills */}
        <div
          id="devtools"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-500 ease-out sm:grid-cols-2 ${
            activeCategory === "devtools"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/vscode.svg" alt="VS CODE" className="w-8 h-8" />
            <span>VS Code</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/github.svg" alt="GITHUB" className="w-8 h-8" />
            <span>Github</span>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1000"
            data-aos-delay="400"
            className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4"
          >
            <img src="/svg/vercel.svg" alt="VERCEL" className="w-8 h-8" />
            <span>Vercel</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
