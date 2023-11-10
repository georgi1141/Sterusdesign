import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    <ul>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
    </ul>
  )
}

export default Navbar