import React, { useEffect, useState } from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/GlobalAppContext";
import sewing from "../../../assets/images/sewing.jpg"
import { getAll } from "../../../services/projectService";
import Project from "../Project/Project";

function Home() {

    const navigate = useNavigate()
    const { user } = useGlobalContext();

    const [projects,setProjects] = useState([])

    useEffect(()=>{
        getAll()
        .then(res=> setProjects(Object.values(res)))
        .catch(err=>console.log(err))
    },[])

    console.log(projects)
    return (
        <div className="landing-container">
            {user ? (
                <>
                    <div className="home-container">
                        <div className="welcome-container">
                            <h3 > Hello {user.username}, what's next?</h3>
                            <ul>
                            <li> Browse our community projeces: <Link to={'/projects'}><button>Projects</button></Link></li>
                                <li>Share your project with the community : <button onClick={() => { navigate('/add-project') }}>Share project</button></li>
                            </ul>
                        </div>
                        <div className="projects-container">
                            <h4>Check out most recent projects!</h4>
                            <ul className="projects-ul">
                                {projects.map(project=><Project className="project" key={project._id} {...project} />)}
                            </ul>

                        </div>
                    </div>
                    

                </>
            ) : (
                <>
                    <section className="hero">
                        <div className="hero-content">
                            <h1 className="hero-title">Explore <span className="unique">Unique</span> Car Interiors</h1>
                            <p className="hero-subtitle">
                                We are team of ambitious designers with more than 10 years of
                                experience who love what they do.Our aim is to create unique and
                                outstanding solutions for your individual interior and exterior
                                needs.This is not just a job for us. This is our passion!Have
                                fun and get inspired!
                            </p>
                            <div className="link-btn">
                                <Link to={"/register"} >
                                    <button className="cta-button">Start Your Journey</button>
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section className="hero-right">

                        <img src={sewing} alt="man sewing" className="img" />

                    </section>
                </>
            )}
        </div>
    );
}

export default Home;
