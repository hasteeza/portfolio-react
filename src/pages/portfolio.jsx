import React from "react";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Experience } from "../components/exp";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Gallery } from "../components/gallery";

function Portfolio() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Gallery />
    </>
  );
}

export default Portfolio;
