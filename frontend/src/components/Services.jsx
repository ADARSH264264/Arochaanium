import React from "react";
import { FaIndustry, FaFireExtinguisher, FaFlask, FaCogs, FaTools, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaIndustry size={30} className="text-yellow-500" />,
    title: "Petroleum & Mining",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
  {
    icon: <FaFireExtinguisher size={30} className="text-yellow-500" />,
    title: "Fuel Controlling",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
  {
    icon: <FaFlask size={30} className="text-yellow-500" />,
    title: "Liquid Chemicals",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
  {
    icon: <FaCogs size={30} className="text-yellow-500" />,
    title: "Monomer & Polymer",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
  {
    icon: <FaTools size={30} className="text-yellow-500" />,
    title: "Repairs Oiling",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
  {
    icon: <FaHeadset size={30} className="text-yellow-500" />,
    title: "24/7 Support",
    description:
      "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate.",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Our <span className="text-yellow-500">Services</span>
        </h2>
        <div className="w-16 h-1 bg-yellow-500 mx-auto my-4"></div>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col space-y-4 hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="w-12 h-12 flex items-center justify-center border border-yellow-400 rounded-md">
              {service.icon}
            </div>

            {/* Title + Description */}
            <h3 className="text-lg font-bold text-gray-800">{service.title}</h3>
            <p className="text-gray-500 text-sm">{service.description}</p>

            {/* Read More */}
            <a
              href="#"
              className="text-sm font-semibold text-gray-800 flex items-center gap-1 hover:text-yellow-500"
            >
              Read More <span>›</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
