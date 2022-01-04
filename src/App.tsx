import React, { Component } from 'react';
import './App.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css";
import Header from './components/Header';
import Sides from './components/Sides';
import Content from './components/Content';
import IntroGraphic from './components/IntroGrapic';
import Contact from './components/Contact';
import Footer from './components/Footer';
import "animate.css/animate.min.css";

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
				<Header />
				<Sides />
				<IntroGraphic />
				<Content />
				<Contact />
				<Footer />

			</ParallaxProvider>
		);
	}
}
