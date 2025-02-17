import React from "react";
import { MapPin } from "lucide-react";

export function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-1">TERENCE DAVE NATAD</h1>
          <div className="flex items-center gap-1 mb-8">
            <MapPin size={15} color="white" />
            <span className="text-sm font-medium">
              Zamboanga City, Philippines
            </span>
          </div>
          <h6 className="text-base font-semibold">
            A Front End Developer and UI/UX
          </h6>
          <p className="mt-2 text-sm font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            error ducimus minus tempore! Odio qui pariatur fugiat fugit incidunt
            mollitia odit, animi nemo omnis magnam sed quod cumque veritatis ex?
          </p>
          <p className="mt-2 text-sm font-medium">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            error ducimus minus tempore! Odio qui pariatur fugiat fugit incidunt
            mollitia odit, animi nemo omnis magnam sed quod cumque veritatis ex?
          </p>
        </div>
        <img
          fetchPriority="high"
          height={160}
          width={160}
          className="object-cover aspect-3/2 rounded-lg"
          src="/images/profile-w.jpg"
          alt="Terence"
        />
      </div>
    </section>
  );
}

export default About;
