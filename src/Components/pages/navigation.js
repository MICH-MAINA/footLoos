import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navagationbar() {
    return (
        <div className="bar">
            <div className='background'>
                <Navbar bg="white" variant="light" >
                    <Container>

                        <Navbar.Brand href="#home" style={{ fontWeight: 'bolder' }}>F<span style={{ color: '#e28743' }}>00</span>tL<span style={{ color: '#e28743' }}>00</span>S</Navbar.Brand>
                        <div style={{color:'white',fontWeight:'bold',height:270, Width: 551, position:'absolute', top:100, left: 170,marginLeft:'10%'}}>
                            <p style={{fontSize: 10}}>SPRING / SUMMER COLLECTION 2022</p>
                            <p style={{fontSize: 40}}>Get up to 30% Off<br/> New Arrivals</p>
                            <button style={{outline:'none', backgroundColor:'#E5AA70', height:40, width:150, border: '1px solid #B06500', borderRadius:5}}>SHOP NOW</button>
                        </div>
                        <div>
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#features">Shop</Nav.Link>
                                <Nav.Link href="#pricing">Promotion</Nav.Link>
                                <Nav.Link href="#blog">Blog</Nav.Link>
                                <Nav.Link href="#contact">Contact</Nav.Link>
                                <div className="right-nav" style={{ display: 'flex', flexDirection: 'row', marginLeft: 30 }}>
                                    <Nav.Link href="#search"><img src='Assets/search.svg' /></Nav.Link>
                                    <Nav.Link href="#account"><img src='Assets/person-fill.svg' /></Nav.Link>
                                    <Nav.Link href="#cart"><img src='Assets/basket-fill.svg' /></Nav.Link>
                                </div>
                            </Nav>
                        </div>




                    </Container>
                </Navbar>
            </div>

        </div>
    );
}

export default Navagationbar;