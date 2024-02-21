import React from 'react'
import { useOutletContext, Navigate, Outlet} from "react-router-dom";

const RequireAuth = () => {

    const {state,dispatch} = useOutletContext()

    return (
        <>
            {state.user ? <Outlet context={{state,dispatch}}/> : <Navigate to="/login" replace:true/> }
        </>
    )
}

export default RequireAuth
