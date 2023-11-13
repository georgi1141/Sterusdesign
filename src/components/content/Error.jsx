import React from 'react'
import "./error.css"
import {  DislikeOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='error-container'>
        <h2>4 <span className='icon'><DislikeOutlined /></span>4</h2>
        <div className='text-container'>
        <p className='p-first'>The page that you are looking seems to have slipped out . . .</p>
        <p>We applogies for the disruption, please feel free to go back to our homepage.</p>
        
       <Link to={"/"}> <button>Go Back Home</button></Link>
       </div>
        
    </div>
  )
}

export default Error