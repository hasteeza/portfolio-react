"use client";

import { useState, useEffect } from "react";
import { Loader, CheckCircle, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

// Initialize EmailJS once when the component loads
const initEmailJS = () => {
  // This is optional but recommended for better performance
  emailjs.init("zK4kvMm6RtIYgtoxS");
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    success: false,
    error: null,
  });

  // Initialize EmailJS and AOS when component mounts
  useEffect(() => {
    initEmailJS();

    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: "mobile",
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Set submitting state
    setStatus({ ...status, submitting: true });

    try {
      // EmailJS credentials
      const serviceId = "service_wcf8jlm";
      const templateId = "template_9qaka1i";
      const publicKey = "zK4kvMm6RtIYgtoxS";

      // Configure EmailJS with your service ID, template ID, and public key
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_name: "Terence Dave",
        to_email: "natadterencedave@gmail.com",
        message: formData.message,
      };

      // Send the email
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success state
      setStatus({
        submitting: false,
        submitted: true,
        success: true,
        error: null,
      });

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      // Reset status after 5 seconds
      setTimeout(() => {
        setStatus({
          submitting: false,
          submitted: false,
          success: false,
          error: null,
        });
      }, 5000);
    } catch (error) {
      console.error("Error sending email:", error);

      // Error state
      setStatus({
        submitting: false,
        submitted: true,
        success: false,
        error: "Failed to send message. Please try again later.",
      });

      // Reset error status after 5 seconds
      setTimeout(() => {
        setStatus({
          ...status,
          submitted: false,
          error: null,
        });
      }, 5000);
    }
  };

  return (
    <>
      {/* Main Content - Keeping the exact class as specified */}
      <main className="flex-grow max-w-4xl mx-auto px-4 py-8 border-b border-[rgb(33,33,33)] rounded-sm my-6 lg:px-6">
        {/* Contact Us Section */}
        <section
          className="text-center my-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl font-bold font-russo mb-4">Contact Me</h1>
          <p className="text-white font-geist max-w-xl mx-auto">
            Feel free to reach out if you have any questions, project ideas, or
            collaboration opportunities. I'm always open to connecting and
            exploring new challenges.
          </p>
        </section>

        {/* Two Column Section */}
        <section className="flex flex-row lg:flex-col gap-8 mt-12 mb-6 lg:gap-16">
          {/* Left Column - Get In Touch */}
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <h2 className="text-3xl font-bold font-russo mb-4">Get In Touch</h2>
            <p className="text-white font-geist text-sm mb-8">
              Got a question, idea, or just want to say hello? I'm always happy
              to connect. Reach out anytime—let’s build something awesome
              together!
            </p>

            <div className="space-y-6">
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-blur="10"
              >
                <div className="border bg-black border-[rgb(33,33,33)] p-4 rounded-full mr-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg">
                  <FaMapMarkerAlt className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">Zamboanga City, Philippines</p>
                </div>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-blur="10"
              >
                <div className="border bg-black border-[rgb(33,33,33)] p-4 rounded-full mr-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg">
                  <FaPhone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone Number</h3>
                  <p className="text-gray-600">09657364643</p>
                </div>
              </div>

              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-blur="10"
              >
                <div className="border bg-black border-[rgb(33,33,33)] p-4 rounded-full mr-4 transform transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-lg">
                  <FaEnvelope className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">E-Mail</h3>
                  <p className="text-gray-600">natadterencedave@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-10" data-aos="fade-up" data-aos-delay="600">
              <h3 className="font-semibold mb-4">Follow Me:</h3>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="border bg-black border-[rgb(33,33,33)] p-4 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <FaFacebookF className="h-5 w-5 transition-transform group-hover:animate-pulse" />
                </a>
                <a
                  href="#"
                  className="border bg-black border-[rgb(33,33,33)] p-4 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <FaGithub className="h-5 w-5 transition-transform group-hover:animate-pulse" />
                </a>
                <a
                  href="#"
                  className="border bg-black border-[rgb(33,33,33)] p-4 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <FaLinkedinIn className="h-5 w-5 transition-transform group-hover:animate-pulse" />
                </a>
                <a
                  href="#"
                  className="border bg-black border-[rgb(33,33,33)] p-4 rounded-xl text-white transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                >
                  <FaInstagram className="h-5 w-5 transition-transform group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div
            className="rounded-lg shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-blur="5"
          >
            <h2 className="text-2xl font-bold font-russo mb-6">
              Send Me A Message
            </h2>

            {status.submitted && status.success && (
              <div
                className="mb-4 p-3 bg-green-50 border border-green-200 text-green-700 rounded-md flex items-center"
                data-aos="zoom-in"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>
                  Message sent successfully! We'll get back to you soon.
                </span>
              </div>
            )}

            {status.submitted && !status.success && (
              <div
                className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-md flex items-center"
                data-aos="zoom-in"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                <span>
                  {status.error || "Something went wrong. Please try again."}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div data-aos="fade-up" data-aos-delay="400" data-aos-blur="10">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[rgb(17,17,17)]  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300 hover:shadow-md"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="500" data-aos-blur="10">
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[rgb(17,17,17)]  rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300 hover:shadow-md"
                    required
                    disabled={status.submitting}
                  />
                </div>
                <div data-aos="fade-up" data-aos-delay="600" data-aos-blur="10">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border border-[rgb(17,17,17)] rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700 transition-all duration-300 hover:shadow-md"
                    required
                    disabled={status.submitting}
                  ></textarea>
                </div>
                <p
                  className="text-xs text-gray-500"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  By submitting, you agree to the processing of your personal
                  data as described in our Privacy Statement.
                </p>
                <div
                  className="text-center"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <button
                    type="submit"
                    className="bg-[rgb(33,33,33)] w-full text-white px-8 py-3 rounded-full hover:bg-[rgb(17,17,17)] transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center justify-center disabled:bg-orange-300"
                    disabled={status.submitting}
                  >
                    {status.submitting ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
