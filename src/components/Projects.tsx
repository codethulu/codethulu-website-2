import React from 'react'
import './Projects.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';


import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";

class Projects extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <Element name="projects" className="element"></Element>
            </div>


        );
    }
}
export default Projects;