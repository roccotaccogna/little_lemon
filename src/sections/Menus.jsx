import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hamburger from "../assets/image/Hamburger.jpg";
import Spaghetti from "../assets/image/Spaghetti.jpg";
import Pancake from "../assets/image/Pancake.jpg";

export default function Menus() {
    return (
        <>
        <section className="container">
            <article>
               <h1 className="titleH1">Dishes of the week</h1>
            </article>
            <Container className='center'>
                <Row>
                    <Col sm={6} lg={4} md={4}>
                        <Card className="card">
                            <Card.Img className="cardImage" variant="top" src={Hamburger} />
                            <Card.Body>
                                <Card.Title className="cardTitle">Bacon Trip</Card.Title>
                                <Card.Title>20.00$</Card.Title>
                                <Card.Text>The BACON TRIP with 2 slices of 100% beef grilled over an open flame, 
                                        lots of crispy bacon, mild, melting Cheddar cheese, ketchup and mayo
                                </Card.Text>
                                <Button variant="warning">Order for Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} lg={4} md={4}>
                        <Card className="card">
                            <Card.Img className="cardImage" variant="top" src={Spaghetti} />
                            <Card.Body>
                                <Card.Title className="cardTitle">Spaghetti Italy</Card.Title>
                                <Card.Title>12.00$</Card.Title>
                                <Card.Text>SPAGHETTI ITALY with cherry tomatoes and basil-scented feta is fresh and tasty. 
                                        A simple, summery and tasty first course.
                                </Card.Text>
                                <Button variant="warning">Order for Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col sm={6} lg={4} md={4}>
                        <Card className="card">
                            <Card.Img className="cardImage" variant="top" src={Pancake} />
                            <Card.Body>
                                <Card.Title className="cardTitle">BOMB PANCAKE</Card.Title>
                                <Card.Title>7.00$</Card.Title>
                                <Card.Text>Taste bomb in a simple protein-rich pancake</Card.Text>
                                <Button variant="warning">Order for Delivery</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    )
}