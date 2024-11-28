import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs
      .send(
        "service_iz6gkgh", 
        "template_9ql8qnc", 
        formData,
        "Bu1NUTSa5TckLAXw3" 
      )
      .then(
        (response) => {
          console.log("Email sent successfully", response);
          setSuccessMessage("Email sent successfully!");
          setErrorMessage("");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send email", error);
          setErrorMessage("Failed to send email. Please try again.");
          setSuccessMessage("");
        }
      );
  };

  return (
    <div className= "flex items-center justify-center min-h-screen">
      <div className="w-full p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 w-full max-w-3xl mx-auto rounded-lg p-8 shadow-lg border border-gray-700 relative"
        >
          <h2 className="text-2xl text-fuchsia-300 font-semibold mb-4 ">Contact Us</h2>

          {/* Success/Error Messages */}
          {successMessage && (
            <div className="mb-4 p-4 bg-green-500 text-white rounded-md">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="mb-4 p-4 bg-red-500 text-white rounded-md">
              {errorMessage}
            </div>
          )}

          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          {/* Message Input */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-400 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-gray-900 text-white outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white font-semibold rounded-md hover:opacity-90 focus:ring-4 focus:ring-blue-300 transition-all"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
