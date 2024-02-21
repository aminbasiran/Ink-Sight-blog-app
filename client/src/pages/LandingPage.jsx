import React from 'react'
import Button from '../components/Button/Button'
import { Link, useOutletContext } from 'react-router-dom'
import { useLayoutEffect } from 'react';

const LandingPage = () => {

    const {state,dispatch} = useOutletContext()

    useLayoutEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("dark")) === true){
            document.documentElement.classList.add("dark")
            dispatch({type:"SET_THEME", payload: {theme: true}})
        }
    
        else{
            document.documentElement.classList.remove("dark")
            dispatch({type:"SET_THEME", payload: {theme: false}})
        }
    },[])




    return (
        <div className='w-full'>
            <h1 className='text-left text-7xl font-bold animate-fade-left animate-once animate-duration-1000 animate-ease-in-out dark: dark:text-[#d9e4e9]'>Ink-</h1>
            <h1 className='text-left text-7xl font-bold animate-fade-left animate-once animate-duration-1000 animate-delay-700 animate-ease-in-out  dark:text-[#d9e4e9]'>Sight</h1>
            <h2 className='text-left text-zinc-700 text-semibold text-md font-semibold my-4 animate-fade-left animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out dark:text-[#d9e4e9]'>Write and publish your stories within seconds.</h2>
            <div className='flex gap-4 justify-end mt-12 animate-fade-right animate-once animate-duration-1000 animate-delay-1000 animate-ease-in-out'>
                <Link to="/register">
                    <Button style={{paddingTop:"9px", paddingBottom: "9px",paddingRight:"15px",paddingLeft:"15px"}}>Register</Button>
                </Link>
                <Link to="/login">
                    <Button style={{paddingTop:"9px", paddingBottom: "9px",paddingRight:"15px",paddingLeft:"15px"}}>Login</Button>
                </Link>
            </div>
        </div>
    )
}

export default LandingPage
