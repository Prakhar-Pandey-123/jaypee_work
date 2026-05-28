import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="my-20 px-4">
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-cyan-600 to-blue-700 max-w-6xl mx-auto">

        {/* Background Blur */}
        <div className="absolute -top-16 -right-16 w-52 h-52 bg-white/10 rounded-full blur-3xl"></div>

        <div className="grid md:grid-cols-2 items-center gap-8 px-8 md:px-12 py-10">

          {/* Left Content */}
          <div>

            <div className="inline-block bg-white/15 backdrop-blur-md px-4 py-2 rounded-full mb-4">
              <p className="text-white text-xs font-medium">
                Trusted Healthcare Platform
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
              Find The Right Doctor
              <br />
              For Your Health
            </h2>

            <p className="text-blue-100 mt-4 leading-7">
              Book appointments with trusted specialists and get quality
              healthcare whenever you need it.
            </p>

            <button
              onClick={() => {
                navigate("/login");
                scrollTo(0, 0);
              }}
              className="mt-6 bg-white text-slate-800 px-7 py-3 rounded-xl font-medium hover:scale-105 transition-all duration-300"
            >
              Create Account
            </button>

          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">

            <div className="absolute top-4 left-0 bg-white rounded-2xl px-4 py-3 shadow-lg hidden lg:block">
              <p className="text-xl font-bold text-slate-800">
                100+
              </p>
              <p className="text-xs text-slate-500">
                Doctors
              </p>
            </div>

            <img
              src={assets.appointment_img}
              alt=""
              className="w-[260px] md:w-[320px]"
            />

            <div className="absolute bottom-4 right-0 bg-white rounded-2xl px-4 py-3 shadow-lg hidden lg:block">
              <p className="text-xl font-bold text-slate-800">
                4.9★
              </p>
              <p className="text-xs text-slate-500">
                Rating
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;