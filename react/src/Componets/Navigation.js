import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import BrowserRouter from 'react-router-dom/BrowserRouter';
import Link from 'react-router-dom/Link';

function Navigation() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Petr Václavek</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Domů</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projekty">
                            <Nav.Link>Projekty</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ome">
                            <Nav.Link>O mě</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Navigation;
