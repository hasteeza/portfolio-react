import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const ProjectPage = () => {
  return (
    <>
      <header>
        <NavLink to="/app">← Back to Home</NavLink>
      </header>
      <section className="h-screen flex justify-center items-center">
        <div className="">
          <h1 className="text-9xl">SECTION</h1>
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
