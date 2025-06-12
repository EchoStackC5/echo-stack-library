import bookLogo from "../assets/images/bookLogo.svg";
import eye from "../assets/images/eye.png";
import google from "../assets/images/google.png";
import apple from "../assets/images/apple.png";
import bookstacks from "../assets/images/bookstack.png"
import { useState } from "react";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);
  const toggleConfirm = () => setShowConfirm((prev) => !prev);

  return (
    <section className=" bg-primary p-4 flex flex-col items-center justify-center">
  {/* EchoBooks Header - which isoutside the form */}
  <div className="flex space-x-2 mb-6 mr-290 mt-6">
    <img src={bookLogo} alt="EchoBooks Logo" className="h-8 w-8" />
    <h3 className="text-xl font-bold text-white">EchoBooks</h3>
  </div>

  {/* Form place */}
 <div className="flex">
     <div className=" w-full max-w-md bg-[#436FA3] rounded-xl shadow-lg p-6">
    {/* my Header */}
    <h1 className="text-2xl font-bold mb-1 text-white">Create An Account</h1>
    <p className="text-sm text-gray-300 mb-6">Manage your library with us</p>

    <form className="space-y-4">
      {/* A person's First and Last Name */}
      <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 pl-0">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          required
          className="flex-1 bg-white border border-gray-300 rounded p-2 w-40 outline-none"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          required
          className="flex-1 bg-white border border-gray-300 rounded p-2 w-40 outline-none"
        />
      </div>

      {/* The Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter Your Email"
        required
        className="w-full bg-white border border-gray-300 rounded p-2 outline-none"
      />

      {/* The Password */}
      <div className="flex items-center bg-white border border-gray-300 rounded p-3 pr-6">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Enter Your Password"
          required
          className="flex-1 bg-transparent outline-none"
        />
        <img
          src={eye}
          alt="Toggle visibility"
          className="h-6 w-6 cursor-pointer"
          onClick={togglePassword}
        />
      </div>

      {/* Confirm Password */}
      <div className="flex items-center bg-white border border-gray-300 rounded p-3 pr-6 ">
        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Your Password"
          required
          className="flex-1 bg-transparent outline-none"
        />
        <img
          src={eye}
          alt="Toggle visibility"
          className="h-6 w-6 cursor-pointer"
          onClick={toggleConfirm}
        />
      </div>

      {/* Create Account Button */}
      <button
        type="submit"
        className="w-full bg-primary text-white text-sm py-3 rounded-3xl hover:bg-primary-dark transition"
      >
        Create Account
      </button>

      {/* Divider */}
      <div className="flex items-center space-x-2 text-sm text-gray-400 my-2">
        <hr className="flex-1 border-gray-300" />
        <span>or continue with</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      {/* OAuth Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
        <button className="flex items-center justify-center bg-none text-black py-2 rounded-3xl w-full sm:w-[48%] border border-gray-300 outline-1">
          <img src={google} alt="Google" className="h-5 w-5 mr-2" />
          Google
        </button>
        <button className="flex items-center justify-center bg-darkestHeading text-white py-2 rounded-3xl w-full sm:w-[48%]">
          <img src={apple} alt="Apple" className="h-4 w-4 mr-2" />
          Apple
        </button>
      </div>

      <p className="text-center text-sm mt-4 text-gray-300">
        Already have an account?{" "}
        <span className="text-primary hover:underline cursor-pointer">Login</span>
      </p>
    </form>
  </div>
  <div className="hidden sm:block">
    <img src={bookstacks} alt="" className="h-auto w-150 pl-10 pt-10" />
  </div>
 </div>
</section>


  );
}
