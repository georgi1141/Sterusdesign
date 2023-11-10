import { Menu } from "antd"
import  './navbar.css'
import {Link} from "react-router-dom"


function Navbar() {

  return (
   <>
     <Menu className='menu' >
    <Menu.Item><Link to="/">Home</Link></Menu.Item>
    <Menu.Item><Link to="/projects">Projects</Link></Menu.Item>
    <Menu.Item><Link to="/contct">Contact Us</Link></Menu.Item>
    <Menu.Item><Link to="/about">About Us</Link></Menu.Item>
    <Menu.Item><Link to="/login">Login</Link></Menu.Item>
    <Menu.Item><Link to="/register">Register</Link></Menu.Item>
    <Menu.Item danger="true" ><Link to="/register">Logout</Link></Menu.Item>
      </Menu>
   </>
  )
}

export default Navbar