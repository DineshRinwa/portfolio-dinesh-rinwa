import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast, Toaster } from "react-hot-toast";
const serviseId = import.meta.env.VITE_SERVICE_ID;
const templateId = import.meta.env.VITE_TEMPLATE_ID;

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle Change Function
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        `service_${serviseId}`, // Servise ID
        `template_${templateId}`, // Template Id
        formData,
        "56bkbBckNEzKssuHW" // Public Id
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          // alert("Message sent successfully!");
          toast.success("Message sent successfully! 🚀", {
            duration: 3000,
            style: {
              background: "#1b263b",
              letterSpacing: "2px",
              color: "#fff"
            },
          });

          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          toast.error("Failed to send message. Please try again.", {
            duration: 3000,
            style: {
              background: "#1b263b",
              letterSpacing: "2px",
              color: "#fff"
            },
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="m-auto p-2 max-w-6xl w-full sm:w-9/10 lg:w-4/5 my-12 h-auto mb-50"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <h1 className="heading text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-tight sm:leading-tight tracking-wider mt-6 lg:mt-16 mb-16">
        <span className="text-red-600">Feel Free</span> To Contact Me
      </h1>

      {/* Contact Info */}
      <div className="flex flex-col items-start m-auto my-8 md:w-4/5 lg:w-3/5">
        <p className="tracking-wider">
          <i className="fa-solid fa-phone px-4"></i> 9462850284
        </p>
        <p className="tracking-wider">
          <i className="fa-solid fa-envelope px-4"></i> dineshrinwa410@gmail.com
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={sendEmail}
        className="w-[95%] lg:w-[80%] m-auto border-2 p-10 flex flex-col items-center rounded-2xl"
      >
        <div className="text-center">
          <h1 className="text-xl lg:text-3xl font-bold tracking-widest">
            Enter Your Information
          </h1>
          <p className="tracking-widest pt-2 text-sm lg:text-lg">
            Use a permanent address where you can receive mail
          </p>
        </div>

        <div className="mt-20">
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Your Name"
            aria-label="Name"
            className="text-center border-2 p-2 text-lg tracking-wider rounded-lg min-w-[19rem] max-w-[450px]"
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="abcd@gmail.com"
            aria-label="Email"
            className="text-center border-2 p-2 text-lg tracking-wider rounded-lg min-w-[19rem] max-w-[450px] mt-8"
          />
        </div>

        <div>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            cols={35}
            rows={5}
            onInput={(e) => {
              e.target.style.height = "auto"; // Reset height
              e.target.style.height = e.target.scrollHeight + "px"; // Adjust height
            }}
            required
            placeholder="Enter Your Message"
            aria-label="Message"
            className="text-left border-2 p-2 text-lg tracking-wider rounded-lg min-w-[19rem] max-w-[450px] m-8 overflow-hidden resize-none"
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="border-2 rounded-2xl lg:text-xl px-6 py-3 cursor-pointer bg-amber-950 text-amber-50 tracking-wider transition-all duration-300 ease-in-out 
  hover:bg-white hover:text-amber-950 hover:shadow-lg hover:shadow-amber-500/50 lg:w-[200px]"
        >
          Send Message
        </motion.button>
      </form>
    </section>
  );
};
