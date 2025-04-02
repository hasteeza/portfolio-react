import React from "react";
import { Link } from "react-router-dom";
import { Images } from "lucide-react";
import ShinyText from "../components/shinytext";
import Footer from "../components/footer";

const PortfolioPage = () => {
  const imageFiles = [
    "flyerposter.png",
    "layoutlogo.jpg",
    "logoCasava.jpg",
    "muruk.jpg",
    "rio.jpg",
    "water.jpg",
    "acronym.jpg",
    "typographyart.jpg",
    "sunset.jpg",
    "card.jpg",
    "corpid.jpg",
    "esportChamp.jpg",
    "selfportrait.jpg",
    "photography.jpg",
    "favicon-cassava.jpg",
    "AudAlert-placeholder.png",
  ];

  return (
    <>
      <header className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
        <Link to="/app">
          <ShinyText text="← Back to Home" />
        </Link>
      </header>
      <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist border-b border-[rgb(33,33,33)] rounded-md">
        <div className="flex justify-between items-center mb-2">
          <div
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-easing="ease-out-cubic"
            className="flex text-xl font-bold capitalize items-center gap-2"
          >
            <div className="flex items-center justify-center w-8 h-8 bg-[rgb(25,25,25)] rounded-md">
              <Images size={20} color="white" />
            </div>
            <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
              Portfolio
            </h1>
          </div>
        </div>

        <p className="font-geist text-left text-base m-4">
          Here are some of my projects in graphic design, UI design, and
          photography. Each one reflects my creativity and passion for visual
          storytelling!
        </p>

        <div className="columns-3 gap-2 space-y-2 md:columns-3 p-6">
          {imageFiles.map((file, index) => (
            <img
              key={file}
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-out"
              data-aos-delay={200 + index * 100}
              data-aos-duration="1500"
              data-aos-offset="100"
              loading="lazy"
              className="object-center object-cover rounded-lg transition-transform duration-500"
              src={`/images/${file}`}
              alt={file.replace(/\.\w+$/, "")}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PortfolioPage;
