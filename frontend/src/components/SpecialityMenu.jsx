import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="py-24 px-4 md:px-8 bg-gradient-to-b from-sky-50 via-white to-cyan-50"
    >
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">

        <p className="text-primary font-semibold uppercase tracking-[4px] mb-3">
          Medical Experts
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
          Browse by Specialty
        </h1>

        <p className="mt-5 text-slate-600 text-lg max-w-2xl mx-auto leading-8">
          Find experienced healthcare professionals across various medical
          specialties and book appointments with ease.
        </p>

      </div>

      {/* Speciality Cards */}
      <div className="max-w-7xl mx-auto mt-16">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {specialityData.map((item, index) => (
            <Link
              key={index}
              to={`/doctors/${item.speciality}`}
              onClick={() => scrollTo(0, 0)}
              className="group bg-white rounded-[28px] border border-sky-100 p-6 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >

              {/* Icon Box */}
              <div className="bg-gradient-to-br from-sky-50 to-cyan-100 rounded-2xl p-5 flex justify-center items-center mb-5 group-hover:scale-105 transition-all duration-300">

                <img
                  src={item.image}
                  className="w-16 h-16 object-contain"
                  alt=""
                />

              </div>

              {/* Text */}
              <div className="text-center">

                <h3 className="font-semibold text-slate-800 text-sm md:text-base leading-6">
                  {item.speciality}
                </h3>

                <p className="text-slate-500 text-xs mt-2">
                  Available Doctors
                </p>

              </div>

            </Link>
          ))}

        </div>

      </div>

      {/* Bottom Highlight Section */}
      <div className="max-w-6xl mx-auto mt-20">

        <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[32px] p-8 md:p-12 shadow-xl">

          <div className="text-center">

            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Quality Healthcare Starts Here
            </h2>

            <p className="text-blue-100 mt-4 max-w-2xl mx-auto text-lg leading-8">
              Choose the right specialist for your healthcare needs and
              experience a faster, smarter way to book appointments.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default SpecialityMenu;