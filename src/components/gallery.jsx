import React from "react";
import { Images, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Gallery() {
  const imageFiles = [
    "flyerposter.png",
    "logoCasava.jpg",
    "muruk.jpg",
    "aurora.jpg",
    "rio.jpg",
    "water.jpg",
    "typographyart.jpg",
    "sunset.jpg",
    "card.jpg",
    "corpid.jpg",
    "esportChamp.jpg",
    "selfportrait.jpg",
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <div className="flex justify-between items-center mb-6">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex gap-2 items-center"
        >
          <Images size={20} color="white" />
          <h1 className="text-xl font-bold">Portfolio</h1>
        </div>
        <Link
          to="/portfoliopage"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center text-sm font-bold gap-1"
        >
          <span className="font-bold">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
      </div>

      <div className="columns-4 gap-2 space-y-2 md:columns-3 border bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-6">
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
