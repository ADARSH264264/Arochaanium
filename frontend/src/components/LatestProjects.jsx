import React from "react";

const LatestProjects = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          <span className="text-gray-800">Latest </span>
          <span className="text-yellow-500">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-2"></div>
        <p className="text-gray-500 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-6xl mx-auto">
        {/* Project 1 */}
        <div className="w-full h-64">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Project 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Youtube Video Box */}
        <div className="w-full h-64">
          <img
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
            alt="Project 1"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project 2 */}
        <div className="w-full h-64">
          <img
            src="https://images.unsplash.com/photo-1504457046788-2509ec68b31d"
            alt="Project 2"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project 3 */}
        <div className="w-full h-64">
          <img
            src="https://images.unsplash.com/photo-1523289333742-be1143f6b766"
            alt="Project 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom Navigation + Text */}
      <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mt-10 border-t pt-6">
        {/* Left Arrow */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-200">
          ◀
        </button>

        {/* Center Text */}
        <p className="text-gray-600 text-center mt-4 md:mt-0">
          Want to make new project?{" "}
          <a href="#" className="text-yellow-500 underline">
            contact with us
          </a>
          . Our expert is ready to help you
        </p>

        {/* Right Arrow */}
        <button className="w-10 h-10 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-200 mt-4 md:mt-0">
          ▶
        </button>
      </div>
    </div>
  );
};

export default LatestProjects;
