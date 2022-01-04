import React from 'react'
import './Sides.css'

import {
    Link,
    Element,
    Events,
    animateScroll,
    scrollSpy,
    scroller
} from "react-scroll";

class Sides extends React.Component {
    render() {
        return (
            <div>
                <div className='side-container left-side'>
                    <a href='https://github.com/codethulu'><div className='logo github'></div></a>
                    <a href='https://twitter.com/Codethulu_'><div className='logo twitter'></div></a>
                    <a href='https://www.linkedin.com/in/brendan-bell-34b282202/'><div className='logo linkedin'></div></a>

                    <div className='line'></div>
                </div>
                <div className='side-container right-side'>
                    <p><a href='mailto: brendan@codethulu.dev'>brendan@codethulu.dev</a></p>
                    <div className='line'></div>
                </div>


            </div>
        );
    }
}
export default Sides;