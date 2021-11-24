import React from 'react'
import './About.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import whiteGrunge from '../images/small-white-grunge-b.png';
import smallSplatter from '../images/small-white-splatter.png';
import face from '../images/face.png';

import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";


let s = "Click on one of the skill bubbles to read more...";



class About extends React.Component {


    render() {
        return (
            <div className='about-container'>
                <Element name="about" className="element"></Element>

                <div className='bio'>
                    <Parallax x={[-2, 2]}>
                        <div className='white-stroke'>
                            <h1 className='about-title font-black'>ABOUT</h1>

                        </div>
                    </Parallax>

                    <p>HELLO, MY NAME IS <span className='highlight'>BRENDAN</span> 👋 </p>
                    <p> I AM A <span className='highlight'>SOFTWARE ENGINEER</span> AND <span className='highlight'>GRAPHIC DESIGNER</span>. I LOVE TO GET INVOLVED IN PROJECTS THAT ALLOW ME TO APPLY MY PROGRAMMING SKILLS AND CREATIVITY, AND IN PARTICULAR I ENJOY WEB DEVELOPMENT AND MAKING GAMES.</p>
                    <p>CURRENTLY I AM STUDYING COMPUTER SCIENCE AT THE UNIVERSITY OF WARWICK, AS WELL AS UNDERTAKING PERSONAL PROJECTS THAT UTILISE NEW TECHNOLOGIES TO HELP EXPAND MY SKILLSET. </p>



                </div>


                <div className='photo'>


                    <Parallax y={[-20, 10]}>
                        <img className='fill' src={whiteGrunge} />
                    </Parallax>

                    <Parallax y={[-120, -60]}>
                        <img className='fill' src={smallSplatter} />
                    </Parallax>

                    <Parallax y={[-220, -170]}>
                        <img className='fill' src={face} />
                    </Parallax>

                </div>



                <div className='photo-container'>

                    <div className='display-photo'>
                        <Parallax y={[-20, 20]} disabled={(window.innerWidth < 500)}>
                            <div className='image about-photo-1'>
                                <p>‎</p>
                            </div>
                        </Parallax>

                    </div>


                    <div className='display-photo'>
                        <Parallax y={[20, -20]} disabled={(window.innerWidth < 500)}>
                            <div className='image grey-bg'>
                                <p>I am currently based in <span className='highlight'>Coventry, UK</span>.</p>
                                <p>
                                    Away from the computer, I enjoy painting, collecting records and cooking.
                                </p>
                            </div>
                        </Parallax>



                    </div>

                    <div className='display-photo'>
                        <Parallax y={[-20, 20]} disabled={(window.innerWidth < 500)}>
                            <div className='image about-photo-2'>
                                <p className='highlight'>‎</p>
                            </div>
                        </Parallax>
                    </div>

                </div>

                <div className='skills'>

                    <div className='white-stroke'>
                        <h1 className='about-title font-black'>SKILLS</h1>

                    </div>


                    <section className="main">

                        <ul className="ch-grid">
                            <li>
                                <div className="ch-item">
                                    <div className="ch-info">
                                        <div className="ch-info-front img-java"></div>
                                        <div className="ch-info-back">
                                            <h3>JAVA</h3>
                                            <p>Java is a widely used cross platforming programming language.</p>
                                            <p>With java, i have been able to explore and develop in a wide range of fields, from backend web development and databases to desktop software and pathfinding algorithms.</p>
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
                                            <p>Haskell is a functional programming language used in research and industrial application.</p>
                                            <p> I studied Haskell at University and used it to complete two projects, which developed my skills in different programming paradigms.</p>
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


export default About;
