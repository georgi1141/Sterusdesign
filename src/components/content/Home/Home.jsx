import React from 'react'
import "./home.css"
import {Link} from "react-router-dom"
import sterus from "../../../assets/images/IMG_7965.jpg"

function Home() {
  return (
    <div className="landing-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Explore Unique Car Interiors</h1>
          <p className="hero-subtitle">Discover and showcase stunning car interiors</p>
          <Link to={"/login"}><a className="cta-button">Start Your Journey</a></Link>
          
        </div>
      </section>



    </div>
  );
};

export default Home