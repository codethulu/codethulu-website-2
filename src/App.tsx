import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';

import Header from './components/Header';
import Content from './components/Content';
import IntroGraphic from './components/IntroGrapic';
import Contact from './components/Contact';
import Footer from './components/Footer';

import {
	Link,
	Element,
	Events,
	animateScroll,
	scrollSpy,
	scroller
} from "react-scroll";




export default class App extends Component {
	render() {
		return (
			<ParallaxProvider>
				<Element name="home" className="element"></Element>
				<IntroGraphic />
				<Header />
				<Content />
				<Contact />
				<Footer />

			</ParallaxProvider>
		);
	}
}
