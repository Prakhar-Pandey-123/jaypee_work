import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-6 md:px-12 lg:px-20 py-12">

      {/* Hero Section */}
      <div className="text-center mb-20">
        <p className="text-primary font-semibold uppercase tracking-[5px]">
          About Us
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mt-4">
          Making Healthcare Simpler
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-slate-600 text-lg leading-8">
          Connecting patients and healthcare professionals through a seamless,
          modern, and reliable digital healthcare experience.
        </p>
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center mb-24">
        <div className="lg:w-1/2">
          <img
            className="w-full rounded-[32px] shadow-2xl hover:scale-[1.02] transition-all duration-500"
            src={assets.about_image}
            alt="About Medi-Book"
          />
        </div>

        <div className="lg:w-1/2 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-[32px] p-8 md:p-10 shadow-xl">
          <h2 className="text-3xl font-bold text-slate-800 mb-6">
            Who We Are
          </h2>

          <div className="space-y-5 text-slate-700 leading-8">
            <p>
              Welcome to Medi-Book, your trusted healthcare companion designed
              to make accessing medical services easier, faster, and more
              convenient than ever before.
            </p>

            <p>
              We understand the challenges patients face when booking
              appointments, finding the right doctors, and managing healthcare
              records. Our platform brings everything together in one simple and
              intuitive experience.
            </p>

            <p>
              By combining technology with patient-centered care, Medi-Book
              helps users connect with qualified healthcare professionals,
              schedule appointments effortlessly, and stay informed throughout
              their healthcare journey.
            </p>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-[32px] p-10 md:p-14 mb-24 shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Our Vision
        </h2>

        <p className="text-blue-50 text-lg leading-9 max-w-5xl">
          We envision a future where quality healthcare is accessible to
          everyone with just a few clicks. Our mission is to bridge the gap
          between patients and healthcare providers through innovative digital
          solutions that empower individuals to take control of their health
          confidently and efficiently.
        </p>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold uppercase tracking-[5px]">
          Why Choose Us
        </p>

        <h2 className="text-4xl font-bold text-slate-800 mt-4">
          Healthcare Designed Around You
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">

        <div className="bg-gradient-to-br from-blue-50 to-cyan-100 rounded-[28px] p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Fast & Efficient
          </h3>

          <p className="text-slate-600 leading-7">
            Schedule appointments within minutes using our streamlined platform
            built to save your time and simplify healthcare access.
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-blue-100 rounded-[28px] p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Trusted Doctors
          </h3>

          <p className="text-slate-600 leading-7">
            Connect with experienced and verified healthcare professionals who
            are committed to providing quality medical care.
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-indigo-100 rounded-[28px] p-8 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">
            Personalized Care
          </h3>

          <p className="text-slate-600 leading-7">
            Receive tailored healthcare recommendations, appointment reminders,
            and a personalized experience designed around your needs.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;