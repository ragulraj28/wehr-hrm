import React, { useContext } from 'react'
import { Navigate } from 'react-router'
import { LoginContext } from '../../contexts/LoginContext';

const ProtectedRoute = ({children}) => {

    const { userLoggedIn } = useContext(LoginContext);
    
    return userLoggedIn ? children : <Navigate to={'/login'} />

}

export default ProtectedRoute