import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/content/Home";
import AboutUs from "./components/content/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/content/Projects";
import Contacts from "./components/content/Contacts";
import Login from "./components/content/Login";
import Register from "./components/content/Register";
import Profile from "./components/content/Profile";
import Error from "./components/content/Error";

function App() {

 
  return (
    <div className="site-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/contacts" element={<Contacts />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
