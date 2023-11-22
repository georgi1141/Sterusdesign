import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/GlobalAppContext";
import sewing from "../../../assets/images/sewing.jpg"

function Home() {

    const navigate = useNavigate()
    const { user } = useGlobalContext();

    return (
        <div className="landing-container">
            {user ? (
                <>
                    <div className="home-container">
                        <div className="welcome-container">
                            <h3> Hello {user.username}, what's next?</h3>
                            <ul>
                                <li> Browse our community projeces: <button onClick={() => { navigate('/projects') }}>Projects</button></li>
                                <li>Share your project with the community : <button onClick={() => { navigate('/add-project') }}>Share project</button></li>
                            </ul>
                        </div>
                        <div className="projects-container">
                            <h4>Most receant projects!</h4>
                            <p>TODO: Fetch last three added projects.</p>
                            <ul>
                                <li>Project 1</li>
                                <li>Project 2</li>
                                <li>Project 3</li>
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
