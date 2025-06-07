import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Navbar";
import BackgroundTeeth from "../../components/BackgroundTeeth";

const HomePage = () => {
  const projects = [
    {
      id: "frameworks",
      title: "JavaScript Frameworks Project",
      description:
        "A fully functional e-commerce site created using React and TypeScript. Includes product listings, a combined cart and checkout page for streamlined UX, and dynamic routing. Styling was a learning challenge but the app remains responsive and stable.",
      image: "/images/magicEntranceThumbnail.png",
      live: "https://magic-missile-entrance.netlify.app",
      repo: "https://github.com/X7-C/Magic-Missile-Assignment"
    },
    {
      id: "semester",
      title: "Semester Project 2",
      description:
        "An online auction platform featuring user registration, login, listing creation, and bidding. Built with modular JavaScript and structured error handling. Improvements include form-based bidding and better formatting based on feedback.",
      image: "/images/semesterThumbnail.png",
      live: "https://x7-c.github.io/WebsiteForMoneyh",
      repo: "https://github.com/X7-C/WebsiteForMoneyh"
    },
    {
      id: "exam",
      title: "Exam Project 2",
      description:
        "A fullstack booking platform showcasing authentication, API integration, and responsive design. No code modifications allowed due to grading. Reflection and planning provided in the linked Notion board.",
      image: "/images/exam2Thumbnail.png",
      live: "https://holidazefromx7.netlify.app",
      repo: "https://github.com/X7-C/Holidaze-Exam"
    }
  ];

  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#111" }}>
      <MainNavbar />
      <BackgroundTeeth />
      <Container
        className="py-5 position-relative text-white"
        style={{
          zIndex: 1,
          backgroundColor: "#1b1b1b",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          marginTop: "20px"
        }}
      >
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center mb-3">
            <div style={{ width: "200px", height: "200px", margin: "0 auto" }}>
              <Image
                src="/images/gitHubProfilePicture.png"
                alt="Profile"
                roundedCircle
                fluid
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  border: "4px solid #444"
                }}
              />
            </div>
          </Col>
          <Col xs={12} md={8}>
            <h2>About Me</h2>
            <p>
              I'm a 21-year-old front-end development student passionate about gaming and tech. With a growing
              interest in React, TypeScript, and fullstack development, I aim to build responsive, clean, and scalable
              web applications. I'm also into game dev and enjoy exploring languages like C++, C#, and Python in the future!
            </p>
          </Col>
        </Row>

        <div className="text-center mt-5">
          <span style={{ fontSize: "1.2rem", color: "#ccc" }}>Here's my most recent projects ↓</span>
        </div>
      </Container>
      <Container
        className="py-5 position-relative"
        style={{
          zIndex: 1,
          backgroundColor: "#181818",
          borderRadius: "10px",
          marginTop: "20px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <h1 className="mb-5 text-center text-white">X7-C's Portfolio Showcase</h1>

        {projects.map((project) => (
          <Row
            key={project.id}
            className="mb-5 align-items-center bg-dark bg-opacity-75 p-4 rounded project-tile"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <Col xs={12} md={6} className="mb-3 mb-md-0">
              <Image
                src={project.image}
                alt={`${project.title} thumbnail`}
                fluid
                rounded
                className="shadow-lg"
                style={{ border: "2px solid #444" }}
              />
            </Col>

            <Col xs={12} md={6} className="text-white">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="d-flex flex-wrap gap-2">
                <Link
                  to={`/${project.id}`}
                  className="btn btn-primary hover-zoom"
                  style={{ minWidth: "120px" }}
                >
                  Read More
                </Link>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success hover-zoom"
                  style={{ minWidth: "120px" }}
                >
                  View Live Site
                </a>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light hover-zoom"
                  style={{ minWidth: "120px" }}
                >
                  View GitHub Repo
                </a>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default HomePage;
