import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import Navigation from '../Componets/Navigation';
import Footer from '../Componets/Footer';

function About() {
    return (
        <>
            <Navigation/>
            <Container className="my-5">
                <h3>Kdo jsem?</h3>
                <p>
                    Jmenuji se Petr Václavek je mi 18 let a aktivně se věnuji IT. Studuji na soukromé střední škole Educhem. Zajímám se hlavně o počítačové servery a linux, taky rád tvořím webové stránky a programuji hlavně webové aplikace a to ve frameworku Laravel u větších projektů a u menších používám objektově orientované PHP. Ovládám linuxové servery (Debian 9/10, Ubuntu Server, CentOS). Také se zajímám o virtualizaci serverů takže ovládám Esxi a Proxmox. Nebojím se ani drobných hardwarových oprav.
            </p>
            </Container>
            <Footer/>
        </>
    )
}

export default About;