import React, { useEffect, useRef, useState } from "react";
import { FaTools, FaLaptopCode } from "react-icons/fa";
import { TbLayoutDashboardFilled } from "react-icons/tb";
import { MdDevices } from "react-icons/md";
import { BsGearWideConnected } from "react-icons/bs";
import { BadgePercent, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const milestones = [
  { title: "Company-Role", company: "Company-Name", year: "2025" },
  {
    title: "BS Information Technology",
    company: "Western Mindanao State University",
    year: "2021",
  },
  {
    title: "Hello World! 👋",
    company: "Wrote my first line of code",
    year: "2021",
  },
  { title: "IT-TVL", company: "AMA College Zamboanga", year: "2020" },
  { title: "IT-TVL", company: "STI College Zamboanga", year: "2019" },
];

export function Experience() {
  const containerRef = useRef(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const container = containerRef.current;
        const contentHeight = container.scrollHeight;
        const maxHeight = 490;

        setLineHeight(contentHeight);
        setIsScrollable(contentHeight > maxHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 20,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="flex w-full gap-4 border-y border-[rgb(33,33,33)] rounded-sm my-6 max-w-4xl mx-auto px-4 py-8 lg:px-6 md:flex-col md:gap-8"
    >
      <section className="w-1/2 md:w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="flex text-xl font-bold capitalize items-center gap-2 mb-6"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-[rgb(25,25,25)] rounded-md">
            <FaTools />
          </div>
          <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
            What I Do?
          </h1>
        </motion.div>

        <div className="text-[13px] font-geist">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:mb-6"
          >
            <FaLaptopCode className="text-9xl" />
            <article>
              <h6 className="mb-2 font-semibold">Front End Development</h6>
              <p className="font-medium leading-relaxed">
                I build high-performance, visually engaging web applications
                using React.js and Tailwind CSS. My expertise ensures clean,
                scalable code, seamless functionality, and dynamic user
                experiences through interactive and responsive interfaces.
              </p>
            </article>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:mb-6"
          >
            <TbLayoutDashboardFilled className="text-9xl" />
            <article>
              <h6 className="mb-2 font-semibold">UI/UX Design</h6>
              <p className="font-medium leading-relaxed">
                I design intuitive, user-centered digital experiences that
                balance aesthetics and functionality. Using Figma and industry
                best practices, I conduct research, wireframing, and prototyping
                to create visually compelling and highly functional interfaces.
              </p>
            </article>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:mb-6"
          >
            <BsGearWideConnected className="text-9xl" />
            <article>
              <h6 className="mb-2 font-semibold">
                SEO (Search Engine Optimization)
              </h6>
              <p className="font-medium leading-relaxed">
                I optimize websites for higher search rankings, better
                visibility, and increased traffic by refining on-page elements,
                improving performance, and ensuring
                mobile-friendliness—enhancing user engagement and conversions.
              </p>
            </article>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
              filter: "blur(10px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="flex items-center gap-4 md:mb-6"
          >
            <MdDevices className="text-9xl" />
            <article>
              <h6 className="mb-2 font-semibold">Responsive Design</h6>
              <p className="font-medium leading-relaxed">
                I craft fully responsive websites that adapt seamlessly across
                all devices. Using flexible layouts, media queries, and adaptive
                design, I ensure a smooth, accessible, and visually consistent
                experience for every user.
              </p>
            </article>
          </motion.div>
        </div>
      </section>

      <section className="w-1/2 md:w-full">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
            filter: "blur(10px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="flex text-xl font-bold capitalize items-center gap-2 mb-6"
        >
          <div className="flex items-center justify-center w-8 h-8 bg-[rgb(25,25,25)] rounded-md">
            <BadgePercent />
          </div>
          <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
            Milestones
          </h1>
        </motion.div>

        <div
          ref={containerRef}
          className={`relative flex flex-col px-8 ${
            isScrollable ? "h-[30.5rem] overflow-y-auto" : "h-auto"
          }`}
        >
          <div
            className="absolute left-[31px] top-5 w-[2px] bg-[rgb(53,53,53)]"
            style={{ height: `${lineHeight - 75}px` }}
          ></div>

          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: -20,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative font-geist flex items-start mb-8"
            >
              <div className="absolute left-[-7px] top-1/2 -translate-y-1/2 w-4 h-4 bg-slate-950 border-2 border-white rounded-full hover:bg-white transition-all duration-300 z-10"></div>

              <div className="ml-6">
                <h3 className="text-sm font-semibold text-white">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 text-xs">{milestone.company}</p>
              </div>

              <time className="ml-auto text-xs font-bold text-gray-400 border border-[rgb(53,53,53)] px-3 py-1 rounded-full">
                {milestone.year}
              </time>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
}

export default Experience;
