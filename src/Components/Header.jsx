import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsCart , BsSearch} from "react-icons/bs";
import './Header.css';
function Header(){
    return (
        <div>
<Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src="https://themes.muffingroup.com/be/computershop/wp-content/uploads/2020/09/computershop.png"
              width="70"
              height="50"
              className="d-inline-block align-top"
              alt=""
            />
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 nbar"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#ourproduct">Our PRODUCTS</Nav.Link>
            <Nav.Link href="#about">ABOUT THE SHOP</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#buy" className='buy'>BUY NOW</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Nav.Link href="#" className='cart'><BsCart/></Nav.Link>
            <Nav.Link href="#" className='search'><BsSearch/></Nav.Link>
          
            <Button variant="outline-dark" >My Account </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
}
export default Header;



