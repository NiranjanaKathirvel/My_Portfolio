import React from 'react';
import './skills.css';
import img1 from '../skill1-logo.jpg'
import img2 from '../skill2-logo.jpeg'
import js from '../js.png'
import java from '../java.png'
import react from '../react.png'
import python from '../python.webp'
import laravel from '../laravel.png'
import sql from '../sql.webp'
import front from '../front.jpg'
import web from '../web.webp'
const Skills = () => {
    return (
        <section id="skills">
            <div className='skills-container'>
                <div className="skill">
                    <img className="skill-logo" src={img1} alt="Your Name" style={{ width: '100%', height: '100%' }} />

                </div>
                <div className="skill">
                    <img className="skill-logo" src={img2} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={js} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={react} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={java} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={python} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={laravel} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={sql} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={front} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={web} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
                <div className="skill">
                    <img className="skill-logo" src={figma} alt="Your Name" style={{ width: '100%', height: '100%' }} />
                </div>
            </div>
        </section>
    );
};

export default Skills;
