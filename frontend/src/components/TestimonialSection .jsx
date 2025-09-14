// TestimonialSection.jsx
import React from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    name: "Mark Henry",
    role: "Web Designer",
    img: "https://i.pravatar.cc/150?img=47", // Replace with your image
  },
  {
    text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    name: "Alex Roy",
    role: "Web Developer",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    text: "Lorem ipsum dolor sit amet do kemg consectetuer adipiscing elit, sed diam dola nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.",
    name: "Jone Doe",
    role: "Ceo & Founder",
    img: "https://i.pravatar.cc/150?img=5",
  },
];

const TestimonialSection = () => {
  return (
    <section
      className="relative bg-cover bg-center min-h-screen w-full flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523294587484-bae6cc870010?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80')", // Use your background image
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <p className="uppercase text-sm font-semibold tracking-wider text-gray-300">
          Success Makes You Happy
        </p>
        <h2 className="text-3xl font-bold mb-12">What Our Client Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white p-6 rounded shadow-lg text-gray-700"
            >
              {/* Quote icon */}
              <span className="text-4xl text-gray-400">&ldquo;</span>

              <p className="mb-6 text-sm">{item.text}</p>

              {/* Arrow below card */}
              <div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 
                w-0 h-0 border-l-[12px] border-r-[12px] border-t-[16px] 
                border-l-transparent border-r-transparent border-t-white"
              ></div>

              {/* Profile section */}
              <div className="flex flex-col items-center mt-10">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
                />
                <h4 className="mt-4 font-bold text-white">{item.name}</h4>
                <p className="text-sm text-gray-300">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating yellow button (bottom-right corner like screenshot) */}
      <button className="fixed bottom-6 right-6 bg-yellow-400 text-black font-bold rounded-full p-3 shadow-lg hover:bg-yellow-500 transition">
        ↑
      </button>
    </section>
  );
};

export default TestimonialSection;
