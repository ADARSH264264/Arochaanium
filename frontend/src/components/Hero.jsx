import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Custom arrows with enhanced animation
function PrevArrow({ onClick, isVisible, currentIndex, totalSlides }) {
  return (
    <motion.button
      className={`absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 backdrop-blur-sm ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
      initial={{ x: -20, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : -20, 
        opacity: isVisible ? 1 : 0,
        transition: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(255,255,255,1)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Previous slide"
    >
      <ArrowLeft className="text-gray-800" size={20} />
      <span className="sr-only">Previous slide</span>
    </motion.button>
  );
}

function NextArrow({ onClick, isVisible, currentIndex, totalSlides }) {
  return (
    <motion.button
      className={`absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl transition-all duration-300 backdrop-blur-sm ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClick}
      initial={{ x: 20, opacity: 0 }}
      animate={{ 
        x: isVisible ? 0 : 20, 
        opacity: isVisible ? 1 : 0,
        transition: { duration: 0.3 }
      }}
      whileHover={{ 
        scale: 1.1,
        backgroundColor: "rgba(255,255,255,1)",
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      aria-label="Next slide"
    >
      <ArrowRight className="text-gray-800" size={20} />
      <span className="sr-only">Next slide</span>
    </motion.button>
  );
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

  const slides = [
    {
      title: "GROW YOUR IDEA",
      subtitle: "DAVANA REAL ESTATE",
      desc: "Transform your vision into reality with our premium properties and innovative solutions tailored to your needs.",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6d6e7c13",
    },
    {
      title: "BUILD YOUR FUTURE",
      subtitle: "DAVANA REAL ESTATE",
      desc: "We provide the best industrial & construction services with decades of expertise and cutting-edge technology.",
      img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
    },
    {
      title: "LUXURY LIVING SPACES",
      subtitle: "DAVANA REAL ESTATE",
      desc: "Discover exceptional homes designed for modern living, combining elegance, comfort, and sustainability.",
      img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9",
    },
  ];

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

const titleVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9]
    }
  }
};

const buttonVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    y: -5,
    boxShadow: "0 12px 30px rgba(0, 0, 0, 0.25)",
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  }
};

// Progress bar component
const ProgressBar = ({ progress }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-1 bg-white/20 z-30">
      <motion.div 
        className="h-full bg-yellow-400"
        initial={{ width: "0%" }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 5, ease: "linear" }}
      />
    </div>
  );
};

// Autoplay control component
const AutoplayControl = ({ isPlaying, toggleAutoplay }) => {
  return (
    <motion.button
      className="absolute bottom-8 right-8 z-30 bg-black/40 hover:bg-black/60 w-10 h-10 flex items-center justify-center rounded-full backdrop-blur-sm transition-colors duration-300"
      onClick={toggleAutoplay}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
    >
      {isPlaying ? (
        <Pause className="text-white" size={16} />
      ) : (
        <Play className="text-white" size={16} />
      )}
    </motion.button>
  );
};

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const sliderRef = useRef(null);
  
  const settings = {
    dots: true,
    infinite: true,
    autoplay: isPlaying,
    autoplaySpeed: 6000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <PrevArrow isVisible={isHovered} currentIndex={currentSlide} totalSlides={slides.length} />,
    nextArrow: <NextArrow isVisible={isHovered} currentIndex={currentSlide} totalSlides={slides.length} />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        <ul className="flex justify-center gap-3"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <motion.div 
        className={`w-2.5 h-2.5 rounded-full border border-white transition-all duration-300 ${i === currentSlide ? "bg-yellow-400 scale-125 border-yellow-400" : "bg-white/50"}`}
        whileHover={{ scale: 1.2 }}
      ></motion.div>
    ),
  };



  const toggleAutoplay = () => {
    setIsPlaying(!isPlaying);
  };

  // Progress calculation for the progress bar
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    let interval;
    if (isPlaying) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress >= 100) {
            clearInterval(interval);
            return 0;
          }
          return oldProgress + 100 / (settings.autoplaySpeed / 100);
        });
      }, 100);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  return (
    <div 
      className="relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ProgressBar progress={progress} />
      
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            {/* Background with parallax effect */}
            <motion.div
              className="h-screen bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
              initial={{ scale: 1.15 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25"></div>

              {/* Animated pattern overlay */}
              <motion.div 
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
                animate={{
                  backgroundPosition: [0, '40px 40px']
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />

              {/* Content */}
              <motion.div 
                className="relative z-10 max-w-4xl px-8 md:px-16 text-left text-white"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.p 
                  className="text-sm tracking-[0.3em] mb-4 text-yellow-400 font-medium"
                  variants={itemVariants}
                >
                  {slide.subtitle}
                </motion.p>
                <motion.h1 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                  variants={titleVariants}
                >
                  {slide.title}
                </motion.h1>
                <motion.p 
                  className="text-xl mb-10 max-w-2xl leading-relaxed text-gray-100"
                  variants={itemVariants}
                >
                  {slide.desc}
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row gap-5"
                  variants={containerVariants}
                >
                  <motion.button 
                    className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-10 py-5 font-semibold text-lg rounded-sm relative overflow-hidden group"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">OUR PROJECTS</span>
                    <motion.div 
                      className="absolute inset-0 bg-yellow-300 z-0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  <motion.button 
                    className="border-2 border-white hover:bg-white/10 px-10 py-5 font-semibold text-lg rounded-sm relative overflow-hidden group"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">CONTACT US</span>
                    <motion.div 
                      className="absolute inset-0 bg-white z-0"
                      initial={{ x: "-100%", opacity: 0.1 }}
                      whileHover={{ x: 0, opacity: 0.2 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        ))}
      </Slider>
                </div>
  );
}