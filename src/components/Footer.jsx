import Logo from "../../public/little_lemon.jpg";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Footer(){
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col className="logo_footer" md={6} sm={10}>
                        <img src={Logo} alt="" className="logoFoot"/>
                    </Col>

                    <Col className="colom">
                      <h1 className="title_footer">Navigation</h1>
                    <div className="list">
                        <Link to="/" className="links">Home</Link>
                        <Link to="/about" className="links">About</Link>
                        <Link to="/menu" className="links">Menu</Link>
                        <Link to="/reservation" className="links">Reservations</Link>
                        <Link to="/order" className="links">Order</Link>
                    </div>
                    </Col>

                    <Col className="colom">
                        <h1 className="title_footer">Contact</h1>
                        <div>
                            <h5>Rockefeller Plaza</h5>
                            <h6>New York, NY 10112</h6>
                            <h6>(619)-123-4567</h6>
                            <a href="mailto: my@littlelemon.com"
                            target="blank" className="links">
                                my@littlelemon.com
                            </a>
                        </div>
                    </Col>

                    <Col className="colom">
                        <h1 className="title_footer">Social</h1>
                        <div>
                            <a href="https://www.facebook.com" target="blank" className="links">Facebook</a>
                            <br/>
                            <a href="https://www.instagram.com" target="blank" className="links">Instagram</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}