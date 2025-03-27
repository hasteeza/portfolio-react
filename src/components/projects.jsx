"use client";
import {
  Rocket,
  FolderClosed,
  Bookmark,
  ChevronRight,
  Github,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Innovision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Design", "UI Design"],
    image: "images/webino.png",
    website: "#",
    source: "#",
  },
  {
    title: "Liquid Echo",
    description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    tags: ["Web Design", "Branding", "Motion Design"],
    image: "images/liquid-echo-web.png",
    website: "#",
    source: "#",
  },
  {
    title: "Movie Clone",
    description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
    tags: ["UX Design", "UI Design"],
    image: "images/movie.png",
    website: "#",
    source: "#",
  },
  {
    title: "AudAlert",
    description: "Donec ullamcorper nulla non metus auctor fringilla.",
    tags: ["UX Design", "UI Design", "Mobile App"],
    image: "images/AudAlert-placeholder.png",
    apk: "#", // Replace with actual APK download link
  },
];

export function Projects() {
  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 py-8 max-w-4xl mx-auto px-4 lg:px-6">
      <div className="flex justify-between items-center mb-8">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex text-xl font-bold capitalize items-center gap-2"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-[rgb(25,25,25)] rounded-md">
            <Rocket size={18} className="text-primary" />
          </div>
          <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
            Projects
          </h1>
        </div>
        <Link
          to="/projectpage"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center text-sm font-bold gap-1 px-3 py-1.5 rounded-full bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors duration-300"
        >
          <span className="font-bold font-geist">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
      </div>

      <div className="flex items-center gap-2 mb-6 pl-2">
        <div className="flex items-center justify-center w-6 h-6 bg-[rgb(25,25,25)] rounded-full">
          <Bookmark size={12} fill="white" className="text-white" />
        </div>
        <h2 className="font-semibold text-sm uppercase tracking-wider font-inter">
          Development
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[rgb(17,17,17)] overflow-hidden rounded-lg border border-[rgb(33,33,33)] hover:border-[rgb(50,50,50)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 100}`}
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="absolute aspect-3/2 inset-0 w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.9)] via-[rgba(0,0,0,0.3)] to-transparent"></div>
            </div>

            <div className="p-5">
              <div className="flex gap-2 items-center mb-3">
                <div className="flex items-center justify-center w-7 h-7 bg-[rgb(25,25,25)] rounded-md">
                  <FolderClosed size={14} className="text-primary" />
                </div>
                <h2 className="text-lg font-semibold tracking-tight font-inter">
                  {project.title}
                </h2>
              </div>

              <p className="text-[#aaa] text-sm mb-4 line-clamp-2 font-geist">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5 font-geist">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-[rgb(30,30,30)] text-[#ccc] font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex justify-start gap-3 font-geist">
                {project.title === "AudAlert" ? (
                  <a
                    href={project.apk}
                    className="flex items-center gap-1.5 border border-[rgb(40,40,40)] hover:border-[rgb(60,60,60)] hover:bg-[rgb(25,25,25)] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                  >
                    <Download size={14} />
                    APK
                  </a>
                ) : (
                  <>
                    <a
                      href={project.website}
                      className="flex items-center gap-1.5 bg-[rgb(40,40,40)] hover:bg-[rgb(50,50,50)] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                    >
                      Website
                    </a>
                    <a
                      href={project.source}
                      className="flex items-center gap-1.5 border border-[rgb(40,40,40)] hover:border-[rgb(60,60,60)] hover:bg-[rgb(25,25,25)] text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300"
                    >
                      <Github size={14} />
                      Source
                    </a>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
