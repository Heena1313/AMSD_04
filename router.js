import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// Home Component
function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>This is the home screen. Click the links to update the screen.</p>
    </div>
  );
}

// Services Component
function Services() {
  return (
    <div>
      <h2>Services Page</h2>
      <p>We provide different services here.</p>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>You can contact us here.</p>
    </div>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div style={{ padding: "20px", fontFamily: "Arial" }}>
        <h1>React Router – Updating the Screen</h1>

        <nav>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none"
            }}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
