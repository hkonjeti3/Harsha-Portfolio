import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiDocker,
  DiPostgresql,
  DiAngularSimple,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiSpringboot,
  SiFlask,
  SiJenkins,
  SiSonarqube,
  SiKibana,
  SiLooker,
  SiPostman,
  SiC,
  SiCplusplus,
  SiShell,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  const skills = [
    { icon: <DiPython title="Python" />, name: "Python" },
    { icon: <SiShell title="Shell Script" />, name: "Shell Script" },
    { icon: <DiJava title="Java" />, name: "Java" },
    { icon: <SiC title="C" />, name: "C" },
    { icon: <CgCPlusPlus title="C++" />, name: "C++" },
    { icon: <DiMysql title="MySQL" />, name: "MySQL" },
    { icon: <DiPostgresql title="PostgreSQL" />, name: "PostgreSQL" },
    { icon: <DiMongodb title="MongoDB" />, name: "MongoDB" },
    { icon: <DiHtml5 title="HTML" />, name: "HTML" },
    { icon: <DiCss3 title="CSS" />, name: "CSS" },
    { icon: <DiBootstrap title="Bootstrap" />, name: "Bootstrap" },
    { icon: <DiAngularSimple title="Angular" />, name: "Angular" },
    { icon: <SiSpringboot title="SpringBoot" />, name: "SpringBoot" },
    { icon: <DiJavascript1 title="JavaScript" />, name: "JavaScript" },
    { icon: <DiReact title="React.JS" />, name: "React.JS" },
    { icon: <DiNodejs title="Node.JS" />, name: "Node.JS" },
    { icon: <SiFlask title="Flask" />, name: "Flask" },
    { icon: <SiPostman title="Postman" />, name: "Postman" },
    { icon: <SiJenkins title="Jenkins" />, name: "Jenkins" },
    { icon: <SiSonarqube title="SonarQube" />, name: "SonarQube" },
    { icon: <SiKibana title="Kibana" />, name: "Kibana" },
    { icon: <SiLooker title="Looker" />, name: "Looker" },
    { icon: <DiDocker title="Docker" />, name: "Docker" },
    { icon: <DiGit title="Git" />, name: "Git" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((skill, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index}>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">{skill.icon}</div>
              <div className="flip-card-back">{skill.name}</div>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;


// REST API
