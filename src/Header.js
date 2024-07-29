import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/18AZA8TC3gdX-GB6TU4Vljy-YO46s7DWF/view?usp=share_link', '_blank'); // Navigate to the Google Drive link
  };
  

  const navigate = useNavigate();

 const handleScroll = (id) => {
    if (window.location.pathname !== '/') {
      navigate('/'); 
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100); 
  };

  return (
    <Navbar variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="brand">Harsha Saketh Konjeti</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto">
            <Nav.Link onClick={() => handleScroll('recent-works')} className="nav-link-custom">Work</Nav.Link>
            <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
            <Button variant="custom" className="ml-2" onClick={handleResumeClick}>Resume</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;