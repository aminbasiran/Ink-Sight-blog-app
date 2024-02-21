import React, {useReducer,useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'
import { auth } from '../firebase/FirebaseAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { arrayPost } from '../testData'
import { myBlog } from '../myBlog'
import Container from '../components/Container/Container'

const initialState = {
    user : null,
    userPosts : [...myBlog],
    homePosts : [...arrayPost],
    isDarkMode : false
}

const reducer = (state,action) => {
    switch(action.type){
        case "SET_USER":
            return {...state, user: action.payload.currentUser}

        case "SET_USER_POSTS":
            return {...state, userPosts: [...state.userPosts, action.payload.userPosts]}

        case "SET_HOME_POSTS":
            return {...state, homePosts: [...state.homePosts, action.payload.homePosts]}

        case "SET_THEME":
            return {...state, isDarkMode: action.payload.theme}
            

        default:
            throw new Error('Invalid action type');
    }
}


const Root = () => {

    // CREATE GLOBAL STATE MANAGEMENT HERE AND PASS THRU CONTEXT IN OUTLET FOR CHILDREN
    const [state,dispatch] = useReducer(reducer,initialState)


    return (
        
            <Container>
                <Outlet context={{state,dispatch}}/>
            </Container>
        
    )
}

export default Root
