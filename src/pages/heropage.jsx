import { useState, useEffect } from "react";
import { CircleChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const phrases = [
  "Front end developer",
  "UI/UX Designer",
  "Web Enthusiast",
  "Fish Enthusiast",
  "Runner",
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

  return (
    <main className="min-h-screen font-geist flex justify-center items-center relative p-6">
      <section className="max-w-3xl text-center relative z-10">
        <h1 className="text-6xl md:text-5xl font-bold mb-4 text-white uppercase">
          Terence Dave Natad
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
          I <span className="text-[rgb(0,173,181)]">design</span> and{" "}
          <span className="text-[rgb(245,158,11)]">build</span> things on the
          web
        </h2>
        <div className="h-20">
          {" "}
          {/* Fixed height container for consistent layout */}
          <p className="text-xl md:text-2xl text-white font-medium">
            <span className="mr-2">A</span>
            <span className="border-r-2 border-gray-500 pr-1 animate-pulse">
              {text}
            </span>
          </p>
        </div>
        <Link
          to="/app"
          className="inline-flex justify-center items-center mt-6 px-6 py-3 rounded-lg bg-[rgb(53,53,53)] text-white hover:bg-[rgb(17,17,17)] transition duration-300 ease-in-out"
        >
          <span className="mr-2 font-geist">Explore my work</span>
          <CircleChevronRight size={20} />
        </Link>
      </section>
    </main>
  );
}

export default Hero;
