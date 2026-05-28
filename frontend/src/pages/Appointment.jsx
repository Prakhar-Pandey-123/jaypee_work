import React, { useEffect,useContext } from "react"
import { useState } from "react"
import {useNavigate, useParams} from "react-router-dom"
import {AppContext} from "../context/AppContext"
import { assets } from "../assets/assets"
import axios from "axios"
import {toast}  from "react-toastify"

const Appointment=()=>{
    const {docId}=useParams()
    const {doctors,getDoctorsData,backendUrl,token} =useContext(AppContext)
    const daysOfWeek=['SUN','MON','TUE','WED','THU','FRI','SAT']
    const navigate=useNavigate()
    const [docInfo,setDocInfo]=useState(null)
    const [docSlots,setDocSlots]=useState([])
    const [slotIndex,setSlotIndex]=useState(0)
    const [slotTime,setSlotTime]=useState('')

    const fetchDocInfo=async()=>{
        const docInfo=doctors.find(doc=>doc._id===docId)
        setDocInfo(docInfo)
    }
    useEffect(()=>{
        fetchDocInfo(docInfo)
    },[doctors,docId]);

    const getAvailableSlots=async()=>{
        setDocSlots([])
        let today=new Date();
// Mon Oct 27 2025 22:13:29 GMT+0530 (India Standard Time)
        for(let i=0;i<7;i++){
            // creating 7 days from today
            let currentDate=new Date(today)
            //makes copy of todays date object
        currentDate.setDate(today.getDate()+i);
// sets the day of the month for currentdate to current date +i.Example: if today = 27 Oct,
// then for i = 0 → 27, i = 1 → 28, … up to 2 Nov.
        
// setting end time of every date
            let endTime=new Date();
            endTime.setDate(today.getDate()+i)
            endTime.setHours(21,0,0,0)
// same day but sets the time to 9:00 PM (21:00).
// So, slots will stop generating after 9 PM for each day.
            // setting hours,minutes
    if(today.getDate()===currentDate.getDate())
    {
        currentDate.setHours(currentDate.getHours()>10?currentDate.getHours()+1:10)
        // For today, start from the next available 30-minute mark or next hour,
// but never before 10 AM.
        currentDate.setMinutes(currentDate.getMinutes()>30?30:0)
    }
    else {
        // For future days, start exactly at 10:00 AM.
        currentDate.setHours(10)
        currentDate.setMinutes(0)
    }
    let timeSlots=[]
    while(currentDate<endTime){
        // Keeps looping until the current time reaches 9 PM.
        let formattedTime=currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
        // Converts the time to a readable format like "10:00 AM"
        timeSlots.push({
            // the actual Date object (dateTime)
            dateTime:new Date(currentDate),
            time:formattedTime
        })
        // increment current time by 30 min
        currentDate.setMinutes(currentDate.getMinutes()+30)
        // Moves ahead by 30 minutes to make the next slot.
    }
    setDocSlots(prev=>([...prev,timeSlots]))
    // After finishing one day, adds all that day’s slots to the state array
        }
    }

    const bookAppointment=async()=>{
        if(!token){
            toast.warn('Login to book appointment')
            return navigate('/login');
        }
        try{
            const date=docSlots[slotIndex][0].dateTime;
            let day=date.getDate()
            let month=date.getMonth()+1;
            let year=date.getFullYear()

            const slotDate=day+'_'+month+'_'+year;
            const {data}=await axios.post(backendUrl+'/api/user/book-appointment',{
                docId,slotDate,slotTime
            },{headers:{token}});

            if(data.success){
                toast.success(data.message);
                getDoctorsData();
                return navigate('/my-appointments');
            }
            else{
                toast.error(data.message);
            }
        }
        catch(error){
            console.log(error)
            toast.error(error.message);
        }
    }


    useEffect(()=>{
        getAvailableSlots()
    },[docInfo])

    useEffect(()=>{
        console.log(docSlots)
    },[docSlots])

    return docInfo && (
  <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-4 md:px-8 py-10">

    {/* Doctor Profile Section */}
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">

        {/* Doctor Image */}
        <div className="lg:w-[320px]">
          <img
            className="w-full rounded-[32px] bg-gradient-to-br from-cyan-400 to-blue-500 shadow-2xl"
            src={docInfo.image}
            alt=""
          />
        </div>

        {/* Doctor Info Card */}
        <div className="flex-1 bg-gradient-to-br from-white via-blue-50 to-cyan-50 rounded-[32px] p-8 md:p-10 shadow-xl border border-blue-100">

          <div className="flex items-center gap-2">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
              {docInfo.name}
            </h1>

            <img
              className="w-6 h-6"
              src={assets.verified_icon}
              alt=""
            />
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-4">
            <p className="text-slate-600 text-lg">
              {docInfo.degree} • {docInfo.speciality}
            </p>

            <span className="px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              {docInfo.experience}
            </span>
          </div>

          {/* About Section */}
          <div className="mt-8">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-lg font-semibold text-slate-800">
                About Doctor
              </h2>

              <img
                className="w-4"
                src={assets.info_icon}
                alt=""
              />
            </div>

            <p className="text-slate-600 leading-8 max-w-3xl">
              {docInfo.about}
            </p>
          </div>

          {/* Fee Card */}
          <div className="mt-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-2xl shadow-lg">
              <span className="font-medium">
                Consultation Fee:
              </span>

              <span className="font-bold text-lg">
                ₹ {docInfo.fees}
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>

    {/* Booking Section */}
    <div className="max-w-7xl mx-auto mt-14">

      <div className="bg-white/70 backdrop-blur-md rounded-[32px] p-8 shadow-xl border border-blue-100">

        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Select Appointment Slot
        </h2>

        <p className="text-slate-500 mb-8">
          Choose a convenient date and time for your consultation.
        </p>

        {/* Date Selection */}
        <div className="flex gap-4 overflow-x-auto pb-3">

          {
            docSlots.length &&
            docSlots.map((item, index) => (
              <div
                key={index}
                onClick={() => setSlotIndex(index)}
                className={`min-w-[90px] cursor-pointer rounded-3xl transition-all duration-300 text-center py-5 px-3 border ${
                  slotIndex === index
                    ? "bg-gradient-to-br from-cyan-500 to-blue-600 text-white border-transparent shadow-xl scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-cyan-300 hover:shadow-md"
                }`}
              >
                <p className="text-sm font-medium">
                  {item[0] &&
                    daysOfWeek[item[0].dateTime.getDay()]}
                </p>

                <p className="text-xl font-bold mt-1">
                  {item[0] &&
                    item[0].dateTime.getDate()}
                </p>
              </div>
            ))
          }

        </div>

        {/* Time Selection */}
        <div className="flex gap-3 overflow-x-auto mt-8 pb-3">

          {
            docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <button
                key={index}
                onClick={() => setSlotTime(item.time)}
                className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 ${
                  item.time === slotTime
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-600"
                }`}
              >
                {item.time.toLowerCase()}
              </button>
            ))
          }

        </div>

        {/* Book Button */}
        <div className="mt-10">
          <button
            onClick={bookAppointment}
            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-10 md:px-16 py-4 rounded-full font-medium shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Book Appointment
          </button>
        </div>

      </div>

    </div>

  </div>
)
}
export default Appointment