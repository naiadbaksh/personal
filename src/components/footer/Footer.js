import React from "react";
import Button from "../button/Button";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <a
              href="https://www.linkedin.com/in/naiad-baksh-91963aa0/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-button">
                <i className="fab fa-linkedin"></i>
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="footer-link-items">
            <a
              href="https://www.twitter.com/naiadcodes "
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-button">
                <i className="fab fa-twitter"></i>
              </div>
              <span>Twitter</span>
            </a>
          </div>
          <div className="footer-link-items">
            <a
              href="https://www.instagram.com/naiadcodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="footer-button">
                <i className="fab fa-instagram"></i>
              </div>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <Link className="social-logo">
            NAIAD <i class="nb-logo-blue"></i>
          </Link>
        </div>
        <small className="website-rights">Naiad Baksh © 2021</small>
      </section>
    </div>
  );
}

export default Footer;
