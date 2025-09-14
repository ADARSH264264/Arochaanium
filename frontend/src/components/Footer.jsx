import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaChevronRight, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const quickLinks = [
    "Home", "About Us", "Services", "Projects", 
    "Case Study", "Blog", "Contact Us", "Our Condition"
  ];

  const siteMap = [
    "Our Story", "Testimonial", "Blog", "Contact Us", 
    "Our Condition", "404 Page", "Our Team", "Privacy Policy"
  ];

  const latestNews = [
    {
      title: "New Industrial Complex Completion",
      date: "9 JAN 2025",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=80&h=60&fit=crop"
    },
    {
      title: "Sustainable Construction Methods",
      date: "10 JAN 2025",
      image: "https://images.unsplash.com/photo-1504457046788-2509ec68b31d?w=80&h=60&fit=crop"
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-yellow-600"></div>
      <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-yellow-400 opacity-5"></div>
      <div className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-yellow-400 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company Info & Subscribe */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Subscribe Us
            </h3>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-sm mb-6 leading-relaxed">
              Stay updated with our latest projects and industry insights. 
              Subscribe to our newsletter for exclusive content and updates.
            </p>
            
            <form onSubmit={handleSubscribe} className="mb-4">
              <div className="flex items-center border border-gray-700 rounded-lg overflow-hidden bg-gray-800 focus-within:border-yellow-500 transition-colors duration-300">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-transparent outline-none text-white placeholder-gray-400"
                  required
                />
                <motion.button 
                  type="submit"
                  className="bg-yellow-500 px-4 py-3 flex items-center justify-center hover:bg-yellow-600 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaEnvelope className="text-gray-900" />
                </motion.button>
              </div>
            </form>

            <motion.button 
              className="w-full bg-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center gap-2"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubscribe}
            >
              {subscribed ? "THANK YOU!" : "SUBSCRIBE NOW"}
              <FaChevronRight className="text-sm" />
            </motion.button>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="text-white text-sm font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                {[
                  { icon: <FaFacebookF />, color: "hover:text-blue-500" },
                  { icon: <FaTwitter />, color: "hover:text-blue-400" },
                  { icon: <FaLinkedinIn />, color: "hover:text-blue-600" },
                  { icon: <FaInstagram />, color: "hover:text-pink-500" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className={`w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 transition-colors duration-300 ${social.color}`}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Quick Links
            </h3>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <motion.li 
                  key={i}
                  className="hover:text-yellow-500 cursor-pointer transition-colors duration-200 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <FaChevronRight className="text-yellow-500 text-xs mr-3" />
                  <span className="text-sm">{link}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Site Map */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Site Map
            </h3>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <ul className="space-y-3">
              {siteMap.map((link, i) => (
                <motion.li 
                  key={i}
                  className="hover:text-yellow-500 cursor-pointer transition-colors duration-200 flex items-center"
                  whileHover={{ x: 5 }}
                >
                  <FaChevronRight className="text-yellow-500 text-xs mr-3" />
                  <span className="text-sm">{link}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Latest News */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Latest News
            </h3>
            <div className="w-16 h-1 bg-yellow-500 mb-6"></div>
            <div className="space-y-5">
              {latestNews.map((news, i) => (
                <motion.div 
                  key={i}
                  className="flex space-x-4 group cursor-pointer"
                  whileHover={{ y: -3 }}
                >
                  <div className="w-20 h-16 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-white group-hover:text-yellow-500 transition-colors duration-200 line-clamp-2">
                      {news.title}
                    </p>
                    <span className="text-xs text-yellow-500">{news.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="text-white text-sm font-semibold mb-4">Contact Info</h4>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <FaMapMarkerAlt className="text-yellow-500 mr-3" />
                  <span>123 Construction Ave, San Francisco, CA</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaPhone className="text-yellow-500 mr-3" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center text-sm">
                  <FaClock className="text-yellow-500 mr-3" />
                  <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            Copyright © 2025{" "}
            <span className="text-yellow-500 font-semibold">Davana Construction</span> | All Rights Reserved
          </p>
          <div className="flex flex-wrap gap-6 mt-4 md:mt-0">
            {["COMPANY PROFILE", "TERMS & CONDITION", "REFUND POLICY"].map((item, i) => (
              <motion.a
                key={i}
                href="#"
                className="text-sm text-gray-400 hover:text-yellow-500 transition-colors duration-200"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}