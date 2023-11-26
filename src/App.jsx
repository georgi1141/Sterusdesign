import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/content/Home/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/content/Projects/Projects";
import Login from "./components/content/Login/Login";
import Register from "./components/content/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import Error from "./components/content/Error/Error";
import { useEffect } from "react";
import { useGlobalContext } from "./components/globalContext/GlobalAppContext";
import AddNewProject from "./components/content/AddNewProject/AddNewProject";
import ProjectDetails from "./components/content/ProjectDetails.jsx/ProjectDetails";
import MyProjects from "./components/content/MyProjects/MyProjects";

function App() {

  // Check if there is user in localStorage, in case the user refreshes the page or for some reason reloads, and when he comes back stais logged in  (!!not sure if that is a correct approach!!)
  
  const {user,setUser} =useGlobalContext()
  useEffect(()=>{

    const localStorageUser = localStorage.getItem('user')
    if(localStorageUser){
      setUser(JSON.parse(localStorageUser).user)
    }
  },[])

 
  return (
    <div className="site-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/projects/:projectId" element={<ProjectDetails />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/add-project" element={<AddNewProject />}></Route>
          <Route path="/my-projects" element={<MyProjects />}></Route>
          <Route path="/*" element={<Error />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
