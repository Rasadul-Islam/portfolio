import React from 'react';
import Hero from './hero';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div id="about"><About /></div>
            <div id="skills"><Skill /></div>
            <div id="education"><Education /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
        </div>
    );
};

export default Home;