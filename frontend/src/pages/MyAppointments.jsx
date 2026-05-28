import React, { useContext,useEffect,useState } from 'react'
import {toast} from "react-toastify"
import axios from 'axios'
import { AppContext } from '../context/AppContext'
import {useNavigate} from "react-router-dom"

const MyAppointments = () => {
  const navigate=useNavigate();

  const {backendUrl,token,getDoctorsData}=useContext(AppContext);

  const cancelAppointment=async(appointmentId)=>{
    try{
      const {data}=await axios.post(backendUrl+'/api/user/cancel-appointment',{
      appointmentId
    },{
      headers:{token}
    })

    if(data.success){
      toast.success(data.message)
      getUseAppointments()
      getDoctorsData()
    }else{
      toast.error(data.message);
    }
    }
    catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(()=>{
    if(token){
      getUseAppointments()
    }
  },[token])

  const [appointments,setAppointments]=useState([]);

  const getUseAppointments=async()=>{
    try{
      const {data}=await axios.post(backendUrl+'/api/user/appointments',{},
        {headers:{
        token
      }})

      if(data.success){
        setAppointments(data.appointments);
        console.log("these are all the appointments",data.appointments);
      }
    }
    catch(error){
      console.log(error)
      toast.error(error.message);
    }
  }
  useEffect(()=>{
    getUseAppointments()
  },[])

  // razorpay logic

  const initPay=(order)=>{
    const options={
      key:import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount:order.amount,
      currency:order.currency,
      name:"Appointment Payment",
      description:"Appointment Payment",
      order_id:order.id,
      receipt:order.receipt,
      // handler fn is to verify the payment by hitting our be route , and sending the message to that be route
      handler:async (response)=>{
        try {

          const {data}=await axios.post(backendUrl+'/api/user/verifyRazorpay',response,{
            headers:{token}
          })
          if(data.success){
            navigate('/my-appointments')
            getUseAppointments();
          }
          
        } catch (error) {
          console.log(error)
          toast.error(error.message);
          
        }
      }
    }
    const rzp=new window.Razorpay(options)
    rzp.open()
  }
// when we click on that "pay now" button then we call appointmentRazorpay fn, this fn hits the route of the be wheren firstly instance is created with api secret, key ,then options is created with the currency, amount, receipt(uniquely identify the payment), order is created on that instance with options then that order is send to frontend, frontend calls the initPay fn and gives it order from the be, initPay, makes the order on the frontend by inserting all the details of the order, and then calls the razorpay frontend
  const appointmentRazorpay=async(appointmentId)=>{
    try{
      const {data}=await axios.post(backendUrl+'/api/user/payment-razorpay',{
        appointmentId
      },{
        headers:{token}
      })
      if(data.success){
        // send the order (which is main exported send thing from the backend, order is created on razorpay instance in which we have inserted options) 
        initPay(data.order);
      }else{
        toast.error(data.message)
      }

    }
    catch(error){
      console.log("failed in frontend ")
      toast.error(error.message);
    }
  }
  
 return (
  <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-4 md:px-8 py-10">

    {/* Hero Section */}
    <div className="text-center mb-14">
      <p className="text-primary font-semibold uppercase tracking-[5px]">
        My Appointments
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
        Manage Your Healthcare Journey
      </h1>

      <p className="max-w-3xl mx-auto mt-5 text-slate-600 text-lg leading-8">
        View upcoming consultations, manage appointments, and securely complete
        payments from one place.
      </p>
    </div>

    {/* Appointments List */}
    <div className="max-w-7xl mx-auto">

      {appointments.length > 0 ? (
        <div className="space-y-8">

          {appointments.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-[32px] shadow-xl border border-blue-100 overflow-hidden hover:shadow-2xl transition-all duration-300"
            >

              <div className="flex flex-col lg:flex-row gap-8 p-6 md:p-8">

                {/* Doctor Image */}
                <div className="lg:w-[220px]">
                  <div className="rounded-[28px] overflow-hidden bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600">
                    <img
                      className="w-full h-[250px] object-cover"
                      src={item.docData.image}
                      alt=""
                    />
                  </div>
                </div>

                {/* Doctor Details */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-3 mb-4">

                    <h2 className="text-2xl font-bold text-slate-800">
                      {item.name}
                    </h2>

                    {!item.cancelled && (
                      <span className="px-4 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                        Scheduled
                      </span>
                    )}

                    {item.cancelled && (
                      <span className="px-4 py-1 rounded-full bg-red-100 text-red-700 text-sm font-medium">
                        Cancelled
                      </span>
                    )}
                  </div>

                  <p className="text-cyan-600 font-medium text-lg">
                    {item.docData.speciality}
                  </p>

                  <div className="mt-6">

                    <p className="text-slate-700 font-semibold mb-2">
                      Clinic Address
                    </p>

                    <p className="text-slate-500">
                      {item.docData.address.line1}
                    </p>

                    <p className="text-slate-500">
                      {item.docData.address.line2}
                    </p>

                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">

                    <div className="bg-blue-50 px-5 py-3 rounded-2xl">
                      <p className="text-xs text-slate-500">
                        Appointment Date
                      </p>
                      <p className="font-semibold text-slate-800">
                        {item.slotDate}
                      </p>
                    </div>

                    <div className="bg-cyan-50 px-5 py-3 rounded-2xl">
                      <p className="text-xs text-slate-500">
                        Appointment Time
                      </p>
                      <p className="font-semibold text-slate-800">
                        {item.slotTime}
                      </p>
                    </div>

                  </div>

                </div>

                {/* Action Buttons */}
                <div className="flex flex-col justify-center gap-3 lg:w-[220px]">

                  {!item.cancelled && item.payment && (
                    <button className="w-full py-3 rounded-2xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium shadow-lg">
                      Payment Completed
                    </button>
                  )}

                  {!item.cancelled && !item.payment && (
                    <button
                      onClick={() => appointmentRazorpay(item._id)}
                      className="w-full py-3 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                    >
                      Pay Online
                    </button>
                  )}

                  {!item.cancelled && (
                    <button
                      onClick={() => cancelAppointment(item._id)}
                      className="w-full py-3 rounded-2xl border border-red-300 text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      Cancel Appointment
                    </button>
                  )}

                  {item.cancelled && (
                    <button className="w-full py-3 rounded-2xl bg-red-100 text-red-600 font-medium border border-red-300">
                      Appointment Cancelled
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>
      ) : (
        <div className="bg-white/70 backdrop-blur-md rounded-[32px] shadow-xl border border-blue-100 py-20 text-center">

          <h2 className="text-3xl font-bold text-slate-800">
            No Appointments Found
          </h2>

          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            You haven't booked any appointments yet. Explore our specialists
            and schedule your first consultation.
          </p>

        </div>
      )}

    </div>

  </div>
);
}

export default MyAppointments
