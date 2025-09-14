import React, { useState, useRef, useEffect } from "react";
import { FaIndustry, FaFireExtinguisher, FaFlask, FaCogs, FaTools, FaHeadset, FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";

const services = [
  {
    icon: <FaIndustry className="text-yellow-500" />,
    title: "Petroleum & Mining",
    description: "Comprehensive solutions for petroleum extraction and mining operations with state-of-the-art technology and safety protocols.",
    features: ["Exploration", "Extraction", "Refinement", "Distribution"]
  },
  {
    icon: <FaFireExtinguisher className="text-yellow-500" />,
    title: "Fuel Controlling",
    description: "Advanced fuel management systems to optimize consumption, reduce waste, and ensure regulatory compliance.",
    features: ["Monitoring", "Optimization", "Reporting", "Compliance"]
  },
  {
    icon: <FaFlask className="text-yellow-500" />,
    title: "Liquid Chemicals",
    description: "Specialized handling and processing of liquid chemicals with strict safety and environmental standards.",
    features: ["Storage", "Transport", "Processing", "Safety"]
  },
  {
    icon: <FaCogs className="text-yellow-500" />,
    title: "Monomer & Polymer",
    description: "Production and customization of monomers and polymers for various industrial applications.",
    features: ["Synthesis", "Polymerization", "Customization", "Testing"]
  },
  {
    icon: <FaTools className="text-yellow-500" />,
    title: "Repairs & Maintenance",
    description: "Comprehensive maintenance and repair services to keep your operations running smoothly and efficiently.",
    features: ["Preventive", "Corrective", "Predictive", "Emergency"]
  },
  {
    icon: <FaHeadset className="text-yellow-500" />,
    title: "24/7 Support",
    description: "Round-the-clock technical support and consultation to address your needs anytime, anywhere.",
    features: ["Technical", "Consultation", "Emergency", "Remote"]
  },
];

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

const headerVariants = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-72 bg-yellow-500 opacity-5"></div>
      <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-yellow-400 opacity-10"></div>
      <div className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-yellow-400 opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.span 
            className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-2 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            What We Offer
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Our <span className="text-yellow-500 relative">Services
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 0.5 }}
            /></span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 text-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            We provide comprehensive industrial solutions with cutting-edge technology, 
            expert knowledge, and unwavering commitment to safety and sustainability.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="p-6 flex flex-col h-full">
                {/* Icon with animated background */}
                <motion.div 
                  className="w-16 h-16 flex items-center justify-center rounded-xl mb-6 relative overflow-hidden"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-yellow-100 rounded-xl transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                  <div className="text-2xl relative z-10">
                    {service.icon}
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="mb-6">
                  {service.features.map((feature, i) => (
                    <motion.li 
                      key={i}
                      className="flex items-center text-sm text-gray-500 mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + (i * 0.1) }}
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Read More Button */}
                <motion.a
                  href="#"
                  className="inline-flex items-center text-yellow-600 font-semibold mt-auto group/btn"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <FaArrowRight className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? We offer custom solutions tailored to your specific needs.
          </p>
          <motion.button
            className="px-8 py-3 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600 transition-colors duration-300 relative overflow-hidden group"
            whileHover={{ y: -3, boxShadow: "0 10px 25px rgba(234, 179, 8, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Request Custom Solution</span>
            <motion.div 
              className="absolute inset-0 bg-yellow-600 z-0"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}