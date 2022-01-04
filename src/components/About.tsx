import React from 'react'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import './About.css'




import {
    Element,
} from "react-scroll";
import ScrollAnimation from 'react-animate-on-scroll';



class About extends React.Component {
    render() {
        return (
            <div className='container'>
                <Element name="about" className="element"></Element>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                    <h1>Hi, my name is Brendan.</h1>
                </ScrollAnimation>
                <div className='inner-container'>

                    <img className='photo'></img>
                    <div className='about-info'>
                        <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>


                            <p>I am a <span className='highlight'>software engineer</span> and <span className='highlight'>graphic designer</span>. I love to work on projects that allow me to apply both my programming skills and creativity such as web development, UI/UX design and game creation.</p>
                            <p>Currently I am studying Computer Science at the University of Warwick, as well as continuing to undertake personal projects that utilise new technologies in order to develop my skillset further.</p>
                        </ScrollAnimation>
                    </div>

                </div>



            </div >


        );
    }
}
export default About;