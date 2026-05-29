import React from "react";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const { token, setToken } = useContext(AppContext);
   const {backendUr}=useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    console.log("inside submit fn 1");
    e.preventDefault();

    try {
      console.log("inside submit fn2");
      console.log(state);

      if (state === "Sign Up") {
        const { data } = await axios.post(
          backendUrl + "/api/user/register",
          { name, password, email }
        );

        console.log("after response from backend");

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(
          backendUrl + "/api/user/login",
          { email, password }
        );

        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      console.log("error in cathch of frontend");
      console.log(error.message);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-cyan-100 flex items-center justify-center px-4 py-10">

      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Section */}
        <div className="hidden lg:block">

          <p className="text-primary font-semibold uppercase tracking-[5px] mb-4">
            Welcome To Prescripto
          </p>

          <h1 className="text-5xl font-bold text-slate-800 leading-tight">
            Healthcare
            <br />
            Made Simple
          </h1>

          <p className="mt-6 text-slate-600 text-lg leading-8 max-w-lg">
            Book appointments with trusted doctors, manage your healthcare
            journey, and access quality medical care through one modern
            platform.
          </p>

          <div className="mt-10 flex gap-4 flex-wrap">

            <div className="bg-white/70 backdrop-blur-md rounded-3xl px-6 py-5 shadow-lg">
              <p className="text-3xl font-bold text-blue-600">500+</p>
              <p className="text-slate-600">Specialists</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl px-6 py-5 shadow-lg">
              <p className="text-3xl font-bold text-cyan-600">10K+</p>
              <p className="text-slate-600">Patients</p>
            </div>

            <div className="bg-white/70 backdrop-blur-md rounded-3xl px-6 py-5 shadow-lg">
              <p className="text-3xl font-bold text-indigo-600">24/7</p>
              <p className="text-slate-600">Support</p>
            </div>

          </div>
        </div>

        {/* Right Section */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl rounded-[36px] p-8 md:p-10 w-full max-w-md mx-auto"
        >

          <div className="mb-8">
            <h2 className="text-4xl font-bold text-slate-800">
              {state === "Sign Up" ? "Create Account" : "Welcome Back"}
            </h2>

            <p className="text-slate-500 mt-3">
              {state === "Sign Up"
                ? "Create your account and start booking appointments."
                : "Login to continue managing your healthcare journey."}
            </p>
          </div>

          {state === "Sign Up" && (
            <div className="mb-5">
              <label className="block text-slate-700 font-medium mb-2">
                Full Name
              </label>

              <input
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div className="mb-5">
            <label className="block text-slate-700 font-medium mb-2">
              Email Address
            </label>

            <input
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-slate-700 font-medium mb-2">
              Password
            </label>

            <input
              className="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white py-3.5 rounded-2xl font-semibold shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
          >
            {state === "Sign Up" ? "Create Account" : "Login"}
          </button>

          <div className="mt-8 text-center text-slate-600">

            {state === "Sign Up" ? (
              <p>
                Already have an account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-blue-600 font-semibold cursor-pointer hover:text-cyan-600 transition-all"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                New to Prescripto?{" "}
                <span
                  onClick={() => setState("Sign Up")}
                  className="text-blue-600 font-semibold cursor-pointer hover:text-cyan-600 transition-all"
                >
                  Create Account
                </span>
              </p>
            )}

          </div>

        </form>

      </div>
    </div>
  );
};

export default Login;