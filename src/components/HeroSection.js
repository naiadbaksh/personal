import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import Navbar from './Navbar'

function HeroSection() {
    return (
        <>
        <div className='hero-container'>   
           {/* <Navbar/> */}
           <video src='/videos/video-1.mp4' autoPlay loop muted />
           <h1>Naiad Baksh</h1>
           <p>Welcome to my website.</p>
           <div className='hero-btns'>
               <Button className='btns' 
               buttonStyle='btn--outline' 
               buttonSize='btn--large'
               >
               Get Started
               </Button>
               <Button className='btns' 
               buttonStyle='btn--primary' 
               buttonSize='btn--large'
               >
               Watch Trailer <i className='far fa-play-circle'></i>
               </Button>
           </div>  
           </div>
           </>
    );
}

export default HeroSection;
