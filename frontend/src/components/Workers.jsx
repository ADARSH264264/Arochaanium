import React from "react";

export default function Workers() {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Dedicated <span className="text-yellow-500">Workers</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto my-4"></div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Workers Image */}
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Dedicated Workers"
          className="max-w-5xl w-full object-contain"
        />
      </div>
    </section>
  );
}
