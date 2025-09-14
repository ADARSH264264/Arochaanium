import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Quote, ArrowUp, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      name: "Mark Henry",
      role: "Web Designer",
      img: "https://i.pravatar.cc/150?img=47",
      rating: 5
    },
    {
      text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      name: "Alex Roy",
      role: "Web Developer",
      img: "https://i.pravatar.cc/150?img=12",
      rating: 4
    },
    {
      text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
      name: "Jane Doe",
      role: "CEO & Founder",
      img: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
  ];

  // Auto-rotate testimonials
  React.useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const toggleAutoplay = () => {
    setAutoplay(!autoplay);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Star rating component
  const StarRating = ({ rating }) => {
    return (
      <div className="flex justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center py-16 overflow-hidden">
      {/* Background with parallax effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')",
        }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/90 to-gray-900"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center text-white w-full">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold mb-4">
            Success Makes You Happy
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our Client <span className="text-yellow-400">Say</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We take pride in delivering exceptional results and building lasting relationships with our clients. 
            Here's what they have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 md:p-10 rounded-xl shadow-2xl relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <Quote className="text-white" size={24} />
              </div>

              {/* Rating */}
              <StarRating rating={testimonials[currentIndex].rating} />

              {/* Testimonial text */}
              <p className="text-gray-700 text-lg italic mb-8 relative z-10">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Client info */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-20 h-20 rounded-full border-4 border-white shadow-lg overflow-hidden mb-4"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <img
                    src={testimonials[currentIndex].img}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                <p className="text-yellow-500 font-medium">{testimonials[currentIndex].role}</p>
              </div>

              {/* Arrow indicator */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                w-0 h-0 border-l-[16px] border-r-[16px] border-t-[20px] 
                border-l-transparent border-r-transparent border-t-white"></div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <motion.button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="text-white" size={24} />
            </motion.button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-yellow-400 scale-125' : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white/10 hover:bg-yellow-400 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="text-white" size={24} />
            </motion.button>

      
          </div>
        </div>

        {/* Brand logos or additional content can go here */}
        <motion.div 
          className="mt-16 pt-8 border-t border-gray-700/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Trusted by industry leaders and innovative startups worldwide
          </p>
        </motion.div>
      </div>

      {/* Floating back to top button */}
      <motion.button 
        className="fixed bottom-6 right-6 bg-yellow-400 text-black font-bold rounded-full p-3 shadow-lg hover:bg-yellow-500 transition-colors duration-300 z-30"
        onClick={scrollToTop}
        whileHover={{ y: -5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={24} />
      </motion.button>
    </section>
  );
};

export default TestimonialSection;