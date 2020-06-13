import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Componets/Footer';
import Navigation from '../Componets/Navigation';
import { Container } from 'react-bootstrap';

function Home() {
    return (
        <>
            <Navigation/>
            <Container className="my-5">
                <h1>Vítej na mém webu!</h1>
                <p>Tento slouží spíše jako ukázka React aplikace</p>
            </Container>
            <Footer />
        </>
    )
}

export default Home;