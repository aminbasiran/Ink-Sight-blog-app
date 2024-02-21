import React from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../firebase/FirebaseAuth';
import { Link } from 'react-router-dom';
import Button from '../components/Button/Button';

const registerUserWithFirebase = async(auth,email,password) => {
    try {
        await createUserWithEmailAndPassword(auth,email,password);

    //  HANDLE ERROR
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
    }
}


const Register = () => {


    const registerSchema = yup.object().shape({
        email: yup.string().email("email format").required("email is required"),
        username: yup.string().min(6,"Password must be 6 characters long").max(10,"Password must not exceed 10 characters long").required("Username is required"),
        password : yup.string().min(8, "Password must be 8 characters long").required("Password is required"),
        confirm_password : yup.string().oneOf([yup.ref('password')], 'Passwords does not match').required('Please confirm your password')})

    const {register, handleSubmit,formState: { errors },reset} = useForm(
        {resolver : yupResolver(registerSchema)}
    )

    const onSubmit =  (data) => {
        registerUserWithFirebase(auth,data.email,data.password) 
        reset()
    }


    return (
        <div className=''>
                <h1 className='text-3xl font-bold text-left dark:text-[#d9e4e9]'>Register your account</h1>
                <div className='my-6'>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="email" className='font-semibold mb-1 dark:text-[#d9e4e9]'>Email</label>
                            <input className='  w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id="email" type="email" name='email' autoComplete="on" {...register("email")}/>
                            <p className='dark:text-[#964747]'>{errors.email?.message}</p>
                        </div>
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="username" className='font-semibold mb-1 dark:text-[#d9e4e9] '>Username</label>
                            <input className='  w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id='username' type="text" name='username'  autoComplete="on" {...register("username")}/>
                            <p className='dark:text-[#964747]'>{errors.username?.message}</p>
                        </div>
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="password" className='font-semibold mb-1 dark:text-[#d9e4e9]'>Password</label>
                            <input className=' w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id="password" type="password" name='password' autoComplete="on" {...register("password")}/>
                            <p className='dark:text-[#964747]'>{errors.password?.message}</p>
                        </div>
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="confirm_password" className='font-semibold mb-1  dark:text-[#d9e4e9]'>Confirm Password</label>
                            <input className='  w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id='confirm_password' type="password" name='confirm_password' autoComplete="on"  {...register("confirm_password")} />
                            <p className='dark:text-[#964747]'>{errors.confirm_password?.message}</p>
                        </div>
                        <Button style={{paddingTop:"9px", paddingBottom: "9px",paddingRight:"15px",paddingLeft:"15px"}}>Create an account</Button>
                        {/* <button className="w-full p-2 rounded-md text-white bg-black">Create an account</button> */}
                    </form>
                    <h3 className='mt-2 dark:text-[#d9e4e9]'>Already have an account? <Link to="/login"><span><strong className='text-cyan-400 dark:text-indigo-800'>Sign in</strong></span></Link> </h3>
                    <Link to="/"><h3 className='dark:text-[#d9e4e9]'>home</h3></Link>
                </div>
        </div>
    )
}

export default Register
