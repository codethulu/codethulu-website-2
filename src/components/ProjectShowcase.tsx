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

class ProjectShowcase extends React.Component {
    render() {
        return (
            <div className='projects-container'>
                <Element name="projects" className="element"></Element>
                <div className='grey-stroke'>
                    <h1 className='projects-title'>PROJECT SHOWCASE</h1>
                </div>
                <p className='projects-text'>Here are a few projects I have worked on.</p>



            </div>


        );
    }
}
export default ProjectShowcase;