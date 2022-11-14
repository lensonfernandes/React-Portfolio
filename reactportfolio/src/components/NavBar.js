import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar  expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"> <img src={} alt={} /></a>
                <a href="#"> <img src={} alt={} /></a>
                <a href="#"> <img src={} alt={} /></a>

            </div>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;