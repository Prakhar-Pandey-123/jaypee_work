import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 px-6 md:px-10 lg:px-20 py-12 lg:py-0 shadow-2xl">

      {/* Background Blur Effects */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="relative flex flex-col-reverse lg:flex-row items-center">

        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center py-8 lg:py-20 z-10">

          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <p className="text-white text-sm">
              Trusted by thousands of patients
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
            Your Health,
            <br />
            Our Priority
          </h1>

          <p className="mt-6 text-blue-100 text-lg max-w-xl leading-8">
            Connect with experienced doctors, schedule appointments instantly,
            and manage your healthcare journey from one modern platform.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-8">

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-blue-100 text-sm">
                Verified Doctors
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4">
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-blue-100 text-sm">
                Happy Patients
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl px-5 py-4">
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-blue-100 text-sm">
                Healthcare Access
              </p>
            </div>

          </div>

          {/* User Row */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">

            <img
              className="w-32"
              src={assets.group_profiles}
              alt=""
            />

            <p className="text-blue-100 text-sm leading-6">
              Join thousands of patients who trust MediBook
              for convenient, secure, and reliable healthcare services.
            </p>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="#speciality"
              className="flex items-center gap-3 bg-white text-slate-800 px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Find a Doctor
              <img
                className="w-3"
                src={assets.arrow_icon}
                alt=""
              />
            </a>

            <button className="border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300">
              Learn More
            </button>

          </div>

        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-end relative">

          <div className="relative">

            {/* Floating Card */}
            <div className="absolute top-8 -left-10 bg-white rounded-2xl p-4 shadow-2xl hidden lg:block">
              <p className="text-sm text-slate-500">
                {/* Appointments Today */}
              </p>
              <p className="text-2xl font-bold text-slate-800">
                {/* 1,250+ */}
              </p>
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-16 -right-10 bg-white rounded-2xl p-4 shadow-2xl hidden lg:block">
              <p className="text-sm text-slate-500">
                {/* Patient Rating */}
              </p>
              <p className="text-2xl font-bold text-green-600">
                {/* 4.9 ★ */}
              </p>
            </div>

            <img
              className="w-full max-w-[650px] object-contain relative z-10 drop-shadow-2xl"
              src="https://imgs.search.brave.com/0APBEVcC5eBKH9qpagIi7H05-pgVFR4BdpycsGAPiQ4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzUzLzY3LzQ3/LzM2MF9GXzUzNjc0/NzQxX3hhaTVpWUky/aFB2bHJUdnR2SlNG/VEFlZ2VaM1RVS0ZI/LmpwZw"
              alt=""
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default Header;