import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CgAirplane } from "react-icons/cg";
import { GiAbstract003 } from "react-icons/gi";
import { GiAbstract082 } from "react-icons/gi";
import { GiAnatomy } from "react-icons/gi";
import { GiAndroidMask } from "react-icons/gi";
import { GiBalloonDog } from "react-icons/gi";
import { GiBooze } from "react-icons/gi";
import { GiChanterelles } from "react-icons/gi";

export default function Testimonials() {
    return (
        <div className='container'>
            <article>
               <h1 className="titleH1">Testimonials</h1>
            </article>
        <Container className='center'>
            <Row>
                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <CgAirplane size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Michael Airplane</Card.Subtitle>
                            <Card.Text className='text_card'>
                            This is the best Italian food that I have ever had in NY!
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiAbstract003 size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Rowe Smith</Card.Subtitle>
                            <Card.Text className='text_card'>
                                Cozy atmosphere and delicious food.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>      

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiAbstract082 size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Trafalgar Law</Card.Subtitle>
                            <Card.Text className='text_card'>
                                I have had some great Italian food before, but none of them beats 
                                Little Lemon in flavor and texture.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col> 

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiAnatomy size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Hinata Hyuga</Card.Subtitle>
                            <Card.Text className='text_card'>
                                A great place to treat your kids to.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiAndroidMask size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Madara KK</Card.Subtitle>
                            <Card.Text className='text_card'>
                                The food at this restaurant really regenerated me after a shift at work.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>  
                     
                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiBalloonDog size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Bryan Cristante</Card.Subtitle>
                            <Card.Text className='text_card'>
                                The food here tastes delicious. It is always nice to stop in even just for coffee.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>       

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiBooze size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Edward Newgate</Card.Subtitle>
                            <Card.Text className='text_card'>
                                Everyone should try this place at least once if they pass through New York City.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>   

                <Col sm={6} lg={3}>
                    <Card className='cardTestimonial'>
                        <Card.Body>
                            <Card.Title>
                                <GiChanterelles size={40}/>
                            </Card.Title>
                            <Card.Subtitle className='sub'>Jack Royce</Card.Subtitle>
                            <Card.Text className='text_card'>
                                This restaurant served as a perfect dinner for me after a long night of studying.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>       
            </Row>
        </Container>
        </div>
    )
}