

import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

const StudentRoute = ({ children }) => {
    const { user } = useSelector((state)=>state.auth);
    return user?.role === "student" ? children : <Navigate to={"/admin"}/>
}

export default StudentRoute