import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
          <h1 className="project-header">
  Enterprise <span className="purple">Solutions & AI</span>
</h1>
<p className="home-about-body">
  Pushing the boundaries of AI-driven technologies, cloud integrations, and DevOps to build scalable, intelligent solutions. 
  My projects focus on delivering automation, real-time insights, and enhanced collaboration, utilizing cutting-edge tools and frameworks to solve complex challenges across various industries.
  <br />
  <br />
  <b>Recent Projects:</b>
  <ul>
  <li><b>AI-Powered Content Moderation</b></li>
  <li><b>Edge AI for Emotion Analysis</b></li>
  <li><b>Serverless E-commerce Personalization</b></li>
  <li><b>DevOps Dashboard with AI Insights</b></li>
</ul>
</p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row className="home-about-social">
          <Col md={12}>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/issachenderson47"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/issachenderson"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>s    </Container>
  );
}

export default Home2;