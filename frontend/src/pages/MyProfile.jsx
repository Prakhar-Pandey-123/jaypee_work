import React, {  useState,useEffect } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import {toast} from "react-toastify"
import axios from "axios"

const MyProfile = () => {

  const {userData,setUserData,token,backendUrl,loadUserProfileData}=useContext(AppContext);

  const [isEdit, setIsEdit] = useState(false)
const [image,setImage]=useState(false);

const updateUserProfileData=async()=>{
  try{
    const formData=new FormData()

    formData.append('name',userData.name);
    formData.append('phone',userData.phone);
    formData.append('address',JSON.stringify(userData.address));
    formData.append('gender',userData.gender);
    formData.append('dob',userData.dob);

    image && formData.append('image',image);

    const {data}=await axios.post(backendUrl+'/api/user/update-profile',formData,{header:{
      token:token
    }})

    if(data.success){
      toast.success(data.message)
      await loadUserProfileData();
      setIsEdit(false);
      setImage(false)
    }
    else{
      toast.error(data.message)
    }
  }
  catch(error){
    console.log(error)
    toast.error(error.message);
  }
}
console.log(userData);

  return userData && (
  <div className="min-h-screen bg-gradient-to-b from-sky-50 via-blue-50 to-cyan-50 px-4 md:px-8 py-10">

    {/* Header */}
    <div className="text-center mb-12">
      <p className="text-primary font-semibold uppercase tracking-[5px]">
        Personal Profile
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4">
        My Account
      </h1>

      <p className="max-w-2xl mx-auto mt-5 text-slate-600 text-lg">
        Manage your personal information, contact details, and healthcare
        preferences in one secure place.
      </p>
    </div>

    <div className="max-w-6xl mx-auto">

      <div className="bg-white/70 backdrop-blur-md rounded-[36px] shadow-2xl border border-blue-100 overflow-hidden">

        <div className="grid lg:grid-cols-[320px_1fr]">

          {/* Left Profile Section */}
          <div className="bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-8 text-center">

            {isEdit ? (
              <label htmlFor="image">
                <div className="relative inline-block cursor-pointer">

                  <img
                    className="w-44 h-44 object-cover rounded-full border-4 border-white shadow-xl mx-auto opacity-90"
                    src={
                      image
                        ? URL.createObjectURL(image)
                        : userData.image
                    }
                    alt=""
                  />

                  <div className="absolute bottom-3 right-3 bg-white rounded-full p-2 shadow-lg">
                    <img
                      className="w-6"
                      src={image ? "" : assets.upload_icon}
                      alt=""
                    />
                  </div>

                </div>

                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
            ) : (
              <img
                className="w-44 h-44 object-cover rounded-full border-4 border-white shadow-xl mx-auto"
                src={assets.profile_pic}
                alt=""
              />
            )}

            <div className="mt-8">

              {isEdit ? (
                <input
                  className="bg-white/20 backdrop-blur-md text-white text-center text-3xl font-bold rounded-xl px-4 py-2 w-full outline-none"
                  type="text"
                  value={userData.name}
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      name: e.target.value,
                    }))
                  }
                />
              ) : (
                <h2 className="text-3xl font-bold text-white">
                  {userData.name}
                </h2>
              )}

              <p className="text-blue-100 mt-2">
                Patient Account
              </p>

            </div>
          </div>

          {/* Right Content */}
          <div className="p-8 md:p-10">

            {/* Contact Section */}
            <div className="mb-10">

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  📧
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  Contact Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-blue-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">
                    Email Address
                  </p>

                  <p className="font-medium text-blue-600 break-all">
                    {userData.emailid}
                  </p>
                </div>

                <div className="bg-cyan-50 rounded-2xl p-5">
                  <p className="text-sm text-slate-500 mb-2">
                    Phone Number
                  </p>

                  {isEdit ? (
                    <input
                      className="bg-white px-3 py-2 rounded-lg w-full outline-none"
                      type="text"
                      value={userData.phone}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                    />
                  ) : (
                    <p className="font-medium text-slate-700">
                      {userData.phone}
                    </p>
                  )}
                </div>

              </div>

              {/* Address */}
              <div className="bg-slate-50 rounded-2xl p-5 mt-6">

                <p className="text-sm text-slate-500 mb-3">
                  Address
                </p>

                {isEdit ? (
                  <div className="flex flex-col gap-3">

                    <input
                      className="bg-white px-3 py-2 rounded-lg outline-none"
                      value={userData.address.line1}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line1: e.target.value,
                          },
                        }))
                      }
                      type="text"
                    />

                    <input
                      className="bg-white px-3 py-2 rounded-lg outline-none"
                      value={userData.address.line2}
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          address: {
                            ...prev.address,
                            line2: e.target.value,
                          },
                        }))
                      }
                      type="text"
                    />

                  </div>
                ) : (
                  <p className="text-slate-600 leading-7">
                    {userData.address.line1}
                    <br />
                    {userData.address.line2}
                  </p>
                )}

              </div>

            </div>

            {/* Basic Information */}
            <div>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                  👤
                </div>

                <h3 className="text-2xl font-bold text-slate-800">
                  Basic Information
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">

                <div className="bg-indigo-50 rounded-2xl p-5">

                  <p className="text-sm text-slate-500 mb-2">
                    Gender
                  </p>

                  {isEdit ? (
                    <select
                      className="bg-white px-3 py-2 rounded-lg outline-none"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          gender: e.target.value,
                        }))
                      }
                      value={userData.gender}
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <p className="font-medium text-slate-700">
                      {userData.gender}
                    </p>
                  )}

                </div>

                <div className="bg-purple-50 rounded-2xl p-5">

                  <p className="text-sm text-slate-500 mb-2">
                    Date of Birth
                  </p>

                  {isEdit ? (
                    <input
                      className="bg-white px-3 py-2 rounded-lg outline-none"
                      type="date"
                      onChange={(e) =>
                        setUserData((prev) => ({
                          ...prev,
                          dob: e.target.value,
                        }))
                      }
                      value={userData.dob}
                    />
                  ) : (
                    <p className="font-medium text-slate-700">
                      {userData.dob}
                    </p>
                  )}

                </div>

              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10">

              {isEdit ? (
                <button
                  onClick={() => {
                    updateUserProfileData();
                  }}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Save Changes
                </button>
              ) : (
                <button
                  onClick={() => setIsEdit(true)}
                  className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white px-10 py-3 rounded-full font-medium shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  Edit Profile
                </button>
              )}

            </div>

          </div>
        </div>
      </div>

    </div>
  </div>
);
}

export default MyProfile
