"use client";

import { useEffect } from "react";
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
      issuedDate: "05/26/2023",
    },
    {
      id: 2,
      image: "images/google-badge.png",
      title:
        "Google I/O Extended Zamboanga Peninsula 2024: A Local Celebration of Tech Innovation",
      issuer: "Google I/O Extended Zampen 2024",
      alt: "Google Badge",
      issuedDate: "11/24/2024",
    },
    {
      id: 3,
      image: "images/codeliber-badge.png",
      title: "Learn HTML",
      issuer: "Codeliber",
      alt: "Codeliber Badge",
      issuedDate: "09/10/2023",
    },
    {
      id: 4,
      image: "images/LinkedInBadge.png",
      title: "Advance your skills in HTML",
      issuer: "LinkedIn",
      alt: "Codeliber Badge",
      issuedDate: "05/01/2025",
    },
    {
      id: 5,
      image: "images/SimplilearnBadge.png",
      title: "Introduction to CSS",
      issuer: "Simplilearn",
      alt: "Codeliber Badge",
      issuedDate: "04/03/2025",
    },
    {
      id: 6,
      image: "images/SimplilearnBadge.png",
      title: "Introduction to Figma",
      issuer: "LinkedIn",
      alt: "Codeliber Badge",
      issuedDate: "04/24/2025",
    },
    {
      id: 7,
      image: "images/SimplilearnBadge.png",
      title: "Introduction to HTML",
      issuer: "LinkedIn",
      alt: "Codeliber Badge",
      issuedDate: "04/01/2025",
    },
    {
      id: 8,
      image: "images/SimplilearnBadge.png",
      title: "Introduction to Graphic Design; Basics of UI/UX",
      issuer: "LinkedIn",
      alt: "Codeliber Badge",
      issuedDate: "04/08/2025",
    },
    {
      id: 8,
      image: "images/freecodecampbadge.png",
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      alt: "FreeCodeCamp Badge",
      issuedDate: "05/04/2025",
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

        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8 font-geist">
          {certificates.map((certificate, index) => (
            <div
              key={certificate.id}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 200}
              className="flex flex-col items-center"
            >
              {/* Badge Image */}
              <div className="w-32 h-32 mb-4 flex items-center justify-center">
                <img
                  className="object-contain w-full h-full"
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.alt}
                />
              </div>

              {/* Title */}
              <div className="w-full mb-1">
                <h6 className="text-center text-white text-sm font-medium truncate">
                  {certificate.title}
                </h6>
                {certificate.title.length > 30 && (
                  <div className="opacity-0 invisible hover:opacity-100 hover:visible absolute left-0 right-0 text-white bg-[rgb(33,33,33)] p-2 rounded z-10 text-center transform -translate-y-1 hover:translate-y-0 transition-all duration-300 ease-in-out shadow-lg">
                    {certificate.title}
                  </div>
                )}
              </div>

              {/* Issuer */}
              <div className="w-full mb-1">
                <p className="text-gray-400 text-center text-sm">
                  {certificate.issuer}
                </p>
              </div>

              {/* Issue Date */}
              <span className="text-xs text-center text-gray-500">
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
