import React from "react";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Experience } from "../components/exp";
import { Skills } from "../components/skills";
import { Projects } from "../components/projects";
import { Gallery } from "../components/gallery";
import Certificate from "../components/certificate";
import Contact from "../components/contact";
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
      <Certificate />
      <Contact />
      <Footer />
    </>
  );
}

export default HomePage;
