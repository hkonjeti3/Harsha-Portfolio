import React from "react";
import "./Home/home.css"
import aboutImg from "../../src/Assets/new.png"
import Lottie from "react-lottie";
import animationData from "../../src/Assets/mail-animation.json"
import { motion } from 'framer-motion';
function About() {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=harshasaketh.konjeti@gmail.com`;

    return (
        <about>
            <div className="about-container">
                <div className="about-heading col-lg-4 colg-md-12"><img src={aboutImg}></img></div>
                <div className="about-me col-lg-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5 }} >
                        <h2>About Me</h2>
                    </motion.div>
                    <p></p>Hi there! I'm Harsha Saketh Konjeti, currently pursuing my Master's in Computer Science at Indiana University Bloomington. With a solid foundation in programming, data management, web development, and software engineering principles, I am eager to leverage my skills in real-world projects.<p />

                    <p>My journey includes two years of professional experience and a full-time internship, along with years of practice during my studies, which have equipped me with a versatile skill set across frontend, backend, DevOps, and machine learning. My approach is driven by a passion for innovation and a commitment to delivering impactful software solutions.</p>

                    <p>I thrive on solving complex problems and embracing new challenges. For instance, I tackled a major issue with duplicate report generation at work, significantly optimizing performance with the guidance of my mentor. I also proactively developed over five scripts to streamline my team's workflow, demonstrating my dedication to efficiency and problem-solving.</p>

                    <p>Currently, I am interning at YstemAndChess as a Software Engineer, where I am managing the team as part of my Curricular Practical Training (CPT). This role has further honed my leadership and project management skills.</p>

                    <p>I believe in the power of initiative and continuous learning. Whether leading a project or collaborating with a team, I bring enthusiasm and creativity to every task. My commitment to excellence is reflected in how I completed my internship project ahead of schedule.</p>

                    <p>Let's connect and explore how we can work together to create innovative solutions and achieve extraordinary results!</p>
                    <div>

                        <a href={gmailUrl} target="_blank" rel="noopener noreferrer">
                            <Lottie options={defaultOptions} height={150} width={150} />
                        </a>
                        <div className="about-contact-me">click to mail</div>
                    </div>
                </div>

            </div>
        </about>
    );

}

export default About;