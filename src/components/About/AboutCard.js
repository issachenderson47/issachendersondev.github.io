import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there! I'm <span className="purple">Issac</span>, a former network engineer and systems administrator, now thriving in IT security, AI architecture, and project management for COE (Centers of Excellence) teams. I'm driven by my passion for designing and securing tech solutions that push the boundaries of innovation and efficiency. Based in New York, I stay in the know of cutting-edge trends and industry shifts, constantly expanding my knowledge to grow and evolve.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Mastering strategies in Warzone
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new technologies in AI and cloud
            </li>
            <li className="about-activity">
              <ImPointRight /> Attending tech meetups and sharing insights
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Stay curious, stay sharp, and keep moving forward!"
          </p>
          <footer className="blockquote-footer">Me!</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;