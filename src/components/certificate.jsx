import React, { useEffect } from "react";
import { ChevronRight } from "lucide-react";
import { LuBadgeCheck } from "react-icons/lu";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Certificate = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: false,
      delay: 100,
    });

    window.addEventListener("scroll", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        AOS.refresh();
      });
    };
  }, []);

  const certificates = [
    {
      id: 1,
      image: "images/devfest-badge.png",
      title:
        "DevFest Zampen 2024: Exploring Responsible AI for Ethical and Impactful Solutions",
      issuer: "DevFest Zampen 2024",
      alt: "DevFest Badge",
      issuedDate: "07/03/2022",
    },
    {
      id: 2,
      image: "images/google-badge.png",
      title:
        "Google I/O Extended Zamboanga Peninsula 2024: A Local Celebration of Tech Innovation",
      issuer: "Google I/O Extended Zampen 2024",
      alt: "Google Badge",
      issuedDate: "07/03/2022",
    },
    {
      id: 3,
      image: "images/codeliber-badge.png",
      title: "Learn HTML",
      issuer: "Codeliber",
      alt: "Codeliber Badge",
      issuedDate: "07/03/2022",
    },
  ];

  return (
    <>
      <section
        className="max-w-4xl mx-auto px-4 py-8 border-y border-[rgb(33,33,33)] rounded-sm my-6 sm:flex-col"
        data-aos="fade-in"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="flex items-center justify-between mb-6">
          <div
            className="flex items-center gap-2"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <LuBadgeCheck className="text-white" size={24} />
            <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
              Certificates
            </h1>
          </div>
          <Link
            to="/certificationpage"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="flex items-center text-sm font-bold gap-1 px-3 py-1.5 rounded-full bg-[rgb(25,25,25)] hover:bg-[rgb(35,35,35)] transition-colors duration-300"
          >
            <span className="font-bold font-geist">View all</span>
            <ChevronRight size={15} className="font-bold" />
          </Link>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 gap-6 font-geist">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 200}
              className="flex flex-col justify-center items-center gap-3 p-6 cursor-pointer bg-[rgb(17,17,17)] rounded-lg border border-[rgb(33,33,33)] hover:border-[rgb(50,50,50)] transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)]"
            >
              <div className="w-40 h-40 flex items-center justify-center bg-[rgb(25,25,25)] rounded-lg overflow-hidden p-2">
                <img
                  className="object-contain w-full h-full transition-transform duration-500 hover:scale-105"
                  src={certificate.image}
                  alt={certificate.alt}
                />
              </div>
              <div className="w-full group relative">
                <h6 className="text-center text-white mt-3 truncate w-full">
                  {certificate.title}
                </h6>
                {certificate.title.length > 30 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 right-0 text-white bg-[rgb(33,33,33)] p-2 rounded z-10 text-center transform -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-in-out shadow-lg">
                    {certificate.title}
                  </div>
                )}
              </div>
              <div className="w-full group relative">
                <p className="text-gray-400 text-center truncate w-full">
                  {certificate.issuer}
                </p>
                {certificate.issuer.length > 20 && (
                  <div className="opacity-0 invisible group-hover:opacity-100 group-hover:visible absolute left-0 right-0 text-gray-300 bg-[rgb(33,33,33)] p-2 rounded z-10 text-center transform -translate-y-1 group-hover:translate-y-0 transition-all duration-300 ease-in-out shadow-lg">
                    {certificate.issuer}
                  </div>
                )}
              </div>
              <span className="text-sm text-center text-gray-500">
                Issued {certificate.issuedDate}
              </span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Certificate;
