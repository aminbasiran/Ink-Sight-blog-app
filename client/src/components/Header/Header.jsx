import React from 'react'
import HeaderProfile from './HeaderComponent/HeaderProfile' 
import HeaderTitle from './HeaderComponent/HeaderTitle'
import { BsMoonStarsFill } from "react-icons/bs";
import { CgSun } from "react-icons/cg";
import { useOutletContext } from 'react-router-dom';


const Header = ({children}) => {

    const {state,dispatch} = useOutletContext()

    const handleTheme = () => {    
        if (state.isDarkMode === true) {
            sessionStorage.setItem("dark", "false");
            document.documentElement.classList.remove('dark')
            dispatch({type:"SET_THEME",payload: {theme: false }})
        }

        else {
            sessionStorage.setItem("dark",true)
            document.documentElement.classList.add("dark")
            dispatch({type:"SET_THEME",payload: {theme: true }})
        }
    }


    return (
        <div className='flex flex-row justify-between place-items-center mb-2'>
            {state.isDarkMode ? <CgSun onClick={handleTheme} className='text-white'/> : <BsMoonStarsFill onClick={handleTheme} />}
            {children}
        </div>    
    )
}

Header.Title = HeaderTitle
Header.Profile = HeaderProfile



export default Header
