import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import ShinyText from "../components/shinytext";
import Footer from "../components/footer";
import { Rocket, FolderClosed, Download, Github } from "lucide-react";

const projects = [
  {
    title: "Innovision",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tags: ["UX Design", "UI Design"],
    image: "images/webino.png",
    video: "path/to/innovision-demo.mp4",
    website: "#",
    source: "#",
  },
  {
    title: "Liquid Echo",
    description: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    tags: ["Web Design", "Branding", "Motion Design"],
    image: "images/liquid-echo-web.png",
    video: "path/to/liquid-echo-demo.mp4",
    website: "#",
    source: "#",
  },
  {
    title: "Movie Clone",
    description: "Nullam quis risus eget urna mollis ornare vel eu leo.",
    tags: ["UX Design", "UI Design"],
    image: "images/movie.png",
    video: "path/to/movie-clone-demo.mp4",
    website: "#",
    source: "#",
  },
  {
    title: "AudAlert",
    description: "Donec ullamcorper nulla non metus auctor fringilla.",
    tags: ["UX Design", "UI Design", "Mobile App"],
    image: "images/AudAlert-placeholder.png",
    video: "video/AudAlert.mp4",
    apk: "#",
  },
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="flex bg-[rgb(17,17,17)] overflow-hidden rounded-lg border border-[rgb(33,33,33)] hover:border-[rgb(50,50,50)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] md:flex-col"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay={`${index * 100}`}
    >
      <div
        className="w-7/12 relative group md:w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative w-full pb-[56.25%]">
          <img
            src={project.image}
            alt={project.title}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-0" : "opacity-100"
            }`}
          />
          <video
            ref={videoRef}
            src={project.video}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
            loop
            muted
            playsInline
          />
        </div>
      </div>
      <div className="w-5/12 p-6 flex flex-col justify-center h-full md:w-full md:p-2">
        <div className="flex gap-2 items-center mb-4">
          <div className="flex items-center justify-center w-7 h-7 bg-[rgb(25,25,25)] rounded-md">
            <FolderClosed size={14} className="text-primary" />
          </div>
          <h2 className="text-xl font-semibold tracking-tight font-inter">
            {project.title}
          </h2>
        </div>

        <p className="text-[#aaa] text-base mb-5 font-geist">
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
  );
};

const ProjectPage = () => {
  return (
    <>
      <header className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
        <NavLink to="/app">
          <ShinyText text="← Back to Home" />
        </NavLink>
      </header>
      <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6">
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
        </div>

        <p className="font-geist text-left text-base m-6">
          Here are some of my frontend projects, from personal work to college
          assignments. Each one reflects my journey in web development and UI
          design!
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xs:grid-cols-1">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;
