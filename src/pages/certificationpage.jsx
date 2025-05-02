import { Link } from "react-router-dom";
import { LuBadgeCheck } from "react-icons/lu";
import ShinyText from "../components/shinytext";
import Footer from "../components/footer";

const CertificationPage = () => {
  // Certificate data array
  const certificates = [
    {
      id: 1,
      image: "images/cert-devfest.png",
      alt: "Devfest-Certification",
    },
    {
      id: 2,
      image: "images/cert-google.png",
      alt: "Google-Extended-Certification",
    },
    {
      id: 3,
      image: "images/cert-codeliber.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 4,
      image: "images/adv-html-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 5,
      image: "images/intro-css.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 6,
      image: "images/intro-figma.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 7,
      image: "images/intro-html.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 8,
      image: "images/intro-uiux.png",
      alt: "Codeliber-Certification",
    },
    // You can easily add more certificates here
  ];

  return (
    <>
      <header className="max-w-4xl mx-auto px-4 py-8 lg:px-6">
        <Link to="/app">
          <ShinyText text="← Back to Home" />
        </Link>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-8 lg:px-6">
        <div className="flex items-center gap-2 mb-6">
          <LuBadgeCheck className="text-white" size={24} />
          <h1 className="text-xl font-semibold tracking-wider uppercase font-russo">
            Certificates
          </h1>
        </div>

        <p className="font-geist text-left text-base m-4">
          Here are some of my certificates in web development, programming, and
          tech events. Each one showcases my dedication to continuous learning
          and professional growth!
        </p>

        <section className="grid grid-cols-2 gap-8">
          {certificates.map((certificate) => (
            <figure key={certificate.id} className="flex justify-center">
              <img
                src={certificate.image || "/placeholder.svg"}
                alt={certificate.alt}
                className="w-full max-w-2xl sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg border border-[rgb(33,33,33)]"
              />
            </figure>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default CertificationPage;
