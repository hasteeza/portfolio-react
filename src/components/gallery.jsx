import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Images, Circle } from "lucide-react";

export function Gallery() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6">
      <div className="flex gap-2 items-center mb-4">
        <Images size={20} color="white" />
        <h1 className="text-xl font-bold">Portfolio</h1>
      </div>
      <div className="flex items-start gap-2 mb-6">
        <Circle size={20} />
        <p className="text-base font-medium leading-relaxed">
          Welcome to my portfolio, where I show my passion of graphic design and
          photography in a visually appealing masonry layout. From eye-catching
          designs to intriguing photographs, each item is carefully placed to
          provide a smooth and dynamic viewing experience. Feel free to explore;
          I hope you find something that inspires you!
        </p>
      </div>

      <div class="columns-3 gap-2 space-y-2 md:columns-4">
        <img
          class="object-center object-cover rounded-lg"
          src="/images/esportChamp.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/flyerposter.png"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/logoCasava.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/selfportrait.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/layoutlogo.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/photography.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/muruk.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/sunrise.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/aurora.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/rio.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/aleson.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/water.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/typographyart.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/jersey.jpg"
          alt=""
        />
        <img
          class="object-center object-cover rounded-lg"
          src="/images/sunset.jpg"
          alt=""
        />
      </div>
    </section>
  );
}
export default Gallery;
