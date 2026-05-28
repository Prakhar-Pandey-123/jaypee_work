import React, { useContext, useEffect } from "react"
import { assets } from "../../assets/assets"
import { AdminContext } from "../../context/AdminContext"
import { AppContext } from "../../context/AppContext"


const Dashboard=()=>{
    const {aToken,getDashData,cancelAppointment,dashData}=useContext(AdminContext);
    const {slotDateFormat}=useContext(AppContext);

    useEffect(()=>{
        if(aToken){
            getDashData()
            console.log("dashdata=",dashData)
        }
    },[aToken])
     console.log("admin dash data from dashboard.jsx",dashData)

 return dashData && (
  <div className="p-6">

    {/* Header */}
    <div className="mb-8">
      <p className="text-cyan-600 font-semibold uppercase tracking-[3px]">
        Admin Panel
      </p>

      <h1 className="text-4xl font-bold text-slate-800 mt-2">
        Healthcare Dashboard
      </h1>

      <p className="text-slate-500 mt-2">
        Monitor doctors, patients and appointments across the platform.
      </p>
    </div>

    {/* Stats Section */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[28px] p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-cyan-100 text-sm">
              Total Doctors
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {dashData.doctors}
            </h2>
          </div>

          <img
            className="w-14 opacity-90"
            src={assets.doctor_icon}
            alt=""
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-violet-500 to-purple-600 rounded-[28px] p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-violet-100 text-sm">
              Appointments
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {dashData.appointments}
            </h2>
          </div>

          <img
            className="w-14 opacity-90"
            src={assets.appointments_icon}
            alt=""
          />
        </div>
      </div>

      <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-[28px] p-6 text-white shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-100 text-sm">
              Registered Patients
            </p>

            <h2 className="text-4xl font-bold mt-2">
              {dashData.patients}
            </h2>
          </div>

          <img
            className="w-14 opacity-90"
            src={assets.patients_icon}
            alt=""
          />
        </div>
      </div>

    </div>

    {/* Recent Bookings */}
    <div className="bg-white rounded-[28px] shadow-lg overflow-hidden border border-slate-100">

      <div className="flex items-center justify-between px-8 py-6 border-b bg-slate-50">

        <div className="flex items-center gap-3">
          <img src={assets.list_icon} alt="" />
          <h2 className="text-xl font-semibold text-slate-800">
            Recent Appointments
          </h2>
        </div>

        <span className="text-sm text-slate-500">
          Latest 5 Bookings
        </span>

      </div>

      <div className="p-6">

        {dashData.latestAppointments.slice(0, 5).map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-50 transition-all mb-3 border border-slate-100"
          >

            <img
              className="w-14 h-14 rounded-full object-cover"
              src={item.docData.image}
              alt=""
            />

            <div className="flex-1">

              <p className="font-semibold text-slate-800">
                {item.docData.name}
              </p>

              <p className="text-sm text-slate-500">
                Appointment on {item.slotDate}
              </p>

            </div>

            {item.cancelled ? (
              <span className="px-4 py-2 rounded-full bg-red-100 text-red-600 text-sm">
                Cancelled
              </span>
            ) : item.isCompleted ? (
              <span className="px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm">
                Completed
              </span>
            ) : (
              <button
                onClick={() => cancelAppointment(item._id)}
                className="px-4 py-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition"
              >
                Cancel
              </button>
            )}

          </div>

        ))}

      </div>

    </div>

  </div>
)
}

export default Dashboard