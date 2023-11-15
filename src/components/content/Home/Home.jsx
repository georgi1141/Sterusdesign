import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../globalContext/GlobalAppContext";
import sewing from "../../../assets/images/sewing.jpg"

function Home() {

  const { user } = useGlobalContext();

  return (
    <div className="landing-container">
      {user ? (
        <>Complete page if there is user logged in!</>
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
            
                <img src={sewing} alt="man sewing" className="img"  />
            
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
