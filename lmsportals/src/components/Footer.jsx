import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <p className="text-gray-400 mb-2">Learn Management System is dedicated to providing top-notch educational resources.</p>
          <p className="text-gray-400">Follow us on:</p>
          <div className="flex space-x-4 mt-2">
            <NavLink to="#" className="hover:text-blue-500">Facebook</NavLink>
            <NavLink to="#" className="hover:text-blue-500">LinkedIn</NavLink>
            <NavLink to="#" className="hover:text-blue-500">Instagram</NavLink>
          </div>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Resources</h3>
          <ul className="text-gray-400">
            <li><NavLink to="/courses" className="hover:underline">Courses</NavLink></li>
            <li><NavLink to="/webinars" className="hover:underline">Webinars</NavLink></li>
            <li><NavLink to="/blogs" className="hover:underline">Blogs</NavLink></li>
            <li><NavLink to="/support" className="hover:underline">Support Center</NavLink></li>
            <li><NavLink to="/faqs" className="hover:underline">FAQs</NavLink></li>
          </ul>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">What Our Students Say</h3>
          <blockquote className="text-gray-400 italic mb-4">
            "This platform transformed my learning experience! Highly recommend!"
          </blockquote>
          <blockquote className="text-gray-400 italic">
            "The courses are well-structured and easy to follow. I'm loving it!"
          </blockquote>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold mb-2">Subscribe to Our Newsletter</h3>
        <div className="flex flex-row gap-2 md:flex-col justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email"
            className=" p-2 mb-2 md:mb-0 md:mr-2 w-[70%] rounded-lg border border-gray-300"
          />
          <button className="relative top-[-5px] bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
            Subscribe
          </button>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2024 LMS Portal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
