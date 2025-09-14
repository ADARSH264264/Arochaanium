import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Play, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import image1 from "../assets/features-1.jpg"
const LatestProjects = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  const projects = [
    {
      id: 1,
      title: "Industrial Complex Construction",
      category: "Construction",
      image: image1,
      description: "A state-of-the-art industrial facility with sustainable design features and advanced technology integration."
    },
    {
      id: 2,
      title: "Project Overview Video",
      category: "Showcase",
      image: "https://images.unsplash.com/photo-1504457046788-2509ec68b31d",
      isVideo: true,
      videoId: "dQw4w9WgXcQ", // Example YouTube video ID
      description: "Watch our team in action on our latest construction project with time-lapse footage."
    },
    {
      id: 3,
      title: "Commercial Building Renovation",
      category: "Renovation",
      image: "https://images.unsplash.com/photo-1523289333742-be1143f6b766",
      description: "Complete transformation of a 1980s office building into a modern, energy-efficient workspace."
    },
    {
      id: 4,
      title: "Residential Tower Development",
      category: "Residential",
      image: "https://images.unsplash.com/photo-1628744404730-5e143358539b",
      description: "45-story luxury residential tower with panoramic views and premium amenities."
    },
    {
      id: 5,
      title: "Bridge Infrastructure Project",
      category: "Infrastructure",
      image: "https://images.unsplash.com/photo-1574359173084-bfcee66c2c2a",
      description: "Design and construction of a landmark bridge connecting two major urban areas."
    },
    {
      id: 6,
      title: "Sustainable Energy Facility",
      category: "Energy",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e",
      description: "Green energy production facility utilizing solar and wind power technologies."
    },
    {
      id: 7,
      title: "Hospital Expansion Project",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
      description: "Major expansion of healthcare facilities with focus on patient comfort and advanced medical technology."
    },
    {
      id: 8,
      title: "Urban Redevelopment Initiative",
      category: "Urban Planning",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
      description: "Comprehensive urban renewal project transforming neglected areas into vibrant community spaces."
    }
  ];

  const visibleProjects = projects.slice(currentIndex, currentIndex + 4);

  const nextProject = () => {
    if (currentIndex + 4 < projects.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevProject = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const openProjectDetail = (project) => {
    if (project.isVideo) {
      setVideoPlaying(true);
    } else {
      setActiveProject(project);
    }
  };

  const closeProjectDetail = () => {
    setActiveProject(null);
    setVideoPlaying(false);
  };

  return (
    <section className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-400 rounded-full -translate-y-36 translate-x-36 opacity-5"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-400 rounded-full translate-y-48 -translate-x-48 opacity-5"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="text-yellow-500 font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest <span className="text-yellow-500 relative">Projects
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-yellow-500"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            /></span>
          </h2>
          <p className="text-gray-600 text-lg mt-6">
            Explore our recently completed projects that showcase our expertise, innovation, 
            and commitment to excellence in every aspect of construction and development.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => openProjectDetail(project)}
            >
              {/* Project Image */}
              <div className="w-full h-64 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <motion.div 
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center p-4"
                    initial={{ scale: 0.8 }}
                    whileHover={{ scale: 1 }}
                  >
                    {project.isVideo ? (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
                          <Play size={24} className="ml-1" />
                        </div>
                        <p className="font-semibold mt-2">Watch Video</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mb-2">
                          <ExternalLink size={24} />
                        </div>
                        <p className="font-semibold mt-2">View Details</p>
                      </div>
                    )}
                  </motion.div>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-yellow-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </div>
              </div>
              
              {/* Project Title */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white">
                <h3 className="font-bold text-lg">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Navigation + Text */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center mt-16 pt-8 border-t border-gray-200"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Navigation Arrows */}
          <div className="flex space-x-4">
            <motion.button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors duration-300"
              onClick={prevProject}
              disabled={currentIndex === 0}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button 
              className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 text-gray-600 hover:bg-yellow-500 hover:border-yellow-500 hover:text-white transition-colors duration-300"
              onClick={nextProject}
              disabled={currentIndex + 4 >= projects.length}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          {/* Center Text */}
          <p className="text-gray-600 text-center my-6 md:my-0 max-w-md">
            Have a project in mind?{" "}
            <a href="#" className="text-yellow-500 font-semibold hover:underline">
              Contact us today
            </a>
            . Our experts are ready to bring your vision to life.
          </p>

          {/* View All Button */}
          <motion.button
            className="px-6 py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center"
            whileHover={{ y: -2, boxShadow: "0 6px 12px rgba(234, 179, 8, 0.3)" }}
            whileTap={{ scale: 0.98 }}
          >
            View All Projects
            <ChevronRight size={18} className="ml-2" />
          </motion.button>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title}
                  className="w-full h-72 object-cover rounded-t-xl"
                />
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                  onClick={closeProjectDetail}
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6">
                <span className="text-yellow-500 font-semibold text-sm">{activeProject.category}</span>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">{activeProject.title}</h3>
                <p className="text-gray-600 mt-4">{activeProject.description}</p>
                <div className="mt-6 flex justify-end">
                  <button className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
                    View Case Study
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {videoPlaying && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
          >
            <motion.div 
              className="bg-black rounded-xl max-w-3xl w-full aspect-video"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <iframe
                  className="w-full h-full rounded-xl"
                  src={`https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <button 
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100"
                  onClick={closeProjectDetail}
                >
                  <X size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LatestProjects;