import React from "react";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Experience } from "../components/exp";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Gallery } from "../components/gallery";
import Achievement from "../components/achievement";
import Footer from "../components/footer";

function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Gallery />
      <Achievement />
      <Footer />
    </>
  );
}

export default HomePage;
