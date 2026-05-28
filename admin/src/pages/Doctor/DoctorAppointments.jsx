import React, { useState } from "react";
import {useContext,useEffect} from "react"
import { DoctorContext } from "../../context/DoctorContext";
import {AppContext} from "../../context/AppContext"
import {assets} from "../../assets/assets" 

const DoctorAppointments=()=>{
    const {dToken,appointments,getAppointments,cancelAppointment,completeAppointment}=useContext(DoctorContext)
    const {calculateAge}=useContext(AppContext);

    useEffect(()=>{
        if(dToken){
            getAppointments()
        }
    },[dToken])
    console.log(appointments)
    // console.log(appointments[0].userData.dob)
     return (
  <div className="w-full p-6">

    {/* Header */}
    <div className="mb-8">

      <p className="text-cyan-600 font-semibold tracking-[3px] uppercase">
        Doctor Dashboard
      </p>

      <h1 className="text-4xl font-bold text-slate-800 mt-2">
        Patient Appointments
      </h1>

      <p className="text-slate-500 mt-2">
        Manage upcoming consultations and patient bookings.
      </p>

    </div>

    {/* Appointment Cards */}
    <div className="grid lg:grid-cols-2 gap-6">

      {appointments.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[28px] border border-sky-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        >

          {/* Top Section */}
          <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <img
                  src={item.userData.image}
                  alt=""
                  className="w-16 h-16 rounded-full border-4 border-white object-cover"
                />

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.userData.name}
                  </h3>

                  <p className="text-cyan-100">
                    Age: {calculateAge(item.userData.dob)}
                  </p>
                </div>

              </div>

              <div className="bg-white/20 px-4 py-2 rounded-full text-white text-sm">
                #{index + 1}
              </div>

            </div>

          </div>

          {/* Details */}
          <div className="p-6">

            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Appointment Date
                </p>
                <p className="font-semibold text-slate-800">
                  {item.slotDate}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Appointment Time
                </p>
                <p className="font-semibold text-slate-800">
                  {item.slotTime}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Payment Method
                </p>
                <p className="font-semibold text-slate-800">
                  {item.payment ? "Online Payment" : "Cash"}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Consultation Fee
                </p>
                <p className="font-semibold text-slate-800">
                  ₹ {item.amount}
                </p>
              </div>

            </div>

            {/* Status + Actions */}
            <div className="mt-6 flex justify-between items-center">

              {item.cancelled ? (
                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 font-medium">
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 font-medium">
                  Completed
                </span>
              ) : (
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 font-medium">
                  Pending
                </span>
              )}

              {!item.cancelled && !item.isCompleted && (
                <div className="flex gap-3">

                  <button
                    onClick={() => cancelAppointment(item._id)}
                    className="px-5 py-2 rounded-xl border border-red-300 text-red-600 hover:bg-red-500 hover:text-white transition"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => completeAppointment(item._id)}
                    className="px-5 py-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition"
                  >
                    Complete
                  </button>

                </div>
              )}

            </div>

          </div>

        </div>
      ))}

    </div>

  </div>
)
}
export default DoctorAppointments