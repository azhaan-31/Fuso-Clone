import { Link } from 'react-router-dom';
import './footer.css';

function Footer() {
  return (
    <footer className="main-footer">

      <div className="container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand">

            <Link to="/" className="footer-logo">
              <span>F</span>
              FUSO
            </Link>

            <p>
              Powerful vehicles and smart solutions
              built to keep your business moving
              forward.
            </p>

            <div className="footer-social">

              <a href="#facebook">
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#instagram">
                <i className="bi bi-instagram"></i>
              </a>

              <a href="#linkedin">
                <i className="bi bi-linkedin"></i>
              </a>

            </div>

          </div>


          {/* Quick Links */}

          <div className="footer-column">

            <h4>Quick Links</h4>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/vehicles">Vehicles</Link>
            <Link to="/services">Services</Link>

          </div>


          {/* Support */}

          <div className="footer-column">

            <h4>Support</h4>

            <Link to="/contact">Contact Us</Link>
            <Link to="/login">Login</Link>

            <a href="#privacy">
              Privacy Policy
            </a>

            <a href="#terms">
              Terms & Conditions
            </a>

          </div>


          {/* Contact */}

          <div className="footer-column">

            <h4>Contact</h4>

            <p>
              <i className="bi bi-geo-alt"></i>
              Your Location
            </p>

            <p>
              <i className="bi bi-telephone"></i>
              +91 12345 67890
            </p>

            <p>
              <i className="bi bi-envelope"></i>
              info@fuso.com
            </p>

          </div>

        </div>


        {/* Bottom */}

        <div className="footer-bottom">

          <p>
            © 2026 FUSO. All rights reserved.
          </p>

          <p>
            Built with React
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;