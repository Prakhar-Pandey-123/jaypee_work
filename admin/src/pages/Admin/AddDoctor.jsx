import React, { useContext, useState } from "react"
import { AdminContext } from "../../context/AdminContext"
import {toast} from "react-toastify"
import axios from "axios"
import { assets } from "../../assets/assets"

const AddDoctor=()=>{
    const [docImg,setDocImg]=useState(false);
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [experience,setExperience]=useState('1 year')
    const [fees,setFees]=useState('')
    const [about,setAbout]=useState('')
    const [speciality,setSpeciality]=useState('General physician');
    const [degree,setDegree]=useState('')
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('') 

    const {backendUrl,aToken}=useContext(AdminContext)

    const onSubmitHandler=async(event)=>{
        event.preventDefault()
        try{
            if(!docImg) return toast.error('Image Not Selected');
             const formData=new FormData()

            formData.append('image',docImg)
            formData.append('name',name)
            formData.append('email',email)
            formData.append('password',password)
            formData.append('experience',experience)
            formData.append('fees',Number(fees))
            formData.append('about',about)
            formData.append('speciality',speciality)
            formData.append('degree',degree)
            formData.append('address',JSON.stringify({line1:address1,line2:address2}))

            formData.forEach((value,key)=>{
                console.log(`${key}:${value}`)
            })

            const {data}=await axios.post(backendUrl+'/api/admin/add-doctor',formData,{
                headers:{
                    aToken
                }
            })
            if(data.succeess){
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setEmail('')
                setPassword('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')
            }
            else{
                toast.error(data.message)
            }
        }
        catch(error){
           toast.error(error.message)
           console.log(error);
        }
    }

     return (
  <div className="p-6">

    {/* Header */}
    <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[30px] p-8 text-white mb-8">

      <p className="uppercase tracking-[3px] text-cyan-100">
        Administration
      </p>

      <h1 className="text-4xl font-bold mt-2">
        Register New Doctor
      </h1>

      <p className="mt-3 text-cyan-100 max-w-2xl">
        Add experienced healthcare professionals to your platform and expand
        patient access to quality medical services.
      </p>

    </div>

    <form onSubmit={onSubmitHandler}>

      <div className="grid lg:grid-cols-[320px_1fr] gap-8">

        {/* Left Upload Panel */}
        <div className="bg-white rounded-[30px] shadow-lg border border-slate-100 p-8">

          <label
            htmlFor="doc-img"
            className="flex flex-col items-center justify-center border-2 border-dashed border-cyan-300 rounded-[25px] p-8 cursor-pointer hover:bg-cyan-50 transition"
          >

            <img
              src={
                docImg
                  ? URL.createObjectURL(docImg)
                  : assets.upload_area
              }
              alt=""
              className="w-32 h-32 rounded-full object-cover"
            />

            <p className="mt-5 text-slate-700 font-medium">
              Upload Doctor Photo
            </p>

            <p className="text-sm text-slate-500 mt-2 text-center">
              PNG, JPG or JPEG
            </p>

          </label>

          <input
            hidden
            id="doc-img"
            type="file"
            onChange={(e) => setDocImg(e.target.files[0])}
          />

          <div className="mt-8 bg-cyan-50 rounded-2xl p-5">

            <h3 className="font-semibold text-slate-800 mb-2">
              Quick Tips
            </h3>

            <ul className="text-sm text-slate-600 space-y-2">
              <li>• Use a professional photo</li>
              <li>• Complete all required fields</li>
              <li>• Verify doctor credentials</li>
            </ul>

          </div>

        </div>

        {/* Right Form */}
        <div className="space-y-6">

          {/* Basic Information */}
          <div className="bg-white rounded-[30px] shadow-lg border border-slate-100 p-8">

            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Basic Information
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Doctor Name"
                required
              />

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Doctor Email"
                type="email"
                required
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Password"
                type="password"
                required
              />

              <input
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Education"
                required
              />

            </div>

          </div>

          {/* Professional Details */}
          <div className="bg-white rounded-[30px] shadow-lg border border-slate-100 p-8">

            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Professional Details
            </h2>

            <div className="grid md:grid-cols-3 gap-5">

              <select
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
              >
                <option>General physician</option>
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Pediatricians</option>
                <option>Neurologist</option>
                <option>Gastroenterologist</option>
              </select>

              <select
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
              >
                <option>1 Year</option>
                <option>2 Year</option>
                <option>3 Year</option>
                <option>4 Year</option>
                <option>5 Year</option>
                <option>6 Year</option>
                <option>7 Year</option>
                <option>8 Year</option>
                <option>9 Year</option>
                <option>10 Year</option>
              </select>

              <input
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Consultation Fee"
                type="number"
                required
              />

            </div>

          </div>

          {/* Address */}
          <div className="bg-white rounded-[30px] shadow-lg border border-slate-100 p-8">

            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              Address
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              <input
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Address Line 1"
                required
              />

              <input
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                className="border border-slate-200 rounded-2xl px-4 py-3"
                placeholder="Address Line 2"
                required
              />

            </div>

          </div>

          {/* About */}
          <div className="bg-white rounded-[30px] shadow-lg border border-slate-100 p-8">

            <h2 className="text-2xl font-semibold text-slate-800 mb-6">
              About Doctor
            </h2>

            <textarea
              rows={6}
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full border border-slate-200 rounded-2xl p-4"
              placeholder="Write about doctor..."
              required
            />

          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:shadow-xl transition"
          >
            Register Doctor
          </button>

        </div>

      </div>

    </form>

  </div>
)
}

export default AddDoctor