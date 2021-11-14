import React from 'react'
import './About.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';

import whiteGrunge from '../images/small-white-grunge.png';
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

class About extends React.Component {
    render() {
        return (


            <div className='about-container'>
                <Element name="about" className="element"></Element>
                <div className='bio'>
                    <h1 className='about-title'>ABOUT</h1>
                    <p className='about-text'>MY NAME IS BRENDAN AND I AM A SOFTWARE ENGINEER AND GRAPHIC DESIGNER WHO LOOKS TO GET INVOLVED IN PROJECTS THAT ALLOW ME TO APPLY MY PROGRAMMING SKILLS AND CREATIVITY. I ENJOY DESIGNING WEBSITES AND MAKING GAMES IN MY SPARE TIME.</p>
                    <p className='about-text'>CURRENTLY I AM STUDYING COMPUTER SCIENCE AT THE UNIVERSITY OF WARWICK, AS WELL AS UNDERTAKING PERSONAL PROJECTS THAT UTILISE NEW TECHNOLOGIES AND EXPAND MY SKILLSET. </p>

                    <p className='about-text'>I ALSO ENJOY PAINTING, COLLECTING RECORDS AND MAKING RAMEN.</p>
                    {/* <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis metus quis sem facilisis aliquam. Pellentesque nec tellus quam. Proin tempor diam ac fermentum vestibulum. Proin vitae molestie ipsum. Integer bibendum, sapien quis lobortis mattis, quam orci accumsan est, non tincidunt tortor purus sit amet dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin ac leo a velit cursus cursus et id nisl. Quisque quis dui eu erat sollicitudin placerat ut eget nisi. Sed tincidunt convallis gravida.

                        In hac habitasse platea dictumst. Sed fringilla fermentum urna, quis laoreet tortor euismod et. Donec faucibus viverra metus, quis tincidunt tellus sagittis elementum. Nulla facilisi. Fusce lobortis nulla eget metus commodo hendrerit. Maecenas malesuada vitae mauris maximus elementum. Donec non orci eu ligula ultrices convallis at bibendum metus. Integer fringilla, nulla vitae laoreet condimentum, eros libero imperdiet elit, ac eleifend turpis mauris vel nisi. Nam in elementum sapien. Proin consequat risus justo, at volutpat dolor vulputate a. Etiam posuere porttitor risus vitae porttitor. Pellentesque feugiat ut elit eget eleifend. Duis in rhoncus ipsum. Maecenas pellentesque lorem eget lectus mollis commodo. Vestibulum vel dolor ac lorem convallis facilisis. Curabitur rutrum sit amet ipsum nec porttitor.

                        Aenean maximus hendrerit vulputate. Nullam euismod augue vitae nisi fermentum dictum. Quisque interdum, nisl ut accumsan tincidunt, ligula orci ultrices eros, eget placerat nisi enim nec elit. Nunc ac turpis quam. Ut mattis leo euismod diam venenatis, quis vulputate urna fermentum. Duis congue, quam sed feugiat malesuada, lorem velit condimentum metus, eget viverra elit orci lobortis lacus. Mauris vehicula metus eu fringilla aliquam. Cras in eleifend erat. Aenean cursus consequat mauris, vel maximus leo faucibus at. Maecenas bibendum placerat justo, ut semper nunc faucibus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus.


                    </p> */}
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
                <div className='bg-white-grunge'>
                    <div className='skills'>
                        <h1 className='about-title'>SKILLS</h1>

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
                                <li>
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



                    </div>
                </div>
            </div >
        );
    }
}
export default About;