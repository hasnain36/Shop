import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Header(){
    return (
        <div>
            <Navbar bg="light" variant="light">
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
          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Our PRODUCTS</Nav.Link>
            <Nav.Link href="#">ABOUT THE SHOP</Nav.Link>
            <Nav.Link href="#">CONTACT</Nav.Link>
            <Nav.Link href="#">BUY NOW</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    );
}
export default Header;



