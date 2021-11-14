//Content.js
import React, { useEffect } from 'react';
import './Header.css';
import About from './About';
import Projects from './Projects';


const pStyle = { color: 'white' };
class Content extends React.Component {
    render() {
        return (
            <div>
                <About />
                <Projects />

            </div >
        )
    }
};

export default Content;
