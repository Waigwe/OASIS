import React, {useEffect} from 'react';
import gsap from "gsap";
import HeroSection from '../../HeroSection';
import IntroOverlay from '../../IntroOverlay';
import Services from '../../Services';
import TestimonialElement from '../../Testimonials/TestimonialElement';
import {homeObjOne} from './Data';

function Home() {

    useEffect(() => {
        let vh = window.innerHeight * .01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        //prevent flashing
        gsap.to("body", 0, {css: {visibility: "visible"}});

        //timeline
        const tl = gsap.timeline();
        tl.to('.overlay-top', 1.6, {
            height: 0,
            ease: 'expo.inOut',
            stagger: 0.4
        });
    }, []);

    


    return (
        <>
        <IntroOverlay/>
        <HeroSection {...homeObjOne}/>
        <Services/>
        <TestimonialElement/>
        </>
        
    )
}

export default Home
