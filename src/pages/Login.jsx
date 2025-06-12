
import { useState } from 'react'
import bookLogo from '../assets/images/bookLogo.svg'
import eyeimg from '../assets/images/eyeimg.png'
import checkbox from '../assets/images/checkbox.png'
import google from '../assets/images/google.png'
import apple2 from '../assets/images/apple2.png'
import frame from '../assets/images/frame.png'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  return (
    <section className=" bg-primary p-4 flex flex-col items-center justify-center h-screen">

      {/* EchoBooks Header - which is outside the form */}
      <div className="flex space-x-2 mb-6 mr-290 ">
        <img src={bookLogo} alt="EchoBooks Logo" className="h-8 w-8" />
        <h3 className="text-xl font-bold text-white">EchoBooks</h3>
      </div>

      <div className="flex">
        <div className=" w-full max-w-md bg-[#436FA3] rounded-xl shadow-lg p-6">
          
          <h1 className="text-2xl font-bold mb-1 text-white">Welcome Back !</h1>
          <p className="text-sm text-gray-300 mb-6">Login to your account</p>

          <form className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
              className="w-full bg-white border border-gray-300 rounded p-2 outline-none"
            />

            <div className="flex items-center bg-white border border-gray-300 rounded p-3 pr-6">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                required
                className="flex-1 bg-transparent outline-none"
              />
              <img
                src={eyeimg}
                alt="Toggle visibility"
                className="h-6 w-6 cursor-pointer"
                onClick={togglePassword}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white text-sm py-3 rounded-3xl hover:bg-primary-dark transition"
            >
              Login
            </button>

            <div className='flex space-x-40 text-xs'>
              <div className='flex'>
                <img className='h-4 w-4' src={checkbox} alt="" />
                <p>Remember me</p>
              </div>
              <p className='underline text-white'>Forgot password?</p>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400 my-2">
              <hr className="flex-1 border-gray-300" />
              <span>or continue with</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:justify-between">
              <button className="flex items-center justify-center bg-none text-white py-2 rounded-3xl w-full sm:w-[48%] border border-gray-300 outline-1">
                <img src={google} alt="Google" className="h-5 w-5 mr-2" />
                Google
              </button>
              <button className="flex items-center justify-center bg-darkestHeading text-white py-2 rounded-3xl w-full sm:w-[48%]">
                <img src={apple2} alt="Apple" className="h-4 w-4 mr-2" />
                Apple
              </button>
            </div>

            <p className="text-center text-sm mt-4 text-gray-300">
              Don't have an account? Sign up{" "}
              <span className="text-primary hover:underline cursor-pointer"></span>
            </p>
          </form>
        </div>
        <div className="hidden sm:block">
          <img src={frame} alt="" className="h-auto w-150 pl-10 pt-10" />
        </div>
      </div>
    </section>


  );
}