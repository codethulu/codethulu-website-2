import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header';
import Content from './components/Content';
import IntroGraphic from './components/IntroGrapic';

import mainGraphic from './images/main-graphic-a.png';

const div1 = { height: "4em" };
// function App() {

// 	return (

// 		<ParallaxProvider>
// 			<div>
// 				<div className="main-graphic-container">
// 					<img src={mainGraphic} className="main-graphic center" alt="Main graphic image" />
// 					<h1 className='main-graphic-title'>CODETHULU</h1>
// 					<h2 className='sub-graphic-title'>SOFTWARE DEVELOPER AND GRAPHIC DESIGNER</h2>
// 				</div>
// 				<div style={div1}></div>
// 				<Header />
// 				<Content />
// 			</div>

// 		</ParallaxProvider>
// 	)
// }

export default class App extends Component {
	render() {
		return (
			<ParallaxProvider>
				<IntroGraphic />
				<Header />
				<Content />
			</ParallaxProvider>
		);
	}
}

// export default App;
