import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';

function Footer() {
    return (
        <>
            <Container fluid className="bg-dark text-white p-3 m-0">
                <p className="text-center m-0"> Petr Václavek {new Date().getFullYear()}</p>
            </Container>
        </>
    )
}

export default Footer;