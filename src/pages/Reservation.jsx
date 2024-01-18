import { useState } from "react";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function Reservation(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [people, setPeople] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState();

    const [validated, setValidated] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <div className="center"> 
           <h1 className="cardTitle">Reserve a Table</h1>
           <br />

           <Form  noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 form">
                <Form.Group className="mb-4">
                    <Form.Label htmlFor='firstName'>First Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        minLength={2}
                        maxLength={50}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4" controlId="validationCustom02">
                    <Form.Label htmlFor='lastName'>Last Name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        minLength={2}
                        maxLength={50}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor='email'>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Email"
                        id="email"
                        minLength={4}
                        maxLength={200}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor='phonenum'>Phone Number</Form.Label>
                    <Form.Control
                        required
                        type="tel"
                        placeholder="(xxx)-xxx-xxxx"
                        id="phonenum"
                        minLength={10}
                        maxLength={25}
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor='people'>Number of People</Form.Label>
                    <Form.Control
                        required
                        type="number"
                        placeholder="Number of People"
                        id="people"
                        minLength={1}
                        maxLength={100}
                        value={people}
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor='date'>Select Date</Form.Label>
                    <Form.Control
                        required
                        type="date"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-4">
                    <Form.Label htmlFor='date'>Select Time</Form.Label>
                    <Form.Select
                        required
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                    >
                        <option value="1">19:00</option>
                        <option value="2">19:30</option>
                        <option value="3">20:00</option>
                        <option value="4">20:30</option>
                        <option value="5">21:00</option>
                        <option value="6">21:30</option>
                        <option value="7">22:00</option>
                        <option value="8">22:30</option>
                    </Form.Select>
                </Form.Group>
            </Row>
                <Button type="submit" className="btn btn-warning mb-5" onClick={handleShow}>
                    Book Table
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Your Reservation is Confirmed!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>  A confirmation message has been sent to your email.
                                  Thanks for dining with us!
                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                </Modal>
           </Form>
        </div>
    )
}