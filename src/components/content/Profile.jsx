import React from 'react'
import { useGlobalContext } from '../globalContext/GlobalAppContext'



function Profile() {

  const {user} = useGlobalContext()
  
  return (

    <div>
      {user && <> <div>Email :{user.email}</div>
      <div> username:{user.username}</div></>}
     
      
    </div>
    
    
    
  )
}

export default Profile 