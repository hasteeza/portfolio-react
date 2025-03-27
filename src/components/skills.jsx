import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoFigma,
  IoLogoGithub,
} from "react-icons/io5";
import { RiTailwindCssLine } from "react-icons/ri";
import { Layers } from "lucide-react";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import { VscVscodeInsiders } from "react-icons/vsc";
import { TbBrandVercel } from "react-icons/tb";
import { motion } from "framer-motion";

const SkillIcon = ({
  icon: Icon,
  name,
  iconSize = "text-xl",
  textSize = "text-sm",
  paddingX = "px-3",
  paddingY = "py-2",
}) => (
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.8,
      filter: "blur(10px)",
    }}
    whileInView={{
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    }}
    transition={{
      duration: 0.6,
      ease: "easeOut",
      delay: Math.random() * 0.4, // Enhanced staggered delay
    }}
    viewport={{ once: true }}
    className={`flex items-center justify-center gap-2 ${paddingX} ${paddingY} 
      bg-[rgb(17,17,17)] text-white rounded-full 
      transition-all duration-500 ease-in-out
      hover:shadow-lg hover:shadow-[rgba(255,255,255,0.1)]`}
    whileHover={{
      scale: 1.05,
      transition: { duration: 0.3 },
    }}
    whileTap={{
      scale: 0.95,
      transition: { duration: 0.2 },
    }}
  >
    <Icon className={`${iconSize} transition-all duration-300`} />
    <span className={`${textSize} transition-all duration-300`}>{name}</span>
  </motion.div>
);

export function Skills() {
  const skills = [
    { icon: IoLogoHtml5, name: "HTML" },
    { icon: IoLogoCss3, name: "CSS" },
    { icon: IoLogoJavascript, name: "JavaScript" },
    { icon: IoLogoReact, name: "React" },
    { icon: RiTailwindCssLine, name: "Tailwind" },
    { icon: IoLogoFigma, name: "Figma" },
    { icon: SiCanva, name: "Canva" },
    { icon: SiAdobephotoshop, name: "Photoshop" },
    { icon: VscVscodeInsiders, name: "VS Code" },
    { icon: IoLogoGithub, name: "GitHub" },
    { icon: TbBrandVercel, name: "Vercel" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 px-4 overflow-hidden">
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
          duration: 0.7,
          ease: "easeOut",
          delay: 0.2,
        }}
        viewport={{ once: true }}
        className="flex text-xl font-bold capitalize items-center gap-2 mb-6"
      >
        <div className="flex items-center justify-center w-8 h-8 bg-[rgb(25,25,25)] rounded-md">
          <Layers size={20} color="white" />
        </div>
        <h2 className="text-xl font-semibold tracking-wider uppercase font-russo">
          Tech Stack
        </h2>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          filter: "blur(10px)",
        }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          delay: 0.4,
        }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-y-2 gap-x-2 justify-left items-center font-geist"
      >
        {skills.map((skill, index) => (
          <SkillIcon key={index} icon={skill.icon} name={skill.name} />
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;
