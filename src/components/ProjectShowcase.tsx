import React from 'react'
import './Projects.css'
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-scroll-parallax';
import { Masonry } from '@mui/lab';


import ProjectCard from './ProjectCard';
import projectsList from './projectsList';

import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";

import { url } from 'inspector';
import ScrollAnimation from 'react-animate-on-scroll';
import { createTheme } from '@mui/material';


class ProjectShowcase extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         projects: [],
    //     };
    // }

    render() {
        return (
            <div className='container'>
                <Element name="projects" className="element"></Element>
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                    <h1>Here are some things I have worked on.</h1>
                </ScrollAnimation>

                <div>
                    <div className='projects-container'>
                        <Masonry
                            columns={{ xs: 1, sm: 2, md: 3 }}
                            spacing={3}
                            defaultHeight={450}
                            defaultColumns={3}
                            defaultSpacing={2}
                        >
                            {projectsList.map((e) => {
                                return (
                                    <ProjectCard name={e.name} titleCard={e.titleCard} description={e.description} tags={e.tags} image={e.image} showcase={e.showcase} />
                                );
                            })}
                        </Masonry>
                    </div>
                    {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                        <div className='project-showcase'>

                            <div className='project-showcase-image video-chamber'>
                                <p>‎</p>
                            </div>
                            <div className='project-showcase-description'>
                                <div className='showcase-title title-1'></div>
                                <p>The Chamber is a <span className='highlight'>procedurally generated</span> dungeon crawler with pathfinding enemies, over 1000 hand drawn sprites and over 100 unique items. It was written in <span className='highlight'>Python</span> using the pygame library.</p>
                                <p>Each level of the infinitly sprawling dungeon has a procedurally generated floor plan: each with its own random layout, connections, and aesthetic. Enemies, friendly NPCs, and chests full of useful loot can randomly spawn. Beating enemies and exploring the dungeon help level the player up, which allows them to increase their stats using the skill tree. These stat increasements can aid the player in beating the boss that resides at the end of each floor.</p>
                                <p>Because of how much I enjoyed working on this project the scope was revised multiple times, and in the end it resulted in a polished product that tested my ability to write my own game render system from scratch in pygame. This project also tested how well I could impement things I had learnt in theory, like graphs and path finding algorithms.</p>
                            </div>

                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                        <div className='project-showcase'>

                            <div className='project-showcase-description'>
                                <div className='showcase-title title-4'></div>
                                <p>Scratch is a high-level visual programming langauge that uses draggable blocks to form procedures. Using <span className='highlight'>Haskell</span> I wrote a back end to interpret blockly blocks. Users of the program can assemble a simple program by dragging blocks to perform arithmetic on values stored in the memory of the program.</p>
                                <p>This project was an interesting exploration in how interpreters can be designed in a functional language. By applying what I had learnt about <span className='highlight'>monads</span> and <span className='highlight'>applicative functors</span> I created an interpreter that was able to store variables in memory, return errors on erroneus operations, and process IF and LOOP structures. </p>
                            </div>
                            <div className='project-showcase-image video-ursinaelements'>
                                <p>‎</p>
                            </div>

                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                        <div className='project-showcase'>
                            <div className='project-showcase-image video-scratchclone'>
                                <p>‎</p>
                            </div>

                            <div className='project-showcase-description'>
                                <div className='showcase-title title-2'></div>
                                <p>Scratch is a high-level visual programming langauge that uses draggable blocks to form procedures. Using <span className='highlight'>Haskell</span> I wrote a back end to interpret blockly blocks. Users of the program can assemble a simple program by dragging blocks to perform arithmetic on values stored in the memory of the program.</p>
                                <p>This project was an interesting exploration in how interpreters can be designed in a functional language. By applying what I had learnt about <span className='highlight'>monads</span> and <span className='highlight'>applicative functors</span> I created an interpreter that was able to store variables in memory, return errors on erroneus operations, and process IF and LOOP structures. </p>
                            </div>


                        </div>
                    </ScrollAnimation>
                    <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
                        <div className='project-showcase'>

                            <div className='project-showcase-description '>
                                <div className='showcase-title title-3'></div>
                                <p>SYTES is a task managing application, where users can create and log into accounts and create their own "syte" which contains a number of tasks the user has created. Users can invite other people to their "syte", sort their tasks, and send email notifications. SYTES was written using <span className='highlight'>HTML</span> and <span className='highlight'>CSS</span>, with <span className='highlight'>PHP</span> and <span className='highlight'>SQL</span> for the backend.</p>
                                <p>This project greatly improved my CSS proficiency, as well as allowing me to use my SQL knowledge in a practical application. </p>
                            </div>
                            <div className='project-showcase-image video-syte'>
                                <p>‎</p>
                            </div>

                        </div>
                    </ScrollAnimation> */}

                </div>
            </div >


        );
    }
}
export default ProjectShowcase;