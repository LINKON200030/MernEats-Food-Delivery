import React from 'react';
import HeroImg from '../../assets/images/hero.png'

const Hero = () => {
    return (
        <div className="hero relative ">
        <img src={HeroImg} className="hero-img w-full max-h-[600px] object-cover" />
        <div className="hero-overlay bg-opacity-60"></div>
        </div>
    );
};

export default Hero;
