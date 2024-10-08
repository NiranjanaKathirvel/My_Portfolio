import React from 'react';
import './Home.css'; 
import profileImage from '../profile.jpg'; 

const Home = () => {
  return (
    <section id="home">
      <div className="home-content">
        <div className="home-text">
          <h2 className="typewriter">Welcome to My Portfolio</h2>
          <p>I'm a Front End developer passionate about creating amazing web experiences.</p>
        </div>
        <div className="home-image">
          <img src={profileImage} alt="Your Name" style={{width: '200px', height: '200px'}} />
        </div>
      </div>
    </section>
  );
};

export default Home;
