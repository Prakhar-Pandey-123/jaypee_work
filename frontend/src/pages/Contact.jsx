import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-6 md:px-12 lg:px-20 py-12">

      {/* Hero Section */}
      <div className="text-center mb-20">
        <p className="text-primary font-semibold uppercase tracking-[5px]">
          Contact Us
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mt-4">
          Let's Connect
        </h1>

        <p className="max-w-2xl mx-auto mt-6 text-slate-600 text-lg leading-8">
          Have questions, feedback, or need assistance? Our team is here to
          help you every step of the way.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">

        {/* Image Section */}
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-[32px] shadow-2xl hover:scale-[1.02] transition-all duration-500"
            src={assets.contact_image}
            alt="Contact Us"
          />
        </div>

        {/* Contact Card */}
        <div className="lg:w-1/2 bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 rounded-[32px] p-8 md:p-10 shadow-2xl">

          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              Visit Our Office
            </h2>

            <div className="w-20 h-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"></div>
          </div>

          <div className="space-y-8">

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Office Address
              </h3>

              <p className="text-slate-600 leading-7">
                27 - A
                <br />
                Anand Vihar, Delhi, India
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Contact Information
              </h3>

              <p className="text-slate-600 leading-7">
                Tel: 8707522534
                <br />
                Email: prakhar9704@gmail.com
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-md rounded-2xl p-6 shadow-md">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                Careers at Medi-Book
              </h3>

              <p className="text-slate-600 leading-7">
                Join our mission to transform healthcare through innovation and
                technology. Explore exciting opportunities and grow with us.
              </p>
            </div>

            <button className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-10 py-4 rounded-full font-medium shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              Explore Opportunities
            </button>

          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="max-w-5xl mx-auto mt-24">
        <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[32px] p-10 md:p-14 text-center shadow-2xl">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            We're Here to Help
          </h2>

          <p className="text-blue-50 text-lg max-w-2xl mx-auto leading-8">
            Whether you're booking an appointment, looking for support, or
            interested in joining our team, we'd love to hear from you.
          </p>

        </div>
      </div>

    </div>
  );
};

export default Contact;