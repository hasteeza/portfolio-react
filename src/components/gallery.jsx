import React from "react";
import { Images, ChevronRight, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export function Gallery() {
  const imageFiles = [
    "flyerposter.png",
    "logoCasava.jpg",
    "muruk.jpg",
    "rio.jpg",
    "water.jpg",
    "typographyart.jpg",
    "sunset.jpg",
    "card.jpg",
    "corpid.jpg",
    "esportChamp.jpg",
    "selfportrait.jpg",
    "favicon-cassava.jpg",
    "layoutlogo.jpg",
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <div className="flex justify-between items-center mb-6">
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
        <Link
          to="/portfoliopage"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center text-sm font-bold gap-1 px-3 py-1.5 rounded-full bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors duration-300"
        >
          <span className="font-bold">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6 pl-2">
        <div className="flex items-center justify-center w-6 h-6 bg-[rgb(25,25,25)] rounded-full">
          <Bookmark size={12} fill="white" className="text-white" />
        </div>
        <h2 className="font-semibold text-sm uppercase tracking-wider font-inter">
          Graphics
        </h2>
      </div>

      <div className="columns-4 gap-2 space-y-2 md:columns-3 p-6 xs:columns-3">
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
  );
}

export default Gallery;
