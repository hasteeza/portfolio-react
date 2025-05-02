import {
  Rocket,
  FolderClosed,
  Bookmark,
  ChevronRight,
  Github,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const projects = [
  {
    title: "PokeWeb",
    description:
      "Developed a Pokédex web application that allows users to search, view, and manage Pokémon data, build teams, and run battle simulations with real-time stats and type-based visuals using React.js, Tailwind CSS, and the PokéAPI.",
    tags: ["React", "Tailwind", "UI Design"],
    image: "images/pokeweb.png",
    website: "https://tdrn-pokeweb.netlify.app/",
    source: "https://github.com/hasteeza/pokemon",
  },
  {
    title: "Liquid Echo",
    description:
      "Created the Liquid Echo website as a Tailwind CSS practice project, focusing on responsive design, clean layouts, and modern UI components.",
    tags: ["Web Design", "Tailwind"],
    image: "images/liquid-echo-web.png",
    website: "https://hasteeza.github.io/liquid-echo/templates",
    source: "https://github.com/hasteeza/liquid-echo",
  },
  {
    title: "AudAlert",
    description:
      "Developed AudAlert, a mobile app that monitors and detects sounds, allowing users to view, analyze, and manage sound data with real-time alerts and device connection features.",
    tags: ["React Native", "UI Design", "Mobile App"],
    image: "images/AudAlert-placeholder.png",
    apk: "#", // Replace with actual APK download link
  },
  {
    title: "Scientific Calculator",
    description:
      "Developed a responsive scientific calculator using React and Tailwind CSS, featuring advanced functions like trigonometry, exponentials, and real-time input handling.",
    tags: ["React", "Tailwind"],
    image: "images/sci-cal.png",
    website: "https://tdrn-scientific-calculator.netlify.app/",
    source: "https://github.com/hasteeza/scientific-calculator",
  },
];

export function Projects() {
  useEffect(() => {
    // Add custom animation class to AOS
    if (typeof document !== "undefined") {
      const style = document.createElement("style");
      style.innerHTML = `
        /* Blurry fade-up effect */
        [data-aos="blurry-fade-up"] {
          opacity: 0;
          transform: translate3d(0, 30px, 0);
          filter: blur(10px);
          transition-property: opacity, transform, filter;
        }
        [data-aos="blurry-fade-up"].aos-animate {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          filter: blur(0);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 py-8 max-w-4xl mx-auto px-4 lg:px-6">
      <div className="flex justify-between items-center mb-8">
        <div
          data-aos="blurry-fade-up"
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
          data-aos="blurry-fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center text-sm font-bold gap-1 px-3 py-1.5 rounded-full bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors duration-300"
        >
          <span className="font-bold font-geist">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
      </div>

      <div
        className="flex items-center gap-2 mb-6 pl-2"
        data-aos="blurry-fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        <div className="flex items-center justify-center w-6 h-6 bg-[rgb(25,25,25)] rounded-full">
          <Bookmark size={12} fill="white" className="text-white" />
        </div>
        <h2 className="font-semibold text-sm uppercase tracking-wider font-inter">
          Development
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-1 gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-[rgb(17,17,17)] overflow-hidden rounded-lg border border-[rgb(33,33,33)] hover:border-[rgb(50,50,50)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            data-aos="blurry-fade-up"
            data-aos-duration="1000"
            data-aos-delay={`${index * 150}`}
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
                      target="_blank"
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
