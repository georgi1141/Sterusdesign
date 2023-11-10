import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

import './App.css'


function App() {
 

    return (
        <div className="site-container">

            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<AboutUs/>}></Route>
            </Routes>

            <Footer/>
    
      </div>
        
    );
}

export default App;
