import React, {useLayoutEffect} from 'react'
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { auth } from '../firebase/FirebaseAuth';
import { signInWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { useOutletContext } from 'react-router-dom';
import { useNavigate,Link } from 'react-router-dom'
import Button from '../components/Button/Button';


const signInUserWithFirebase = async(auth,email, password) => {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth,email,password);
        return userCredentials.user

    } 
        
    catch (error) {
        alert('Error signing in, no associated account.');
    }
};


const Login = () => {
    
    const navigate = useNavigate()
    const {state,dispatch} = useOutletContext()

    
    const LoginSchema = yup.object().shape({
        email : yup.string().email("Use email format eg. work@mail.com").required("email is required"),
        password :yup.string().required("Password is required")
    })
    
    const {register, handleSubmit, formState: {errors},reset} = useForm({
        resolver: yupResolver(LoginSchema)
    })
    
    const onSubmit = async (data) => {
        const currentUser = await signInUserWithFirebase(auth,data.email,data.password)
        dispatch({type:"SET_USER",payload:{currentUser:currentUser}})
        reset()
        navigate("/home")
    }
    
    return (
        <div>
            <Link to='/home'><h1>home</h1></Link>
            <h1 className='text-3xl font-bold text-left dark:text-white'>Sign in to your account</h1>
                <div className='my-6'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="email" className='font-semibold mb-1 dark:text-white '>Email</label>
                            <input className=' w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id="email" type="email" name='email' autoComplete="on" {...register("email")} />
                            <p className='dark:text-[#964747]'>{errors.email?.message}</p>
                        </div>
                        <div className='flex flex-col place-items-start mb-4'>
                            <label htmlFor="password" className='font-semibold mb-1 dark:text-white'>Password</label>
                            <input className=' w-full p-2 rounded-lg dark:bg-[#191d27] dark:text-zinc-500' id="password" type="password" name='password'  autoComplete="on"  {...register("password")}/>
                            <p className='dark:text-[#964747]'>{errors.password?.message}</p>
                        </div>
                        <Button style={{paddingTop:"9px", paddingBottom: "9px",paddingRight:"15px",paddingLeft:"15px"}}>Sign in</Button>
                        {/* <button type="submit" className="w-full p-2 rounded-md text-white bg-black ">Sign in</button> */}
                    </form>
                    
                    <h3 className='mt-2 dark:text-white' >Don't have an account? <Link to="/register"><span><strong className='text-cyan-400 dark:text-indigo-800'>Register here</strong></span></Link> </h3>
                    <Link to="/"><h3 className='dark:text-white'>home</h3></Link>
                </div>
        </div>
    )
}

export default Login
