import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Navigation from '../Componets/Navigation';
import Footer from '../Componets/Footer';

function Projects() {
    return (
        <>
            <Navigation />
            <Container className="my-5">
                <h2>Moje projekty</h2>
                <p>Na čem pracuji nebo jsem pracoval 😁</p>
                <Row>
                    <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>Můj osobní web</Card.Title>
                                <Card.Text>Můj osobní web co více dodat😂😂</Card.Text>
                                <Card.Footer><Badge variant="warning">ReactJS</Badge> </Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>MCJabko.cz</Card.Title>
                                <Card.Text>Česky minecraft server, který funguje již od roku 2017.</Card.Text>
                                <Card.Footer><Badge variant="primary">PHP</Badge> <Badge variant="warning">Nodejs</Badge> <Badge variant="success">Bash</Badge></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={4}>
                        <Card>
                            <Card.Body>
                                <Card.Title>NodyHost.com</Card.Title>
                                <Card.Text>Český free webhosting <b>ukončeno</b></Card.Text>
                                <Card.Footer><Badge variant="primary">PHP</Badge></Card.Footer>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Projects;