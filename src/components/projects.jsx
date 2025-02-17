import React from "react";
import { Rocket, FolderClosed, Bookmark } from "lucide-react";

const projects = [
  {
    title: "Innovision",
    description: "The Most Universal UI Kit for Figma",
    tags: ["UX Design", "UI Design", "Motion Design", "Art Direction"],
    image: "images/webino.png",
  },
  {
    title: "Liquid Echo",
    description: "Charts and infographics constructor",
    tags: ["Web Design", "Branding", "Motion Design"],
    image: "images/liquid-echo-web.png",
  },
  {
    title: "Movie Clone",
    description: "1800 high-quality vector icons",
    tags: ["UX Design", "UI Design"],
    image: "images/movie.png",
  },
  {
    title: "AudAlert",
    description: "Take control of your projects",
    tags: ["UX Design", "UI Design", "Product Design"],
    image: "https://via.placeholder.com/400x300",
  },
];

export function Projects() {
  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 py-8 max-w-4xl mx-auto px-4 lg:px-6">
      <div className="flex text-xl font-bold mb-4 capitalize items-center gap-2">
        <Rocket size={20} color="white" />
        <h1 className="font-bold">Projects</h1>
      </div>
      <div className="flex items-center gap-2 mb-6 pl-2">
        <Bookmark size={15} fill="white" />
        <h2 className="font-semibold text-sm uppercase">Featured</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[rgb(17,17,17)] overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="aspect-3/2 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            </div>
            <div className="p-4">
              <div className="flex gap-2 items-center mb-2">
                <FolderClosed size={20} />
                <h2 className="text-[clamp(0.5rem,1.125rem,1.5rem)] font-semibold">
                  {project.title}
                </h2>
              </div>
              <p className="text-[#fff] text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[rgb(59,59,59)] text-[#fff] font-semibold px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
