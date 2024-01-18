import { Link } from "react-router-dom";
import Image from "../assets/image/top.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Heading() {
    return (
        <>
        <header>
            <article className="artic">
                <Container>
                    <Row className="break">
                        <Col>
                            <section className="texts">
                                <h1>Little Lemon</h1>
                                <h2>New York City</h2>
                                <p>
                                We are an Italian restaurant, located in Hells Kitchen, Manhattan in New York City. 
                                </p>
                                <br/>
                                <Link className="btn btn-warning" to="/reservations">Reserve a Table</Link>
                            </section>
                        </Col>

                        <Col>
                            <section>
                                <img className="image" src={Image} alt="Litte Lemon Image" />
                            </section>        
                        </Col>
                    </Row>
                </Container>
            </article>
        </header>
        </>
    )
}