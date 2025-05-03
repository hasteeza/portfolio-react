import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LuBadgeCheck } from "react-icons/lu";
import ShinyText from "../components/shinytext";
import Footer from "../components/footer";
import ImageModal from "../components/imagemodal";

const CertificationPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", alt: "" });

  // Certificate data array
  const certificates = [
    {
      id: 1,
      src: "images/cert-devfest.png",
      alt: "Devfest-Certification",
    },
    {
      id: 2,
      src: "images/cert-google.png",
      alt: "Google-Extended-Certification",
    },
    {
      id: 3,
      src: "images/cert-codeliber.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 4,
      src: "images/adv-html-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 5,
      src: "images/intro-css.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 6,
      src: "images/intro-figma.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 7,
      src: "images/intro-html.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 8,
      src: "images/intro-uiux.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 9,
      src: "images/ai-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 10,
      src: "images/html-essen-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 11,
      src: "images/intro-career-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 12,
      src: "images/intro-prompt-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 13,
      src: "images/learn-data-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 14,
      src: "images/prog-foundation-cert.png",
      alt: "Codeliber-Certification",
    },
    {
      id: 15,
      src: "images/cyber-cert.png",
      alt: "Codeliber-Certification",
    },

    // You can easily add more certificates here
  ];

  const handleImageClick = (src, alt) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

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

        {/* Grid View */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Grid View</h2>
          <section className="grid grid-cols-2 gap-8">
            {certificates.map((certificate) => (
              <figure
                key={certificate.id}
                className="flex justify-center cursor-pointer"
                onClick={() =>
                  handleImageClick(certificate.src, certificate.alt)
                }
              >
                <img
                  src={certificate.src || "/placeholder.svg"}
                  alt={certificate.alt}
                  className="w-full max-w-2xl sm:max-w-md md:max-w-lg lg:max-w-xl h-auto rounded-lg border border-[rgb(33,33,33)] transition-transform hover:scale-[1.02]"
                />
              </figure>
            ))}
          </section>
        </div>
      </main>

      <ImageModal
        isOpen={modalOpen}
        imageUrl={selectedImage.src}
        altText={selectedImage.alt}
        onClose={() => setModalOpen(false)}
      />

      <Footer />
    </>
  );
};

export default CertificationPage;
