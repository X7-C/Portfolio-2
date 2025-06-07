import { Container, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Navbar";
import BackgroundTeeth from "../../components/BackgroundTeeth";

const Semester = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#111" }}>
      <MainNavbar />
      <BackgroundTeeth />

      <Container
        className="py-5 position-relative"
        style={{
          zIndex: 1,
          maxWidth: "1140px",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          borderRadius: "10px",
          marginTop: "20px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"
        }}
      >
        <Card className="bg-dark text-white mb-4 shadow text-center p-4">
          <h1 className="mb-4">Semester Project 2</h1>
          <Image
            src="/images/semesterThumbnail.png"
            alt="Semester Project Thumbnail"
            fluid
            rounded
            className="mx-auto mb-3"
            style={{ maxHeight: "300px", width: "auto" }}
          />
          <p className="text-muted">
            Auction site project showing user authentication and bidding features.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="primary"
              href="https://x7-c.github.io/WebsiteForMoneyh"
              target="_blank"
            >
              View Live Site
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/X7-C/WebsiteForMoneyh"
              target="_blank"
            >
              View GitHub Repo
            </Button>
          </div>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4 text-center">
          <h3>Project Description</h3>
          <p>
            This project is an online auction platform where users can register, log in, and place bids on items. The site uses Noroff’s auction API and implements full CRUD functionality for listings.
          </p>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4">
          <h3 className="text-center mb-4">Reflections</h3>
          <ul>
            <li>Successfully implemented registration, login, and listing creation.</li>
            <li>Code organized into modules with separation of concerns.</li>
            <li>Bidding was handled via <code>prompt()</code>, which has now been replaced with a proper input form.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`// Before:
const bidAmount = parseFloat(prompt("Enter your bid amount"));

// After:
const input = form.querySelector(".bid-input");
const bidAmount = parseFloat(input.value);`}</code>
          </pre>

          <ul>
            <li>Improved naming consistency and formatting using Prettier.</li>
            <li>API calls are now more centralized in a reusable service file.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`// Centralized API call
export async function getListings() {
  return apiRequest("auction/listings?_bids=true&_seller=true", "GET");
}`}</code>
          </pre>

          <p>I didn’t change any naming inconsistencies since I wasn’t exactly sure what they were referring to in the feedback.</p>
        </Card>

        <Card className="bg-dark text-white shadow p-4 text-center">
          <p>
            Going forward, I plan to incorporate more advanced error handling and consider using TypeScript in more projects for maintainability.
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

export default Semester;
