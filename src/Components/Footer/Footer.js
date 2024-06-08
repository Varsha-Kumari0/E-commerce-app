import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2 className="footer-title">About Us</h2>
            <p>
              We are a leading e-commerce site providing the best products at
              the best prices. Our mission is to deliver quality and
              satisfaction to our customers.
            </p>
          </div>
          <div className="footer-section links">
            <h2 className="footer-title">Quick Links</h2>
            <ul>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="footer-section social">
            <h2 className="footer-title">Follow Us</h2>
            <div className="social-icons">
              <Link
                to="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} SSDC's Store. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
