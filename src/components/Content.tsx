//Content.js
import React, { useEffect } from 'react';
import './Header.css';
import Skills from './Skills';
import ProjectShowcase from './ProjectShowcase';
import About from './About';


const pStyle = { color: 'white' };
class Content extends React.Component {
    render() {
        return (
            <div>
                <About />

                <Skills />
                <ProjectShowcase />

            </div >
        )
    }
};

export default Content;
