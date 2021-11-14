//Content.js
import React, { useEffect } from 'react';
import './Header.css';
import About from './About';


const pStyle = { color: 'white' };
class Content extends React.Component {
    render() {
        return (
            <div>
                <About />

            </div >
        )
    }
};

export default Content;
