import React from "react";
import { useState } from "react";
import { Code, AppWindow, Layers, Cpu } from "lucide-react";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <section className="bg-black text-white pt-4 pb-6 max-w-4xl mx-auto px-4 py-8 lg:px-6">
      <h2 className="text-xl font-bold mb-2 capitalize flex items-center gap-2">
        <Layers size={20} color="white" /> Tech Stack
      </h2>
      <nav className="flex justify-start items-center my-4">
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-colors ${
            activeCategory === "frontend"
              ? "border-white"
              : "border-transparent"
          }`}
          onClick={() => handleCategoryClick("frontend")}
        >
          <Code size={20} color="white" />
          <span className="text-sm font-semibold uppercase">Frontend</span>
        </button>
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-colors ${
            activeCategory === "uiux" ? "border-white" : "border-transparent"
          }`}
          onClick={() => handleCategoryClick("uiux")}
        >
          <AppWindow size={20} color="white" />
          <span className="text-sm font-semibold uppercase">Ui/Ux</span>
        </button>
        <button
          className={`flex items-center gap-1 cursor-pointer px-4 py-2 border-b-2 transition-colors ${
            activeCategory === "devtools"
              ? "border-white"
              : "border-transparent"
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
        <div
          id="frontend"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-300 ease-in-out sm:grid-cols-2 ${
            activeCategory === "frontend"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/html.svg" alt="HTML" className="w-8 h-8" />
            <span>HTML</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/css.svg" alt="CSS" className="w-8 h-8" />
            <span>CSS</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/js.svg" alt="JAVASCRIPT" className="w-8 h-8" />
            <span>JAVASCRIPT</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/tailwind.svg" alt="TAILWIND" className="w-8 h-8" />
            <span>TAILWIND</span>
          </div>
        </div>

        <div
          id="uiux"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-300 ease-in-out sm:grid-cols-2 ${
            activeCategory === "uiux"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/figma.svg" alt="FIGMA" className="w-8 h-8" />
            <span>FIGMA</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/canva.svg" alt="CANVA" className="w-8 h-8" />
            <span>CANVA</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/ps.svg" alt="PHOTOSHOP" className="w-8 h-8" />
            <span>PHOTOSHOP</span>
          </div>
        </div>

        <div
          id="devtools"
          className={`w-full grid grid-cols-3 gap-4 transition-all duration-300 ease-in-out sm:grid-cols-2 ${
            activeCategory === "devtools"
              ? "opacity-100 visible"
              : "opacity-0 invisible absolute top-0 left-0"
          }`}
        >
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/vscode.svg" alt="VS CODE" className="w-8 h-8" />
            <span>VS Code</span>
          </div>
          <div className="flex bg-[rgb(17,17,17)] justify-center items-center h-12 gap-4">
            <img src="/svg/github.svg" alt="GITHUB" className="w-8 h-8" />
            <span>Github</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills;
