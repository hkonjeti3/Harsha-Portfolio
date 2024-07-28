import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";
const Header = () => {
  // const navigate = useNavigate(); // Initialize useNavigate

  // const handleResumeClick = () => {
  //   navigate('/resume'); // Navigate to the resume route
  // };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/file/d/1jrhLw9i0bhGGiGdcG3Ac0QOyjLy-1MJL/view?usp=share_link','_blank'); // Navigate to the Google Drive link
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/" className="brand">Harsha Saketh Konjeti</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="ml-auto">
        <Nav.Link onClick={() => handleScroll('projects')} className="nav-link-custom">Work</Nav.Link>
          <Nav.Link href="/about" className="nav-link-custom">About</Nav.Link>
          <Button variant="custom" className="ml-2" onClick={handleResumeClick}>Resume</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default Header;