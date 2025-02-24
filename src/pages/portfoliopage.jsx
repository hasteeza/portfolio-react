import React from "react";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  return (
    <>
      {" "}
      <header>
        <Link to="/app">← Back to Home</Link>
      </header>
      <section className="h-screen flex justify-center items-center">
        <div className="">
          <h1 className="text-9xl">SECTION</h1>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
