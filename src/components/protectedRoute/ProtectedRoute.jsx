import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({isLoggedIn, children}) => isLoggedIn ? children : <Navigate to={'/login'} />;

export default ProtectedRoute