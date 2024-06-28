import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Error404 = () => {

    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 2000);
    },)
    
  return (
    <h1>Error404 : redirecting to Home Page</h1>
  )
}

export default Error404