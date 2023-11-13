import React from 'react'
import { useGlobalContext } from '../global/GlobalAppContext'



function Profile() {

  const {user} = useGlobalContext()
  console.log(user)
  return (

    <div>
      {user && <> <div>Email :{user.email}</div>
      <div> username:{user.username}</div></>}
     
      
    </div>
    
    
    
  )
}

export default Profile 