import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
// import heroVid from'../hero-vid.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <div className='hero-bg'>
      </div>
      {/* <video src={heroVid} autoPlay loop muted /> */}
      <h1>Demolition & Excavation Company</h1>
      <p>Serving Amherst, Va and surrouding areas</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline'
        buttonSize='btn--large'>
            Start Here
        </Button>
        <Button className='btns' buttonStyle='btn--primary'
        buttonSize='btn--large'>
            Watch Video<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
