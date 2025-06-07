import { Container, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Navbar";
import BackgroundTeeth from "../../components/BackgroundTeeth";

const Exam = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#111" }}>
      <MainNavbar />
      <BackgroundTeeth />

      <Container
        className="py-5 position-relative"
        style={{
          zIndex: 1,
          maxWidth: "1140px",
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          borderRadius: "10px",
          marginTop: "20px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <Card className="bg-dark text-white mb-4 shadow text-center p-4">
          <h1 className="mb-4">Exam Project 2</h1>
          <Image
            src="/images/exam2Thumbnail.png"
            alt="Exam Project Thumbnail"
            fluid
            rounded
            className="mx-auto mb-3"
            style={{ maxHeight: "300px", width: "auto" }}
          />
          <p className="text-muted">
            Final fullstack project (currently under grading).
          </p>
          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="primary"
              href="https://holidazefromx7.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/X7-C/Holidaze-Exam"
              target="_blank"
              rel="noopener noreferrer"
            >
              View GitHub Repo
            </Button>
          </div>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4 text-center">
          <h3>Project Description</h3>
          <p>
            This exam project showcases fullstack skills in a real-world scenario. It includes
            user authentication, booking management, venue handling, and responsive design
            using modern web development practices with React, TypeScript, and Noroff's API.
          </p>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4">
          <h3 className="text-center mb-4">Reflections</h3>
          <p>
            Due to the exam rules, no post-submission changes were allowed. However, I ensured the
            project adhered to clean structure and responsive design principles.
          </p>

          <p><strong>Highlights:</strong></p>
          <ul>
            <li>Built with full component structure using React and TypeScript</li>
            <li>Includes routing, authentication, and conditional user flows</li>
            <li>Fully responsive UI and mobile-friendly layout</li>
            <li>Deployed with working live demo and complete README</li>
          </ul>

          <p>
            <strong>What I would improve:</strong> Once unlocked, I would enhance form validation,
            error boundaries, and UI polish. I'd also like to improve how token storage and user
            permissions are managed across components.
          </p>
        </Card>

        <Card className="bg-dark text-white shadow p-4 text-center">
          <p>
            I plan to revisit this project after grading and expand it further with better UX and improved backend handling.
          </p>
          <div className="mt-4">
            <Link to="/" className="btn btn-outline-light">
              ← Back to Front Page
            </Link>
          </div>
        </Card>
      </Container>
    </div>
  );
};

export default Exam;
