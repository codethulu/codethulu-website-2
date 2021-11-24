//Content.js
import React, { useEffect } from 'react';
import './Header.css';
import About from './About';
import ProjectShowcase from './ProjectShowcase';


const pStyle = { color: 'white' };
class Content extends React.Component {
    render() {
        return (
            <div>
                <About />
                <ProjectShowcase />

            </div >
        )
    }
};

export default Content;
