import React from "react";
import { FaEnvelope, FaChevronRight } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1b1b1b] text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Subscribe Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Subscribe Us
          </h3>
          <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet consectetur eget orci dictum facilisis
            velid Donec seddno.
          </p>
          <div className="flex items-center border border-gray-500">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-3 py-2 text-black outline-none"
            />
            <button className="bg-yellow-500 px-4 flex items-center justify-center">
              <FaEnvelope className="text-black" />
            </button>
          </div>
          <button className="mt-4 bg-yellow-500 text-black font-semibold px-5 py-2 text-sm hover:bg-yellow-400">
            SUBSCRIBE NOW →
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Quick Links
          </h3>
          <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {[
              "Home",
              "About Us",
              "Services",
              "Projects",
              "Case Study",
              "Blog",
              "Contact Us",
              "Our Condition",
            ].map((link, i) => (
              <li key={i} className="hover:text-yellow-500 cursor-pointer">
                <FaChevronRight className="inline mr-2 text-yellow-500" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Site Map */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Site Map</h3>
          <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
          <ul className="space-y-2 text-sm">
            {[
              "Our Story",
              "Testimonial",
              "Blog",
              "Contact Us",
              "Our Condition",
              "404 Page",
              "Our Team",
              "Privacy Policy",
            ].map((link, i) => (
              <li key={i} className="hover:text-yellow-500 cursor-pointer">
                <FaChevronRight className="inline mr-2 text-yellow-500" />
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">
            Latest News
          </h3>
          <div className="w-12 h-1 bg-yellow-500 mb-4"></div>
          <div className="space-y-4">
            {/* News 1 */}
            <div className="flex space-x-3">
              <img
                src="https://via.placeholder.com/80x60"
                alt="news"
                className="w-20 h-14 object-cover"
              />
              <div>
                <p className="text-sm text-white hover:text-yellow-500 cursor-pointer">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
                <span className="text-xs text-yellow-500">9 JAN 2021</span>
              </div>
            </div>

            {/* News 2 */}
            <div className="flex space-x-3">
              <img
                src="https://via.placeholder.com/80x60"
                alt="news"
                className="w-20 h-14 object-cover"
              />
              <div>
                <p className="text-sm text-white hover:text-yellow-500 cursor-pointer">
                  Lorem ipsum dolor sit amet, consectetur.
                </p>
                <span className="text-xs text-yellow-500">10 JAN 2021</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-7xl mx-auto">
        <p>
          Copyright © 2025{" "}
          <span className="text-yellow-500 font-semibold">Davana.</span> | All
          Rights Reserved
        </p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-yellow-500">
            COMPANY PROFILE
          </a>
          <a href="#" className="hover:text-yellow-500">
            TERMS & CONDITION
          </a>
          <a href="#" className="hover:text-yellow-500">
            REFUND POLICY
          </a>
        </div>
      </div>
    </footer>
  );
}
