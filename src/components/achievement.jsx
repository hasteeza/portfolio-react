import React, { useState, useEffect } from "react";
import { BadgeCheck, ChevronRight, Captions } from "lucide-react";
import { Link } from "react-router-dom";

const Achievement = () => {
  const slides = [
    {
      text: "I was truly impressed by the quality of work delivered by [Your Name]. They have an incredible eye for detail and a deep understanding of modern front-end technologies. Our startup's website needed a fresh, modern design, and they delivered exactly what we envisioned—clean, responsive, and lightning-fast. Their expertise in React and Tailwind CSS is evident in every aspect of the project.",
      name: "Emily Carter",
      title: "Startup Founder",
    },
    {
      text: "An exceptional front-end developer with a passion for delivering high-quality code. [Your Name] was instrumental in revamping our platform, ensuring smooth animations, responsiveness, and optimal performance. Their ability to troubleshoot and optimize even the smallest details is what sets them apart from the rest. Highly recommend their services!",
      name: "Michael Lee",
      title: "Tech Lead",
    },
    {
      text: "If you're looking for a front-end developer who can bring your vision to life with precision and creativity, look no further than [Your Name]. They have a deep understanding of modern web technologies, and their problem-solving skills are exceptional. Our landing page now loads faster and looks more engaging than ever!",
      name: "Rachel Wilson",
      title: "Marketing Director",
    },
    {
      text: "We needed a front-end developer who could handle both the design and technical aspects of our project, and [Your Name] delivered beyond expectations. Their knowledge of responsive design principles, accessibility, and modern frameworks helped us create an outstanding user experience. Their work speaks for itself!",
      name: "Sophia Green",
      title: "UX/UI Consultant",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        setFade(false);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="flex w-full gap-2 items-center max-w-4xl mx-auto px-4 py-8 border-y border-[rgb(33,33,33)] rounded-sm my-6 sm:flex-col">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="border bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4 w-full font-geist min-h-80"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BadgeCheck size={15} />
              <h6 className="text-lg font-bold">Certifications</h6>
            </div>
            <Link to="/certificationpage" className="flex items-center gap-1">
              <span className="text-xs font-medium">View all</span>
              <ChevronRight size={10} className="font-bold" />
            </Link>
          </div>
          <div className="space-y-2 mt-4">
            <a
              href="https://codeliber.com/certificates/lxksc96ahz811?fbclid=IwY2xjawIk_-lleHRuA2FlbQIxMAABHTIaKC9a5XJaLt8GmsV-mpi-mix6Ko3aA4ezTqllApGmPchrmE_iKHcuUg_aem_-W8bgArG0JJ6nSVhYPhhIw"
              target="_blank"
              className="p-2 bg-black rounded-md border-none block hover:bg-slate-900 transition duration-100"
            >
              <h4 className="text-sm font-bold">Html Course</h4>
              <p className="text-xs">Codeliber</p>
            </a>
            <a
              href="/pdf/google.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black rounded-md border-none block hover:bg-slate-900 duration-100"
            >
              <h4 className="text-sm font-bold">Google I/O Extended</h4>
              <p className="text-xs">Google</p>
            </a>
            <a
              href="/pdf/devfest.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black rounded-md border-none block hover:bg-slate-900 duration-100"
            >
              <h4 className="text-sm font-bold">DevFest Zampen</h4>
              <p className="text-xs">Google</p>
            </a>
            <a
              href="/pdf/smd.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-black rounded-md border-none block hover:bg-slate-900 duration-100"
            >
              <h4 className="text-sm font-bold">Social Media Management</h4>
              <p className="text-xs">Kurso Ph</p>
            </a>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-delay="200"
          className="border bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4 w-full min-h-80"
        >
          <div className="flex items-center gap-2 font-geist">
            <Captions size={15} />
            <h6 className="text-lg font-bold">Recommendations</h6>
          </div>
          <div className="w-full max-w-md rounded-lg overflow-hidden relative p-4">
            <div
              className={`transition-opacity duration-500 h-48 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              <p className="font-serif leading-relaxed text-[13px] line-clamp-5">
                {slides[currentIndex].text}
              </p>
              <div className="mt-4 pt-4 border-t border-[rgb(33,33,33)] font-geist">
                <p className="text-xs font-semibold">
                  {slides[currentIndex].name}
                </p>
                <p className="text-xs">{slides[currentIndex].title}</p>
              </div>
            </div>
          </div>
          <div className="flex mt-4 space-x-2 items-end">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "bg-[rgb(207,207,207)]"
                    : "bg-[rgb(65,65,65)]"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
