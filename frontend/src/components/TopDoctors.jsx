import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-cyan-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top Layout */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-14">

          <div>
            <p className="text-cyan-600 font-semibold uppercase tracking-[4px]">
              Our Specialists
            </p>

            <h2 className="text-5xl font-bold text-slate-800 mt-3">
              Meet Our Medical Experts
            </h2>

            <p className="text-slate-600 mt-4 max-w-xl">
              Experienced doctors dedicated to delivering exceptional care and
              personalized treatment.
            </p>
          </div>

          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="px-8 py-4 rounded-2xl bg-slate-900 text-white hover:bg-slate-700 transition"
          >
            View All Doctors
          </button>

        </div>

        {/* Horizontal Cards */}
        <div className="flex gap-8 overflow-x-auto pb-6">

          {doctors.slice(0, 10).map((item) => (
            <div
              key={item._id}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="min-w-[320px] bg-white rounded-[35px] overflow-hidden shadow-xl cursor-pointer hover:-translate-y-3 transition-all duration-500"
            >

              {/* Doctor Image */}
              <div className="h-72 bg-gradient-to-br from-cyan-400 to-blue-600">

                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Doctor Info */}
              <div className="p-6">

                <div className="flex justify-between items-center mb-4">

                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-green-600 font-medium">
                      Available
                    </span>
                  </div>

                  <span className="bg-cyan-50 text-cyan-700 px-3 py-1 rounded-full text-sm">
                    Specialist
                  </span>

                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  {item.name}
                </h3>

                <p className="text-slate-500 mt-2">
                  {item.speciality}
                </p>

                <button className="mt-6 w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-900 hover:text-white transition">
                  Book Appointment
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default TopDoctors;