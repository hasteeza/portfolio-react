import React from "react";
import { MapPin, SquareUserRound } from "lucide-react";
import { FaBriefcase, FaLaptop } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
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
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 py-8 lg:px-6 overflow-hidden"
    >
      <div className="flex items-center gap-8 sm:flex-col-reverse">
        <div className="flex-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-1 font-inter uppercase"
          >
            TERENCE DAVE NATAD
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className="flex items-center gap-1 mb-8"
          >
            <MapPin size={15} color="white" />
            <span className="text-sm font-medium font-geist">
              Zamboanga City, Philippines
            </span>
          </motion.div>

          <motion.h6
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.4,
            }}
            viewport={{ once: true }}
            className="text-xl font-bold flex items-center gap-2 uppercase font-inter"
          >
            <FaUserCircle />
            About
          </motion.h6>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className="mt-2 text-sm font-medium leading-6 font-geist"
          >
            I'm a front-end developer and UI/UX designer specializing in
            creating dynamic, user-friendly web applications with React.js and
            Figma. I have a strong passion for design and a thorough
            understanding of front-end development, resulting in seamless user
            experiences and modern, responsive interfaces.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.7,
            }}
            viewport={{ once: true }}
            className="mt-4 text-sm font-medium leading-6 font-geist"
          >
            Recently, I've been working on expanding my understanding of
            React.js and improving my front-end programming skills. I'm also
            always looking into new technologies to broaden my knowledge, remain
            current with industry trends, and create more efficient,
            high-performance web apps.
          </motion.p>
        </div>

        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.6,
          }}
          viewport={{ once: true }}
          fetchpriority="high"
          width={200}
          className="object-cover aspect-3/2 rounded-lg"
          src="/images/me-guitar.webp"
          alt="Terence"
        />
      </div>

      <div className="grid grid-cols-3 items-center mt-10 justify-evenly gap-2 font-geist md:grid-cols-1 md:gap-4">
        {[
          {
            icon: <FaBriefcase />,
            title: "Career Goals",
            content: (
              <>
                As a passionate frontend developer and UI/UX designer, I aim to
                master my tech stack, gain experience through freelancing, and
                build a strong portfolio.
                <br />
                <br />
                I'm committed to learning new technologies, growing with
                industry professionals, and securing a role at a reputable
                company. My long-term goal is to work remotely for an
                international company while achieving success for myself and my
                family.
              </>
            ),
            delay: 0.8,
          },
          {
            icon: <FaLaptop />,
            title: "Personal Touch",
            content: (
              <>
                When I'm not coding, I enjoy watching movies, playing games, and
                learning new songs on my guitar. I love the shades of blue, have
                a major sweet tooth, and enjoy watching web development and
                UI/UX content on TikTok.
                <br />
                <br />
                I'm also into running, collecting geek figures, and listening to
                '70s to '90s rock and classic old songs. Lately, I've been
                exploring new hobbies like hiking and fishing to unwind.
              </>
            ),
            delay: 0.9,
          },
          {
            icon: <IoIosSend />,
            title: "Call to Action",
            content: (
              <div className="flex flex-col items-center gap-2 font-geist w-full">
                <a
                  className="border w-full bg-black border-[rgb(33,33,33)] rounded-md px-4 py-2 mt-4 hover:bg-slate-900 duration-100"
                  href="mailto:natadterencedave@gmail.com"
                >
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm font-medium">
                    natadterencedave@gmail.com
                  </p>
                </a>
                <a
                  className="border w-full bg-black border-[rgb(33,33,33)] rounded-md px-4 py-2 hover:bg-slate-900 duration-100"
                  target="_blank"
                  href="https://calendly.com/natadterencedave"
                >
                  <div className="flex items-center justify-between font-medium text-sm">
                    <span>Schedule a Call</span>
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

                <h6 className="block my-4 text-base font-semibold font-inter">
                  Social Links
                </h6>
                <div className="flex justify-evenly items-center font-geist w-full">
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
                    {
                      href: "https://github.com/hasteeza",
                      icon: <IoLogoGithub />,
                    },
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
            ),
            delay: 1.0,
          },
        ].map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: section.delay,
            }}
            viewport={{ once: true }}
            className="border h-full bg-[rgb(17,17,17)] border-[rgb(33,33,33)] rounded-md p-4"
          >
            <h6 className="flex items-center gap-2 text-base font-semibold font-inter">
              {section.icon}
              {section.title}
            </h6>
            <p className="leading-relaxed font-medium text-sm mt-2 font-geist">
              {section.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default About;
