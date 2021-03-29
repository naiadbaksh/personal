import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';
import Navbar from './Navbar'
import Typical from 'react-typical'

function HeroSection() {
    return (
        <>
        <div className='hero-container'>  
            <div className='hero-img'> 
            <div className='tagline'>
            <h1 className='tag1'>I'm Naiad</h1>
            <Typical
            className='tag2'
            loop={Infinity}
            wrapper='h2'
            steps={[
                'a software engineer',
                1000,
                'a software engineer;',
                1000,
                'a < software engineer />',
                1000,
                'a { software engineer }',
                1000,
                'a x = software, y = engineer f"{x} {y}"',
                1000
            ]}
            />
           </div>
           </div>
           </div>
           </>
    );
}

export default HeroSection;

