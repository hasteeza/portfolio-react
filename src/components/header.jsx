import React, { useState, useEffect } from "react";
import { Slack, Sun, Moon } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  const [toggled, setToggled] = useState(false);

  return (
    <label className="relative flex items-center justify-between max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <Link to="/" className="cursor-pointer">
        <Slack
          size={40}
          color="white"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-offset="200"
          data-aos-duration="1000"
        />
      </Link>
      <input type="checkbox" className="sr-only" checked={toggled} readOnly />
      <div
        className="w-16 h-7 bg-[rgb(37,37,37)] rounded-full flex items-center p-1 transition-colors cursor-pointer"
        onClick={() => setToggled(!toggled)}
        data-aos="fade-down"
        data-aos-easing="ease-in-out"
        data-aos-offset="200"
        data-aos-duration="1500"
      >
        <div
          className={`w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center transform transition-transform duration-300 ${
            toggled ? "translate-x-8" : "translate-x-0"
          }`}
        >
          {toggled ? (
            <Moon size={16} className="text-[rgb(99,102,241)]" />
          ) : (
            <Sun size={16} className="text-[rgb(245,158,11)]" />
          )}
        </div>
      </div>
    </label>
  );
}

export default Header;
