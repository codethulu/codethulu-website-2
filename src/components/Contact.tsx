import React from 'react'
import './Contact.css'
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

import { url } from 'inspector';

import twitter from '../images/twitter-logo.jpg'
import linkedin from '../images/linkedin-logo.jpg'
import github from '../images/github-logo.jpg'
import email from '../images/email-logo.jpg'
import ScrollAnimation from 'react-animate-on-scroll';



class Contact extends React.Component {
    render() {
        return (
            <div className='container'>
                <Element name="contact" className="element"></Element>

                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                    <h1>Let's get in touch.</h1>
                </ScrollAnimation>
                <p>If you are interested in working with me, or want to discuss any of my work, then please don't hesitate to get in contact!</p>
                <a href="mailto: brendan@codethulu.dev"><div className='contact-button'>Say Hello</div></a>
                <a href='https://github.com/codethulu' className='inline'><div className='contact-logo github' ></div></a>
                <a href='https://twitter.com/Codethulu_' className='inline'><div className='contact-logo twitter'></div></a>
                <a href='https://www.linkedin.com/in/brendan-bell-34b282202/' className='inline'><div className='contact-logo linkedin'></div></a>





            </div >


        );
    }
}
export default Contact;
