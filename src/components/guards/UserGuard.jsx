import React from 'react'
import { useGlobalContext } from '../globalContext/GlobalAppContext'
import { Navigate } from 'react-router-dom'


function UserGuard(props) {

    const {user} = useGlobalContext()

if(!user){
   
    return <Navigate to={'/login'}/>;
}

  return (
    <>
        {props.children}
    </>
  )
}

export default UserGuard