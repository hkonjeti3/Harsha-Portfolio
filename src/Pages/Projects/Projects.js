import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import 'bootstrap-icons/font/bootstrap-icons.css';

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <div className="project-heading-parent">
          <h1 className="project-heading">
            RECENT WORKS
          </h1>
          <div className="project-glimse col-lg-5">
          Take a look at my latest projects below, showcasing my creative journey and love for crafting solutions. <i class="bi bi-arrow-down-left arrow"></i>
          </div>
        </div>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Secure Banking"
              description="Secure Banking is a state-of-the-art banking application that prioritizes modern banking features and stringent security protocols. The application employs HTTPS for secure communication, JWT tokens for authentication, role-based session management for controlled access, and OTP authentication for enhanced security. Built using Angular, Spring Boot, and PostgreSQL, Secure Banking is designed for reliability and scalability. The application is deployed using Docker, ensuring a consistent and efficient environment."
              ghLink="https://github.com/hkonjeti3/SystemProtocol_SBS"
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="LinC Art Gallery"
              description="LinC Art Gallery is an innovative art gallery booking website that helps customers explore and book tickets for various events across the USA. Users can make payments, mark favorite events, and easily search for upcoming shows. Venue owners can effortlessly add and manage their events, reaching a wider audience. The project is built using MongoDB, Express, React, and Node (MERN stack), with Firebase for Google authentication. For seamless deployment, we use Render and Netlify, ensuring a robust and user-friendly experience."
              ghLink=""
              demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="System for Predicting the Students Learning Styles"
              description="This Machine Learning project leverages the Felder-Silverman Classification to identify and analyze students' learning styles. Utilizing educational data mining and Python, this system provides personalized insights to help students understand and improve their learning strategies. It also offers faculty actionable conclusions to tailor their teaching methods to match student learning preferences. This innovative approach enhances student engagement, improves academic performance, and empowers educators, fostering a more effective and inclusive educational environment."
              ghLink=""
              demoLink=""
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
