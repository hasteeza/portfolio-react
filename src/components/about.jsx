import React from "react";
import { MapPin, SquareUserRound } from "lucide-react";
import { FaBriefcase, FaLaptop } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import {
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoFacebook,
} from "react-icons/io5";
import { TiArrowRight } from "react-icons/ti";
import { FiDownload } from "react-icons/fi";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 lg:px-6 font-geist">
      <div className="flex items-center gap-8 sm:flex-col-reverse">
        <div>
          <h1
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
            className="text-2xl font-bold mb-1"
          >
            TERENCE DAVE NATAD
          </h1>
          <div
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="250"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            className="flex items-center gap-1 mb-8"
          >
            <MapPin size={15} color="white" />
            <span className="text-sm font-medium">
              Zamboanga City, Philippines
            </span>
          </div>
          <h6
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-offset="0"
            data-aos-easing="ease-out-cubic"
            className="text-xl font-bold flex items-center gap-2"
          >
            <SquareUserRound size={20} />
            About
          </h6>
          <p
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            className="mt-2 text-base font-medium leading-6"
          >
            I'm a front-end developer and UI/UX designer specializing in
            creating dynamic, user-friendly web applications with React.js and
            Figma. I have a strong passion for design and a thorough
            understanding of front-end development, resulting in seamless user
            experiences and modern, responsive interfaces.
          </p>
          <br />
          <p
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            className="text-base font-medium leading-6"
          >
            My skills include creating interactive UI components, improving
            performance, and adopting best practices in web design and
            development. I am enthusiastic about developing visually appealing
            and highly useful digital solutions that increase user engagement.
          </p>
          <br />
          <p
            data-aos="fade"
            data-aos-duration="1000"
            data-aos-delay="600"
            data-aos-offset="100"
            data-aos-easing="ease-out-cubic"
            className="text-base font-medium leading-6"
          >
            Recently, I've been working on expanding my understanding of
            React.js and improving my front-end programming skills. I'm also
            always looking into new technologies to broaden my knowledge, remain
            current with industry trends, and create more efficient,
            high-performance web apps.
          </p>
        </div>
        <img
          fetchPriority="high"
          width={200}
          data-aos="fade-zoom-in"
          data-aos-duration="1500"
          data-aos-delay="500"
          data-aos-offset="0"
          data-aos-easing="ease-out-cubic"
          className="object-cover aspect-3/2 rounded-lg"
          src="/images/profile-w.jpg"
          alt="Terence"
        />
      </div>
      <div className="grid grid-cols-3 items-center mt-10 justify-evenly gap-2 font-geist md:grid-cols-1">
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
          className="border h-full bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4 "
        >
          <h6 className="flex items-center gap-2 text-base font-semibold">
            <FaBriefcase />
            Career Goals
          </h6>
          <p className="leading-relaxed font-medium text-sm mt-2">
            As a passionate frontend developer and UI/UX designer, I aim to
            master my tech stack, gain experience through freelancing, and build
            a strong portfolio.
            <br />
            <br />
            I'm committed to learning new technologies, growing with industry
            professionals, and securing a role at a reputable company. My
            long-term goal is to work remotely for an international company
            while achieving success for myself and my family.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
          className="border h-full bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4"
        >
          <h6 className="flex items-center gap-2 text-base font-semibold">
            <FaLaptop />
            Personal Touch
          </h6>
          <p className="leading-relaxed font-medium text-sm mt-2">
            When I’m not coding, I enjoy watching movies, playing games, and
            learning new songs on my guitar. I love the shades of blue, have a
            major sweet tooth, and enjoy watching web development and UI/UX
            content on TikTok.
            <br />
            <br />
            I'm also into running, collecting geek figures, and listening to
            ’70s to ’90s rock and classic old songs. Lately, I’ve been exploring
            new hobbies like hiking and fishing to unwind.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
          className="border h-full bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4"
        >
          <h6 className="flex items-center gap-2 text-base font-semibold">
            <IoIosSend />
            Call to Action
          </h6>
          <div className="flex flex-col items-center gap-2 ">
            <a
              className="border w-full bg-black border-[rgb(33,33,33)] rounded-md px-4 py-2 mt-4 hover:bg-slate-900 duration-100"
              href="mailto:natadterencedave@gmail.com"
            >
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm font-medium">natadterencedave@gmail.com</p>
            </a>
            <a
              className="border w-full bg-black border-[rgb(33,33,33)] rounded-md px-4 py-2 hover:bg-slate-900 duration-100"
              target="_blank"
              href="https://calendly.com/natadterencedave"
            >
              <div className="flex items-center justify-between  font-medium text-sm">
                <span> Scheduled a Call</span>
                <TiArrowRight />
              </div>
            </a>
            <a
              className="border w-full bg-black border-[rgb(33,33,33)] rounded-md px-4 py-2 hover:bg-slate-900 duration-100"
              target="_blank"
              href="https://calendly.com/natadterencedave"
            >
              <div className="flex items-center justify-between font-medium text-sm">
                <span>Download CV</span>
                <FiDownload />
              </div>
            </a>
          </div>
          <h6 className="block my-4 text-base font-semibold">Social Links</h6>
          <div className="flex justify-evenly items-center">
            {[
              {
                href: "https://www.facebook.com/terence.terence.75457081",
                icon: <IoLogoFacebook />,
              },
              {
                href: "https://www.instagram.com/davepisces_?igsh=MWVwZzBvYzFuc2o0cg==",
                icon: <IoLogoInstagram />,
              },
              {
                href: "https://www.linkedin.com/in/terence-dave-natad-a03a7b2a9/",
                icon: <IoLogoLinkedin />,
              },
              { href: "https://github.com/hasteeza", icon: <IoLogoGithub /> },
            ].map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border bg-black border-[rgb(33,33,33)] p-4 rounded-xl text-xl"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
