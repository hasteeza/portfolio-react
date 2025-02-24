import React from "react";
import { Rocket, FolderClosed, Bookmark, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Innovision",
    description: "Lorem",
    tags: ["UX Design", "UI Design"],
    image: "images/webino.png",
  },
  {
    title: "Liquid Echo",
    description: "lorem",
    tags: ["Web Design", "Branding", "Motion Design"],
    image: "images/liquid-echo-web.png",
  },
  {
    title: "Movie Clone",
    description: "Lorem",
    tags: ["UX Design", "UI Design"],
    image: "images/movie.png",
  },
  {
    title: "AudAlert",
    description: "lorem",
    tags: ["UX Design", "UI Design"],
    image: "https://via.placeholder.com/400x300",
  },
];

export function Projects() {
  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 py-8 max-w-4xl mx-auto px-4 lg:px-6 font-geist">
      <div className="flex justify-between items-center mb-6">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex text-xl font-bold capitalize items-center gap-2"
        >
          <Rocket size={20} color="white" />
          <h1 className="font-bold">Projects</h1>
        </div>
        <Link
          to="/projectpage"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center text-sm font-bold gap-1"
        >
          <span className="font-bold">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
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
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 100}`}
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
