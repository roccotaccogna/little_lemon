import Logo from "../../public/little_lemon.jpg";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

export default function NavbarApp(){
    return (
        <Navbar expand="lg" className="">
        <Container>
          <Navbar.Brand href="#">
            <Link to="/">
              <img src={Logo} alt="" className="logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto menu">
              <Nav.Link className="item">
                <Link to="/menu" className="index"> Menu </Link>
              </Nav.Link>
              <Nav.Link className="item">
                <Link to="/about" className="index"> About Us </Link> 
              </Nav.Link>
              <Nav.Link className="item">
                <Link to="/reservation" className="index"> Reservations </Link>
              </Nav.Link>
              <Nav.Link className="item">
                <Link to="/order" className="index"> Order </Link> 
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }