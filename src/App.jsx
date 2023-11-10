import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar />
        <Routes> 
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<AboutUs/>} />
        </Routes>

      <Footer />
    </>
  );
}

export default App;
