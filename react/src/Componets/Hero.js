import React from 'react';
import ReactDOM from 'react-dom';

const hero = {
    background: 'url(react/src/obr/hero.jpg) center center fixed',
    backgroundColor: '#101010',
    backgroundBlendMode: 'soft-light',
    color: '#fff'
};

function Hero() {
    return (
        <div class="jumbotron jumbotron-fluid" style={hero}>
            <div class="container">
                <h1 class="display-4">Petr Václavek</h1>
                <p class="lead">Linux, Hosting, Kodování webů a další..</p>
            </div>
        </div>
    )
}

export default Hero;