import React, {useReducer,useLayoutEffect,useEffect} from 'react'
import {Outlet } from 'react-router-dom'
import { auth } from '../firebase/FirebaseAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { arrayPost } from '../testData'
import { myBlog } from '../myBlog'
import Container from '../components/Container/Container'

const initialState = {
    user : null,
    isLoggedIn : false,
    userPosts : [...myBlog],
    homePosts : [...arrayPost],
    isDarkMode : false
}

const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.payload.currentUser}

        case "SET_LOGGED_IN":
            return {...state, isLoggedIn: action.payload.isLoggedIn}

        case "SET_USER_POSTS":
            return {...state, userPosts: [...state.userPosts, action.payload.userPosts]}

        case "SET_HOME_POSTS":
            return {...state, homePosts: [...state.homePosts, action.payload.homePosts]}

        case "SET_THEME":
            return {...state, isDarkMode: action.payload.isDarkMode}
            

        default:
            throw new Error('Invalid action type');
    }
}


const Root = () => {


    
    useLayoutEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,initializeUser)
        return unsubscribe 
    },[])

    async function initializeUser(user){
        if (user){  // RUNS IF USER LOGS IN
            console.log(user)
            dispatch({type:"SET_USER", payload: {currentUser: user}})
            dispatch({type:"SET_LOGGED_IN", payload: {isLoggedIn: true}})
        }
        
        else{  // RUNS IF CLICK LOG OUT
            console.log("no one")
            dispatch({type:"SET_USER", payload: {currentUser: null}})
            dispatch({type:"SET_LOGGED_IN", payload: {isLoggedIn: false}})
        }
    }

    useLayoutEffect(()=>{
        if(JSON.parse(sessionStorage.getItem("dark")) === true){
            document.documentElement.classList.add("dark")
            dispatch({type:"SET_THEME", payload: {isDarkMode: true}})
        }
    
        else{
            document.documentElement.classList.remove("dark")
            dispatch({type:"SET_THEME", payload: {theme: false}})
        }
    },[])

    // CREATE GLOBAL STATE MANAGEMENT HERE AND PASS THRU CONTEXT IN OUTLET FOR CHILDREN
    const [state,dispatch] = useReducer(reducer,initialState)


    return (
            <Container>
                <Outlet context={{state,dispatch}}/>
            </Container>
        
    )
}

export default Root
