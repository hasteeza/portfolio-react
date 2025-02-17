import React from "react";

export function Experience() {
  return (
    <section className="w-full border-y border-[rgb(33,33,33)] rounded-sm my-6 max-w-4xl mx-auto px-4 py-8 lg:px-6">
      <div className="flex justify-evenly items-center max-w-full">
        <div className="flex flex-col justify-center items-start h-40 w-80">
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Years of Experience</span>
        </div>
        <div className="flex flex-col justify-center items-start h-40 w-80">
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Projects Completed</span>
        </div>
        <div className="flex flex-col justify-center items-start h-40 w-80">
          <h6 className="text-2xl font-semibold">00+</h6>
          <span className="text-xs mt-2">Companies Worked</span>
        </div>
      </div>
    </section>
  );
}

export default Experience;
