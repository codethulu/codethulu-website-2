import React, { useEffect } from 'react';
import { Parallax } from 'react-scroll-parallax';
import { ParallaxBanner } from 'react-scroll-parallax';
import './IntroGraphic.css';

import whiteGrunge from '../images/white-grunge-texture.png';

import logo from '../images/logo-a.png';


const IntroGraphic = () => (

    <div>
        <ParallaxBanner
            className="your-class"
            layers={[

                {
                    expanded: false,
                    image: whiteGrunge,
                    amount: 0.2,
                },
                {
                    expanded: false,
                    image: logo,
                    amount: 0.4,
                },

            ]}
            style={{
                height: "50em",
            }}
        >
            <h1 className='main-graphic-title'>CODETHULU</h1>
            <h2 className='sub-graphic-title'>SOFTWARE DEVELOPER AND GRAPHIC DESIGNER</h2>

        </ParallaxBanner>
        <div className='divider'></div>
    </div>



);




export default IntroGraphic;