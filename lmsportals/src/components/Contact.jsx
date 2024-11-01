import React from 'react';
import Faq from './assets/images/Faq.jpg'
const Contact = () => {
  return (
    <div className="flex flex-row md:flex-col justify-between items-center p-6">
      <div className="w-1/2 md:w-full flex flex-col">
        <h2 className="text-3xl font-bold mb-6 text-black">Contact Us</h2>
        <form className="space-y-4 flex flex-col">
          <input
            type="text"
            placeholder="First Name"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className=" md:hidden w-1/2">
        <img
          src={Faq}
          alt="Contact Us"
          className="w-full h-auto rounded-md shadow-md"
        />
      </div>
    </div>
  );
};

export default Contact;