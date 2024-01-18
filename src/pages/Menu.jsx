import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Menu(){
    return (
        <div className='center'>
        <h1 className='cardTitle'>Menu</h1>
        <br />
        <Container>
            <Row>
                <Col>
                    <h2>Breakfast</h2>
                    <br/>
                    <h6 className='text_card'>Bomb Pancake - 7$</h6>
                    <hr/>
                    <h6 className='text_card'>Egg with bacon - 9$</h6>
                    <hr/>
                    <h6 className='text_card'>Croissant - 3$</h6>
                    <hr/>
                    <h6 className='text_card'>Honey Waffle - 8$</h6>
                    <hr/>
                </Col>
                <Col>
                    <h2>Lunch</h2>
                    <br/>
                    <h6 className='text_card'>Spaghetti Italy - 12$</h6>
                    <hr/>
                    <h6 className='text_card'>Bacon Trip - 20$</h6>
                    <hr/>
                    <h6 className='text_card'>Carbonara - 17$</h6>
                    <hr/>
                    <h6 className='text_card'>Kobe - 150$</h6>
                    <hr/>
                </Col>
                <Col>
                    <h2>Dinner</h2>
                    <br/>
                    <h6 className='text_card'>Pizza Margherita - 15$</h6>
                    <hr/>
                    <h6 className='text_card'>Wagyu - 170$</h6>
                    <hr/>
                    <h6 className='text_card'>Local Steak - 60$</h6>
                    <hr/>
                    <h6 className='text_card'>French Fries - 10$</h6>
                    <hr/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}