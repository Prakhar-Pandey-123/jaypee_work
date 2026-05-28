import React from "react"
import {assets} from "../../assets/assets"
import { useContext } from "react"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/AppContext"
import { useEffect } from "react"

const AllAppointments=()=>{
    const {aToken,appointments,cancelAppointment,getAllAppointments}=useContext(AdminContext)
    const {calculateAge}=useContext(AppContext);

    useEffect(()=>{
        if(aToken){
            getAllAppointments()
        }
    },[aToken]);

    return (
  <div className="p-6">

    {/* Header */}
    <div className="mb-8">

      <p className="text-cyan-600 font-semibold uppercase tracking-[3px]">
        Administration
      </p>

      <h1 className="text-4xl font-bold text-slate-800 mt-2">
        Appointment Management
      </h1>

      <p className="text-slate-500 mt-2">
        Monitor, manage and track all patient appointments across the platform.
      </p>

    </div>

    {/* Stats Bar */}
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[28px] p-6 mb-8 text-white">

      <div className="flex flex-wrap gap-10">

        <div>
          <p className="text-cyan-100 text-sm">
            Total Appointments
          </p>
          <h2 className="text-3xl font-bold">
            {appointments.length}
          </h2>
        </div>

        <div>
          <p className="text-cyan-100 text-sm">
            Active Bookings
          </p>
          <h2 className="text-3xl font-bold">
            {appointments.filter(item => !item.cancelled).length}
          </h2>
        </div>

        <div>
          <p className="text-cyan-100 text-sm">
            Completed
          </p>
          <h2 className="text-3xl font-bold">
            {appointments.filter(item => item.isCompleted).length}
          </h2>
        </div>

      </div>

    </div>

    {/* Appointment Cards */}
    <div className="grid xl:grid-cols-2 gap-6">

      {appointments.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[28px] shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
        >

          {/* Top */}
          <div className="bg-slate-50 px-6 py-5 border-b">

            <div className="flex justify-between items-center">

              <h3 className="font-semibold text-slate-800">
                Appointment #{index + 1}
              </h3>

              {item.cancelled ? (
                <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm">
                  Cancelled
                </span>
              ) : item.isCompleted ? (
                <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm">
                  Completed
                </span>
              ) : (
                <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700 text-sm">
                  Active
                </span>
              )}

            </div>

          </div>

          {/* Content */}
          <div className="p-6">

            {/* Patient */}
            <div className="flex items-center gap-4 mb-5">

              <img
                src={item.userData.image}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-slate-800">
                  {item.userData.name}
                </p>

                <p className="text-slate-500 text-sm">
                  Age: {calculateAge(item.userData.dob)}
                </p>
              </div>

            </div>

            {/* Doctor */}
            <div className="flex items-center gap-4 mb-5">

              <img
                src={item.docData.image}
                alt=""
                className="w-14 h-14 rounded-full object-cover bg-slate-100"
              />

              <div>
                <p className="font-semibold text-slate-800">
                  {item.docData.name}
                </p>

                <p className="text-slate-500 text-sm">
                  Doctor
                </p>
              </div>

            </div>

            {/* Details */}
            <div className="grid grid-cols-2 gap-4">

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Appointment Date
                </p>

                <p className="font-medium text-slate-800">
                  {item.slotDate}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Time
                </p>

                <p className="font-medium text-slate-800">
                  {item.slotTime}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Consultation Fee
                </p>

                <p className="font-medium text-slate-800">
                  ₹ {item.amount}
                </p>
              </div>

              <div className="bg-slate-50 rounded-2xl p-4">
                <p className="text-xs text-slate-500">
                  Status
                </p>

                <p className="font-medium text-slate-800">
                  {item.cancelled
                    ? "Cancelled"
                    : item.isCompleted
                    ? "Completed"
                    : "Active"}
                </p>
              </div>

            </div>

            {/* Action */}
            {!item.cancelled && !item.isCompleted && (
              <button
                onClick={() => cancelAppointment(item._id)}
                className="mt-6 w-full py-3 rounded-2xl border border-red-300 text-red-600 hover:bg-red-500 hover:text-white transition"
              >
                Cancel Appointment
              </button>
            )}

          </div>

        </div>
      ))}

    </div>

  </div>
)
}

export default AllAppointments