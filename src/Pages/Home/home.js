import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../Assets/mail-animation.json";
import "./home.css";
import Techstack from "../Techstack";
import Projects from "../Projects/Projects";
import { Fade, Zoom } from 'react-reveal';
import Typewriter from 'typewriter-effect';
import Typical from 'react-typical';




const Home = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=harshasaketh.konjeti@gmail.com`;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className="home">
            <Container className="base">
                <div className="tag-parent">
                    <Zoom>
                        <div>
                            Creating innovative solutions and
                        </div>

                        <div className="tag-second">
                            <div className="tag-part1">
                                experiences with&nbsp;
                            </div>
                            <div className="typewriter">
                                <Typewriter
                                    options={{
                                        strings: [' Unique Vision', ' Strategic Insight', ' Technical Expertise'],
                                        autoStart: true,
                                        loop: true,
                                        deleteSpeed: 50,
                                    }}
                                />

                            </div>
                        </div>

                    </Zoom>
                    <Link to="/about">
                        <button className="home-btn">Peek Inside My World</button>
                    </Link>


                </div>
                <div className="section2">
                    <div className="welcome-text">
                        <Zoom> <h2>Hello I'm Harsha Saketh,<br /> <span>Developer</span> and Software <span>Strategist.</span></h2></Zoom>
                    </div>
                    <div className="contact">
                        <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                            <Lottie options={defaultOptions} height={150} width={150} />
                        </a>
                        <div className="about-contact-me">click to mail</div>
                    </div>
                </div>
                <div id="recent-works">
                    <Projects />
                </div>
                <Container className="skills_container">
                    <div className="skills">Technological Arsenal</div>
                </Container>
                <Techstack />
                <div className="email">
                    <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                        harshasaketh.konjeti@gmail.com <i class="bi bi-arrow-up-right arrow"></i>
                    </a>
                </div>
            </Container>
        </div>
    );
}

export default Home;
