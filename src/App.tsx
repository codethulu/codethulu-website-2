import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header';
import Content from './components/Content';
import IntroGraphic from './components/IntroGrapic';


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

