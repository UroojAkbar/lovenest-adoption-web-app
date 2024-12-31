import React from "react";
import { useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [feedback, setFeedback] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/message/send-message', formData);
      setFeedback(response.data.message);
      toast.success("Message sent successfully!");
    
      window.location.reload(true); 
    } catch (error) {
      setFeedback('Failed to send message. Please try again later.');
      toast.success("Failed to send message.");
    }
  };


  return (
    <div>
      <div class="bg-white">
        <header class="bg-[#c7a15b] text-white text-center py-12">
          <h1 class="text-4xl font-bold mt-16">Contact Us</h1>
        </header>
        <section class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Get In Touch</h2>
          <p class="mt-4 text-gray-700 max-w-2xl mx-auto">
            We are here to help you. Reach out to us via any of the following
            methods.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
            <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-[#a7c396] transition-colors">
              <h3 class="text-xl font-bold">Call Us</h3>
              <p class="text-gray-700 mt-2">+1 123 456 7890</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-[#a7c396] transition-colors">
              <h3 class="text-xl font-bold">Email Us</h3>
              <p class="text-gray-700 mt-2">contact@lovenestadoption.com</p>
            </div>
            <div class="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-[#a7c396] transition-colors">
              <h3 class="text-xl font-bold">Visit Us</h3>
              <p class="text-gray-700 mt-2">peshawar</p>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 py-12 px-4">
      <h2 className="text-2xl font-bold text-center">Send Us A Message</h2>
      <form className="max-w-2xl mx-auto mt-8 space-y-8" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-bold">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-bold">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-bold">Message</label>
          <textarea
            id="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-[#c7a15b] text-white py-3 rounded-lg shadow-lg hover:bg-[#a7c396] transition-colors"
        >
          Send Message
        </button>
      </form>

      {feedback && <p className="text-center mt-4">{feedback}</p>}
    </section>

        <section class="text-center py-12 px-4">
          <h2 class="text-2xl font-bold">Frequently Asked Questions</h2>
          <div class="mt-8">
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
              <h3 class="text-xl font-bold">
                Can I access resources and information online?
              </h3>
              <p class="mt-2 text-gray-700">
                Absolutely! We offer a range of resources, including guides,
                articles, and FAQs, directly on our website to help you navigate
                the adoption process.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
              <h3 class="text-xl font-bold">
                How can I start the adoption process with LoveNestAdoption?
              </h3>
              <p class="mt-2 text-gray-700">
                You can begin by visiting our website and filling out the
                initial inquiry form, or you can contact our office directly for
                personalized guidance.
              </p>
            </div>
            <div class="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90  mt-4">
              <h3 class="text-xl font-bold">
                Can I donate to LoveNestAdoption?
              </h3>
              <p class="mt-2 text-gray-700">
                Yes, donations are greatly appreciated and help us continue
                providing valuable services to families. You can make a donation
                directly through our website.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;







