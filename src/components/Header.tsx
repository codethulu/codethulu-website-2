import React from 'react'
import './Header.css'

import {
	Link,
	Element,
	Events,
	animateScroll,
	scrollSpy,
	scroller
} from "react-scroll";

class Header extends React.Component {
	listener = null;
	state = {
		nav: false
	}
	componentDidMount() {
		window.addEventListener("scroll", this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll = () => {
		if (window.pageYOffset > 760) {
			if (!this.state.nav) {
				this.setState({ nav: true });
			}
		} else {
			if (this.state.nav) {
				this.setState({ nav: false });
			}
		}

	}



	render() {
		return (
			<div>

				<div className={`navbar ${this.state.nav && 'nav-sticky'}`}>
					<div className={`trim ${this.state.nav && 'trim-after'}`}></div>


					<Link activeClass="active" to="home" spy={true} smooth={true} offset={-100} duration={750} >
						<a className={`nav-title hover-underline-animation ${!this.state.nav && 'hidden'}`}> HOME</a>
					</Link>
					<Link activeClass="active" to="about" spy={true} smooth={true} offset={-100} duration={750} >
						<a className='nav-title hover-underline-animation'>ABOUT</a>
					</Link>


					<a className='nav-title hover-underline-animation'>PROJECTS</a>

					<a className='nav-title hover-underline-animation'>CONTACT</a>



				</div>

				<div className={`trim ${!this.state.nav && 'hidden'}`}></div>
				<div className={`navbar ${!this.state.nav && 'hidden'}`}>
					<p className='nav-title hover-underline-animation invisible'>janky solution :p</p>
				</div>

			</div>
		);
	}
}
export default Header;