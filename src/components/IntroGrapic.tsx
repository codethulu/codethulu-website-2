import React, { useEffect } from 'react';
import { ParallaxBanner } from 'react-scroll-parallax';
import './IntroGraphic.css';

import whiteGrunge from '../images/white-grunge-texture.jpg';

import logo from '../images/logo-a.png';


const IntroGraphic = () => (

    <div className='main-graphic'>
        <ParallaxBanner
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
            style={
                {
                    height: "100%",
                }
            }
        >

            <h1 className='main-graphic-title'>CODETHULU</h1>
            <h1 className='sub-graphic-title'>SOFTWARE DEVELOPER AND GRAPHIC DESIGNER</h1>


        </ParallaxBanner>
        <div className='divider'></div>
    </div>



);




export default IntroGraphic;