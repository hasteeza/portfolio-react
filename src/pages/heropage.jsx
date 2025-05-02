import { useState, useEffect, useCallback } from "react";
import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import ShinyText from "../components/shinytext";
import SplitText from "../components/splitText";
import { motion } from "framer-motion";

const phrases = [
  "Front end developer",
  "UI/UX Designer",
  "Web Enthusiast",
  "Fish Enthusiast",
  "Running Enthusiast",
];

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = loopNum % phrases.length;
      const fullText = phrases[current];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-center items-center relative p-6 overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 75,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "repulse" },
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
          },
          particles: {
            color: {
              value: [
                "#00AFFF",
                "#1E90FF",
                "#00FFFF",
                "#00BFFF",
                "#4169E1",
                "#0047AB",
                "#007FFF",
                "#0073CF",
                "#89CFF0",
                "#B0E0E6",
                "#D0EFFF",
                "#8FAADC",
                "#191970",
                "#000080",
                "#003153",
                "#483D8B",
              ],
            },
            links: {
              color: "#FFD700",
              distance: 120,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "top",
              enable: true,
              outModes: { default: "out" },
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: { density: { enable: true, area: 1000 }, value: 100 },
            opacity: {
              value: 1,
              animation: {
                enable: true,
                speed: 1,
                minimumValue: 0.1,
                sync: false,
              },
            },
            shape: { type: "circle" },
            size: {
              value: { min: 1, max: 3 },
              animation: {
                enable: true,
                speed: 8,
                minimumValue: 1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="w-full">
        <section
          className="text-center relative z-10 flex flex-col items-center justify-center"
          data-aos="fade-in"
          data-aos-duration="1200"
          data-aos-easing="ease-in-out"
        >
          <SplitText
            text="Terence Dave Natad"
            className="text-8xl lg:text-6xl sm:text-2xl font-black text-white uppercase font-bebas"
          />

          <p
            className="text-2xl tracking-widest lg:text-xl md:text-lg sm:text-sm font-medium my-6 text-white font-galaxy"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="500"
            data-aos-easing="ease-in-out"
          >
            I <span className="text-[rgb(0,173,181)]">design</span> and{" "}
            <span className="text-[rgb(245,158,11)]">build</span> things on the
            web
          </p>

          <div className="h-16 flex items-center justify-center">
            <p
              className="text-xl md:text-lg sm:text-base text-white font-medium"
              data-aos="zoom-in"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
            >
              <span className="mr-2">A</span>
              <span className="border-r-2 border-gray-500 pr-1 animate-pulse font-plex">
                {text}
              </span>
            </p>
          </div>

          <Link
            to="/app"
            className="inline-flex justify-center items-center mt-8 px-6 py-3 rounded-lg bg-[rgb(53,53,53)] text-white hover:bg-[rgb(17,17,17)] transition duration-300 ease-in-out"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-easing="ease-in-out"
            data-aos-delay="200"
          >
            <ShinyText text="Explore my work" className="mr-2 font-geist" />
            <motion.div
              animate={{ x: [10, 0, 10] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <CircleChevronRight size={18} />
            </motion.div>
          </Link>
        </section>
      </div>
    </main>
  );
}

export default Hero;
