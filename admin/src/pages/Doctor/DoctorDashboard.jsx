import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { DoctorContext } from "../../context/DoctorContext";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/AppContext";

const DoctorDahboard=()=>{
    const {dToken,dashData,getDashData,cancelAppointment,completeAppointment}=useContext(DoctorContext)

    useEffect(()=>{
        if(dToken){
            getDashData()
        }
    },[dToken]);

    console.log("dashData=",dashData)

    return dashData && (
  <div className="p-6">

    {/* Header */}
    <div className="mb-8">
      <p className="text-cyan-600 font-semibold uppercase tracking-[3px]">
        Overview
      </p>

      <h1 className="text-4xl font-bold text-slate-800 mt-2">
        Doctor Dashboard
      </h1>

      <p className="text-slate-500 mt-2">
        Track your performance, appointments, and patient activity.
      </p>
    </div>

    {/* Stats Section */}
    <div className="grid md:grid-cols-3 gap-6">

      <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl p-6 text-white shadow-xl">
        <img className="w-12 mb-4" src={assets.earning_icon} alt="" />
        <p className="text-sm text-cyan-100">Total Earnings</p>
        <h2 className="text-4xl font-bold mt-2">
          ₹ {dashData.earnings}
        </h2>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
        <img className="w-12 mb-4" src={assets.appointments_icon} alt="" />
        <p className="text-slate-500 text-sm">
          Appointments
        </p>
        <h2 className="text-4xl font-bold text-slate-800 mt-2">
          {dashData.appointments}
        </h2>
      </div>

      <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
        <img className="w-12 mb-4" src={assets.patients_icon} alt="" />
        <p className="text-slate-500 text-sm">
          Patients
        </p>
        <h2 className="text-4xl font-bold text-slate-800 mt-2">
          {dashData.patients}
        </h2>
      </div>

    </div>

    {/* Recent Activity */}
    <div className="mt-10 bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">

      <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-5">
        <div className="flex items-center gap-3">
          <img src={assets.list_icon} alt="" />
          <h2 className="text-white text-xl font-semibold">
            Recent Appointments
          </h2>
        </div>
      </div>

      <div className="p-6">

        <div className="space-y-4">

          {dashData.latestAppointments.slice(0, 5).map((item, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50 rounded-2xl p-4 hover:bg-slate-100 transition"
            >

              <div className="flex items-center gap-4">

                <img
                  className="w-14 h-14 rounded-full object-cover"
                  src={item.userData.image}
                  alt=""
                />

                <div>
                  <p className="font-semibold text-slate-800">
                    {item.userData.name}
                  </p>

                  <p className="text-slate-500 text-sm">
                    Appointment on {item.slotDate}
                  </p>
                </div>

              </div>

              {item.cancelled ? (
                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium">
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                  Completed
                </span>
              ) : (
                <div className="flex gap-3">

                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="px-4 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => completeAppointment(item._id)}
                    className="px-4 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Complete
                  </button>

                </div>
              )}

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
)
}
export default DoctorDahboard