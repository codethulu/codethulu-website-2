// //Header.js
// import React, { useEffect } from 'react';
// import './Header.css';
// const Header = () => {
// 	return (
// 		<div>
// 			<div className='navbar' id='navbar'>
// 				<p className='nav-title'>About</p>
// 				<p className='nav-title'>Projects</p>
// 			</div>
// 		</div>
// 	)
// };
// export default Header;

import React from 'react'
import './Header.css'
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
				<div className={`navbar ${this.state.nav && 'sticky'}`}>
					<a href='index.tsx' className={`nav-title hover-underline-animation ${!this.state.nav && 'hidden'}`}> HOME</a>
					<p className='nav-title hover-underline-animation'>ABOUT</p>
					<p className='nav-title hover-underline-animation'>PROJECTS</p>
					<p className='nav-title hover-underline-animation'>CONTACT</p>
				</div>
			</div>
		);
	}
}
export default Header;