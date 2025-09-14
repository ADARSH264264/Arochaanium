import React from "react";
import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Custom arrows
function PrevArrow({ onClick }) {
  return (
    <button
      className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 flex items-center justify-center shadow-md"
      onClick={onClick}
    >
      <ArrowLeft className="text-gray-700" />
    </button>
  );
}

function NextArrow({ onClick }) {
  return (
    <button
      className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white w-12 h-12 flex items-center justify-center shadow-md"
      onClick={onClick}
    >
      <ArrowRight className="text-gray-700" />
    </button>
  );
}

export default function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
        }}
      >
        <ul className="flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 rounded-sm border border-gray-300 bg-white hover:bg-yellow-400"></div>
    ),
  };

  const slides = [
    {
      title: "GROW YOUR IDEA",
      subtitle: "DAVANA REAL ESTATE",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6d6e7c13", // replace with your image
    },
    {
      title: "BUILD YOUR FUTURE",
      subtitle: "DAVANA REAL ESTATE",
      desc: "We provide the best industrial & construction services",
      img: "https://images.unsplash.com/photo-1581091215367-59ab6d6e7c13",
    },
  ];

  return (
    <div className="relative">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            {/* Background */}
            <div
              className="h-[80vh] bg-cover bg-center flex items-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              {/* Overlay */}
              <div className="bg-black/60 w-full h-full absolute top-0 left-0"></div>

              {/* Content */}
              <div className="relative z-10 max-w-3xl px-8 text-left text-white">
                <p className="text-sm tracking-widest mb-2">{slide.subtitle}</p>
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.desc}</p>
                <div className="flex gap-4">
                  <button className="bg-yellow-400 px-6 py-3 font-semibold">
                    OUR PROJECTS
                  </button>
                  <button className="border border-white px-6 py-3 font-semibold">
                    CONTACT US
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
