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
            <About></About>
            <Skill></Skill>
            <Education></Education>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;