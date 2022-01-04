import React from 'react'
import './Skills.css'
import 'animate.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';

import whiteGrunge from '../images/small-white-grunge-b.png';
import smallSplatter from '../images/small-white-splatter.png';
import face from '../images/face.png';
import "animate.css/animate.min.css";


import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";


let s = "Click on one of the skill bubbles to read more...";



class Skills extends React.Component {


    render() {
        return (
            <div className='container'>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                    <h1>Skills.</h1>
                </ScrollAnimation>
                <div className='skills'>

                    <section className="main">

                        <ul className="ch-grid">
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-java"></div>
                                        <div className="ch-info-back">
                                            <h3>JAVA</h3>
                                            <p>Java is a widely used cross platforming programming language.</p>
                                            <p>With java, I have been able to develop everything from desktop software and pathfinding algorithms to back end web system.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li >
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-python"></div>
                                        <div className="ch-info-back">
                                            <h3>PYTHON</h3>
                                            <p>Python is a language with hundreds of useful libraries, and is perfect for lightweight projets or components.</p>
                                            <p>Learning python allowed me to confidently attempt more complex projects.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-haskell"></div>
                                        <div className="ch-info-back">
                                            <h3>Haskell</h3>
                                            <p>I studied Haskell at University and used it to complete two projects, which developed my skills and tested my problem solving by programming within a functional paradigm.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-typescript"></div>
                                        <div className="ch-info-back">
                                            <h3>TYPESCRIPT</h3>
                                            <p>Typescript is a strict syntactical superset of javascript.</p>
                                            <p>It allows me to write in a language functionally similar to javascript with stricter typing, while still having access to every javascript library. </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-htmlcss"></div>
                                        <div className="ch-info-back">
                                            <h3>HTML & CSS</h3>
                                            <p>HTMLS and CSS make up the backbone of websites on the internet.</p>


                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-swift"></div>
                                        <div className="ch-info-back">
                                            <h3>Swift</h3>
                                            <p>Swift is a modern multi paradigm programming language developed by Apple for development within its ecosystem.</p>
                                            <p>Swift is a useful tool for rapid app development on the biggest mobile software store.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-c"></div>
                                        <div className="ch-info-back">
                                            <h3>C</h3>
                                            <p>C is a powerful low level programming language. Learning this language has allowed me to work in similar languages such as C++ as well.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-ps"></div>
                                        <div className="ch-info-back">
                                            <h3>Photoshop</h3>
                                            <p>Photoshop can be used for image manipulation and graphic design. i frequently apply my design skills in the projects i work on: from UX design to graphics for websites and video game assets.</p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </section>
                    {/* <div className='skill-info'>
                        <p>{s}</p>
                    </div> */}



                </div>


            </div >
        );
    }

}


export default Skills;
