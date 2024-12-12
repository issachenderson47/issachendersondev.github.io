import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Advanced ChatOps with AI Assistants"
              description="Enterprise-level ChatOps platform that integrates AI agents and DevOps workflows. It supports real-time collaboration, automated deployments, troubleshooting, and system monitoring using GPT-powered AI models."
              ghLink="https://github.com/issac/project-1"
              demoLink="https://chatops-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AI-Driven Predictive Maintenance for IoT Devices"
              description="IoT-driven, AI-powered predictive maintenance system for industrial use. Trained a model to predict machine failures using sensor data to reduce downtime in manufacturing environments."
              ghLink="https://github.com/issac/project-2"
              demoLink="https://iot-maintenance-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="AI-Powered Content Moderation System"
              description="Scalable AI content moderation tool to detect harmful content (e.g., hate speech, violence) in real-time across social media platforms. Leveraged NLP models and real-time monitoring."
              ghLink="https://github.com/issac/project-3"
              demoLink="https://content-moderation-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Edge AI for Real-Time Video Emotion Analysis"
              description="Real-time emotion detection system using optimized AI models for edge devices like security cameras and smartphones. This system runs on-device for faster processing and increased privacy."
              ghLink="https://github.com/issac/project-4"
              demoLink="https://emotion-detection-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Serverless Personalization Engine for E-commerce"
              description="Recommendation engine for e-commerce platforms that personalizes product suggestions in real-time using serverless architectures like AWS Lambda and PyTorch for model deployment."
              ghLink="https://github.com/issac/project-5"
              demoLink="https://personalization-engine-demo.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Next-Gen DevOps Dashboard with AI Insights"
              description="DevOps dashboard that provides insights into CI/CD pipelines, infrastructure status, and security alerts. Integrated AI to offer proactive recommendations and issue predictions."
              ghLink="https://github.com/issac/project-6"
              demoLink="https://devops-dashboard-demo.com"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;