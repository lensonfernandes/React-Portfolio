import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../assets/img/logo.png'


function NavBar() {
const [activeLink , setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);


useEffect(() => {
  const onScroll = () => {
    if(window.scrollY > 50 ) {
      setScrolled(true)
    }
    else
    {
      setScrolled(false)
    }
  }

  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll" , onScroll);
}, [])


const onUpdateActiveLink = (value) => {
  setActiveLink(value);
}

  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" className='navbar-logo-img'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link href="#home" className = {activeLink === 'home' ? 'active navbar-link text-light' : 'navbar-link text-light' } onClick = { () => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className = {activeLink === 'skills' ? 'active navbar-link text-light' : 'navbar-link text-light' } onClick = { () => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className = {activeLink === 'projects' ? 'active navbar-link text-light' : 'navbar-link text-light' } onClick = { () => onUpdateActiveLink('projects')}>Projects</Nav.Link>
           
          </Nav>
          <span className="navbar-text">
            {/* <div className="social-icon">
              <a href="#"><img src={""} alt="Icon1" /></a>
              <a href="#"><img src={""} alt="Icon2" /></a>
              <a href="#"><img src={""} alt="Icon3" /></a>
            </div> */}
            <button className="vvd" onClick={ () => console.log('connect')}><span><a href="https://github.com/lensonfernandes" id="navbar-a">Check out my GitHub</a></span></button>
          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;