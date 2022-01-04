import { ParallaxBanner } from 'react-scroll-parallax';
import './IntroGraphic.css';
import mainImage from '../images/main-image.jpg';
import logo from '../images/logo-a.png';
import { Link } from 'react-scroll';

const IntroGraphic = () => (
    <div className='main-graphic'>
        <ParallaxBanner
            layers={[
                {
                    expanded: false,
                    image: mainImage,
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
            <div className='graphic-title-box'>
                <h1 className='main-graphic-title'>CODETHULU</h1>
                <h1 className='sub-graphic-title'>BRENDAN BELL IS A SOFTWARE DEVELOPER AND GRAPHIC DESIGNER.</h1>
            </div>
            <Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={750} >
                <div className='down-button'></div>
            </Link>

        </ParallaxBanner>
        <div className='divider'></div>
    </div>
);
export default IntroGraphic;