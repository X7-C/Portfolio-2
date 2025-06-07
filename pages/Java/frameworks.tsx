import { Container, Button, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainNavbar from "../../components/Navbar";
import BackgroundTeeth from "../../components/BackgroundTeeth";

const Frameworks = () => {
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
          <h1 className="mb-4">JavaScript Frameworks Project</h1>
          <Image
            src="/images/magicEntranceThumbnail.png"
            alt="Frameworks Project Thumbnail"
            fluid
            rounded
            className="mx-auto mb-3"
            style={{ maxHeight: "300px", width: "auto" }}
          />
          <p className="text-muted">
            E-commerce store created with React, TypeScript, and routing.
          </p>
          <div className="d-flex justify-content-center gap-2">
            <Button
              variant="primary"
              href="https://magic-missile-entrance.netlify.app"
              target="_blank"
            >
              View Live Site
            </Button>
            <Button
              variant="secondary"
              href="https://github.com/X7-C/Magic-Missile-Assignment"
              target="_blank"
            >
              View GitHub Repo
            </Button>
          </div>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4 text-center">
          <h3>Project Description</h3>
          <p>
            This site showcases an online storefront with product pages, a cart system, and client-side routing using React Router. It demonstrates knowledge of state management and component structuring in a real-world SPA context.
          </p>
        </Card>

        <Card className="bg-dark text-white mb-4 shadow p-4">
          <h3 className="text-center mb-4">Reflections</h3>

          <ul>
            <li>Improved accessibility by correctly using labels with htmlFor.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`<label htmlFor="email">Email:</label>
<input id="email" type="email" />`}</code>
          </pre>

          <ul>
            <li>Replaced <code>any</code> types with specific interfaces.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`interface Product {
  id: string;
  title: string;
  price: number;
}`}</code>
          </pre>

          <ul>
            <li>Added JSDoc comments to key utility functions.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`/**
 * Gets cart data from local storage
 * @returns {CartItem[]} Parsed cart items array
 */
function getCart() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}`}</code>
          </pre>

          <ul>
            <li>Cleaned up excessive whitespace and indentation.</li>
            <li>Removed unused variables and switched unnecessary <code>let</code> to <code>const</code>.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`// Before:
let total = 0;

// After:
const total = cart.reduce(...);`}</code>
          </pre>

          <ul>
            <li>Addressed trailing whitespace in multiple components.</li>
            <li>Inconsistent indentation cleaned up using Prettier.</li>
          </ul>
          <pre className="bg-black text-white p-3 rounded overflow-auto" style={{ fontSize: "0.9rem" }}>
            <code>{`// Example fix:
function render() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}`}</code>
          </pre>
        </Card>

        <Card className="bg-dark text-white shadow p-4 text-center">
          <p>
            This project helped solidify my understanding of React, and I learned the importance of keeping code clean and accessible. It was also my first time deploying on Netlify and solving routing issues there.
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

export default Frameworks;
