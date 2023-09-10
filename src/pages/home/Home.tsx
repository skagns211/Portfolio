import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FirstSection from './sections/IntroSection';
import AboutSection from './sections/AboutSection';

const Home = () => {
    useEffect(() => {
        AOS.init({
            duration: 1300,
            offset: 50,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <div>
            <FirstSection />
            <AboutSection />
        </div>
    );
};

export default Home;
