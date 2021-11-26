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

class Contact extends React.Component {
    render() {
        return (
            <div className='contact-container'>
                <Element name="contact" className="element"></Element>
                <Parallax x={[2, -2]}>
                    <div className='white-stroke'>
                        <h1 className='about-title font-black'>CONTACT</h1>


                    </div>
                </Parallax>

                <p>Want to get in touch? Here are the links to some of my socials:</p>

                <div className='contact-button-container'>
                    <a href='https://github.com/codethulu'>
                        <div className='contact-button'>
                            <img className='fill' src={github} />
                        </div>
                    </a>
                    <a href='https://twitter.com/Codethulu_'>
                        <div className='contact-button'>
                            <img className='fill' src={twitter} />
                        </div>
                    </a>
                    <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'>
                        <div className='contact-button'>
                            <img className='fill' src={linkedin} />
                        </div>
                    </a>
                    <a href='mailto: brendanbell2001@hotmail.com'>
                        <div className='contact-button'>
                            <img className='fill' src={email} />
                        </div>
                    </a>
                </div>


            </div>


        );
    }
}
export default Contact;