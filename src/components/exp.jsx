import React from "react";
import { BadgePercent, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Experience() {
  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <div className="flex justify-between items-center mb-6">
        <div
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
          className="flex items-center gap-2 text-xl font-bold capitalize"
        >
          <BadgePercent size={20} />
          <h1>Milestones</h1>
        </div>
        <Link
          to="/milestonepage"
          className="flex items-center text-sm font-bold gap-1"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <span className="font-bold">View all</span>
          <ChevronRight size={15} className="font-bold" />
        </Link>
      </div>
      <div className="flex justify-evenly items-center max-w-full">
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-delay="300"
          className="flex flex-col justify-center items-start h-40 w-80"
        >
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Years of Experience</span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="400"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-start h-40 w-80"
        >
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Projects Completed</span>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-easing="ease-in-out"
          className="flex flex-col justify-center items-start h-40 w-80"
        >
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Companies Worked</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
