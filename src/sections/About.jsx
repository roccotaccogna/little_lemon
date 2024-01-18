import Chef from "../assets/image/chef.jpg";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
    return (
        <>
          <header>
            <article className="artAbout">
                <Container>
                    <Row className="break">
                        <Col>
                            <section className="texts">
                                <h1>Little Lemon</h1>
                                <h2>New York City</h2>
                                <p>Little Lemon was opened in 1991 by an Italian family, 
                                    the Rodolfi family. Despite the city is diversity, 
                                    they brought Apulian Italian cuisine to New York by dedicating 
                                    the flavors of their hometown in Italy to the American people.
                                </p>
                            </section>
                        </Col>

                        <Col>
                            <section>
                                <img src={Chef} alt="Little Lemon image" className="image"/>
                            </section>
                        </Col>
                    </Row>
                </Container>
            </article>
          </header>
        </>
    )
}