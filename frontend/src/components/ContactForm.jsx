import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full">
      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-widest text-gray-500">Stay With Us</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Our Quick Contact From
          </h2>

          {/* Yellow underline */}
          <div className="w-24 h-1 bg-yellow-400 mx-auto my-3"></div>

          {/* Icon */}
          <div className="flex justify-center my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.5-7.5 11.25-7.5 11.25S4.5 18 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
          </div>
        </div>

        {/* Form */}
        <div className="max-w-5xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-200 bg-gray-50 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 border border-gray-200 bg-gray-50 focus:outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 border border-gray-200 bg-gray-50 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Subject"
              className="p-3 border border-gray-200 bg-gray-50 focus:outline-none"
            />
          </div>

          <div>
            <textarea
              placeholder="Your Message"
              rows={8}
              className="w-full p-3 border border-gray-200 bg-gray-50 focus:outline-none"
            ></textarea>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-end max-w-5xl mx-auto mt-6">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg">
            SEND MESSAGE
          </button>
        </div>
      </section>

      {/* Google Map */}
      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.035714015223!2d-122.44674728468234!3d37.77492927975911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b5b0a7d%3A0x27f6d8cdb36805b3!2sSan%20Francisco%20CA!5e0!3m2!1sen!2sus!4v1632665294797!5m2!1sen!2sus"
          allowFullScreen={true}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
