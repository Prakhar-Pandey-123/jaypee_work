import React from "react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality)
      setFilterDoc(
        doctors.filter((doc) => doc.speciality === speciality)
      );
    else setFilterDoc(doctors);
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-4 md:px-8 py-10">

      {/* Hero Section */}
      <div className="text-center mb-14">
        <p className="text-primary font-semibold uppercase tracking-[5px]">
          Our Specialists
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
          Find The Right Doctor
        </h1>

        <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg leading-8">
          Connect with experienced healthcare professionals across multiple
          specialties and book appointments with confidence.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">

        {/* Left Filter Panel */}
        <div className="lg:w-[280px]">

          <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-6 shadow-xl border border-blue-100 sticky top-24">

            <h2 className="text-xl font-bold text-slate-800 mb-6">
              Specialties
            </h2>

            <div className="flex flex-col gap-3">

              <button
                onClick={() =>
                  speciality === "General physician"
                    ? navigate("/doctors")
                    : navigate("/doctors/General physician")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "General physician"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                General Physician
              </button>

              <button
                onClick={() =>
                  speciality === "Gynecologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Gynecologist")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "Gynecologist"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                Gynecologist
              </button>

              <button
                onClick={() =>
                  speciality === "Dermatologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Dermatologist")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "Dermatologist"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                Dermatologist
              </button>

              <button
                onClick={() =>
                  speciality === "Pediatricians"
                    ? navigate("/doctors")
                    : navigate("/doctors/Pediatricians")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "Pediatricians"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                Pediatricians
              </button>

              <button
                onClick={() =>
                  speciality === "Neurologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Neurologist")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "Neurologist"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                Neurologist
              </button>

              <button
                onClick={() =>
                  speciality === "Gastroenterologist"
                    ? navigate("/doctors")
                    : navigate("/doctors/Gastroenterologist")
                }
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 ${
                  speciality === "Gastroenterologist"
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white text-slate-600 hover:bg-blue-50"
                }`}
              >
                Gastroenterologist
              </button>

            </div>
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="flex-1">

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

            {filterDoc.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className="group cursor-pointer bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500"
              >

                {/* Doctor Image */}
                <div className="bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
                  <img
                    className="w-full h-[280px] object-cover group-hover:scale-105 transition-all duration-500"
                    src={item.image}
                    alt=""
                  />
                </div>

                {/* Doctor Info */}
                <div className="p-6">

                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>

                    <p className="text-green-600 text-sm font-medium">
                      Available for Consultation
                    </p>
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mb-2">
                    {item.name}
                  </h3>

                  <p className="text-slate-500">
                    {item.speciality}
                  </p>

                  <div className="mt-5">
                    <span className="inline-flex px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                      View Profile
                    </span>
                  </div>

                </div>
              </div>
            ))}

          </div>

          {filterDoc.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-slate-700">
                No doctors found
              </h3>
              <p className="text-slate-500 mt-2">
                Try selecting another specialty.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default Doctors;