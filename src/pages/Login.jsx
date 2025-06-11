import { useState } from 'react'
import bookLogo from '../assets/images/bookLogo.svg'
import eyeimg from '../assets/images/eyeimg.png'
import checkbox from '../assets/images/checkbox.png'
import google from '../assets/images/google.png'
import apple2 from '../assets/images/apple2.png'
import frame from '../assets/images/frame.png'

export default function Login(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    


    return(
        <section className='bg-primary h-screen'>
            <div className='flex text-white text-xl p-7'>
                <img src={bookLogo} alt="booklogo" />
                <h1>EchoBooks</h1>
            </div>

            <div className='flex justify-around items-center p-20'>
                <div className='bg-dark-border h-120 w-120 p-10 flex flex-col justify-center items-center rounded-md'>
                    <h1 className='text-white text-3xl'>Welcome Back !</h1>
                    <p className='text-white text-sm'>Login to your account</p>

                    <form action="" className='flex flex-col gap-5'>
                        <div className='flex border-2 h-12 w-90 rounded-sm  bg-white'>
                            <input type="email" name="email" id="email" required placeholder='Enter your email'/>
                        </div>

                        <div className='flex p-2 border-2 h-12 w-90 rounded-sm space-x-35 bg-white'>
                            <input type="password" name="password" id="passward" required placeholder='Enter your password' />
                            <img src={eyeimg} alt="" className='h-6 w-6' />
                        </div>

                        <div>
                            <button className='rounded-3xl h-10 w-90 bg-primary text-white' type="submit">Log In</button>
                        </div>

                        <div className='flex space-x-55 text-xs'>
                            <div className='flex'>
                                <img className='h-4 w-4' src={checkbox} alt="" />
                                <p>Remember me</p>
                            </div> 
                            <p className='underline text-white'>Forgot password?</p>
                        </div>

                        <div className='flex space-x-3 text-white text-xs'>
                            <hr className='w-35 mt-3' />
                            <p>or continue with</p>
                            <hr className='w-35 mt-3'/>
                        </div>

                        <div className='flex space-x-12'>
                            <button className='flex h-10 w-45 rounded-3xl bg-primary items-center justify-center text-white'>
                                <img className='h-5 w-5' src={google} alt="" />
                                Google
                            </button>
                            <button className='flex h-10 w-45 rounded-3xl bg-primary items-center justify-center text-white'>
                                <img className='h-7 w-7' src={apple2} alt="" />
                                Apple
                            </button>
                        </div>
                        <p>Don't have an account? Sign Up</p>

                    </form>
                </div>

                <div className='h-40 w-60'>
                    <img src={frame} alt="" />
                </div>
            </div>
            
        </section>
    )
}