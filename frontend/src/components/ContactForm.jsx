import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 2000);
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

  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full -translate-y-36 translate-x-36 opacity-5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full translate-y-48 -translate-x-48 opacity-5"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.p 
              className="uppercase tracking-[0.3em] text-yellow-500 text-sm font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay With Us
            </motion.p>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Our Quick Contact <span className="text-yellow-500">Form</span>
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-yellow-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
            ></motion.div>
            <motion.p 
              className="text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
            >
              Have questions or want to discuss a project? Fill out the form below and our team will get back to you shortly.
            </motion.p>
          </motion.div>

          {/* Contact Info Cards */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { icon: <MapPin size={24} />, title: "Our Location", info: "123 Construction Ave, San Francisco, CA 94103" },
              { icon: <Phone size={24} />, title: "Phone Number", info: "+1 (555) 123-4567" },
              { icon: <Mail size={24} />, title: "Email Address", info: "info@davana.com" },
              { icon: <Clock size={24} />, title: "Working Hours", info: "Mon - Fri: 8:00 - 18:00" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-yellow-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.info}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form 
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                  placeholder="Enter your email address"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                  placeholder="Enter your phone number"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                  placeholder="Enter the subject"
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Your Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full p-4 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 bg-gray-50"
                placeholder="Tell us about your project or inquiry..."
              ></textarea>
            </motion.div>

            <motion.div 
              className="flex justify-center md:justify-end"
              variants={itemVariants}
            >
              <motion.button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`px-8 py-4 font-semibold rounded-lg flex items-center gap-2 ${
                  isSubmitting || isSubmitted
                    ? "bg-green-500 text-white"
                    : "bg-yellow-500 hover:bg-yellow-600 text-white"
                } transition-colors duration-300 shadow-md hover:shadow-lg`}
                whileHover={!isSubmitting && !isSubmitted ? { y: -2, boxShadow: "0 6px 12px rgba(234, 179, 8, 0.3)" } : {}}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    SEND MESSAGE
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </section>

      {/* Google Map */}
      <motion.div 
        className="w-full h-[500px] relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.7 }}
        viewport={{ once: true }}
      >
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035714015223!2d-122.44674728468234!3d37.77492927975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b0a7d%3A0x27f6d8cdb36805b3!2sSan%20Francisco%20CA!5e0!3m2!1sen!2sus!4v1632665294797!5m2!1sen!2sus"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
        
        {/* Map overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
      </motion.div>
    </div>
  );
};

export default ContactForm;