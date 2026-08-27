import './Footer.css';

function Footer() {
  return (
    <footer className="main-footer">

      {/* =================================
          FOOTER TOP
      ================================= */}

      <div className="footer-top">

        <div className="container">

          <div className="row g-5">

            {/* Brand */}

            <div className="col-lg-4">

              <a
                href="/"
                className="footer-logo"
              >

                <span className="footer-logo-icon">
                  F
                </span>

                <span>
                  FUSO
                </span>

              </a>

              <p className="footer-description">
                Building modern solutions that help
                businesses work smarter, move faster
                and achieve more.
              </p>


              {/* Social Icons */}

              <div className="footer-social">

                <a href="#" aria-label="Facebook">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#" aria-label="Instagram">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#" aria-label="LinkedIn">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#" aria-label="Twitter">
                  <i className="bi bi-twitter-x"></i>
                </a>

              </div>

            </div>


            {/* Company */}

            <div className="col-6 col-lg-2">

              <div className="footer-column">

                <h3>
                  Company
                </h3>

                <a href="/">
                  Home
                </a>

                <a href="/about">
                  About
                </a>

                <a href="#">
                  Vehicles
                </a>

                <a href="#">
                  Services
                </a>

              </div>

            </div>


            {/* Support */}

            <div className="col-6 col-lg-2">

              <div className="footer-column">

                <h3>
                  Support
                </h3>

                <a href="#">
                  Contact
                </a>

                <a href="#">
                  Help Center
                </a>

                <a href="#">
                  FAQ
                </a>

                <a href="#">
                  Privacy
                </a>

              </div>

            </div>


            {/* Contact */}

            <div className="col-lg-4">

              <div className="footer-column">

                <h3>
                  Get in touch
                </h3>

                <p className="footer-contact">
                  Have questions or want to know more?
                  Our team is here to help.
                </p>


                <a
                  href="mailto:hello@fuso.com"
                  className="footer-email"
                >
                  hello@fuso.com
                </a>


                <a
                  href="#"
                  className="footer-contact-button"
                >
                  Contact Us

                  <i className="bi bi-arrow-right"></i>

                </a>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =================================
          FOOTER BOTTOM
      ================================= */}

      <div className="footer-bottom">

        <div className="container">

          <div className="footer-bottom-inner">

            <p>
              © 2026 Fuso. All rights reserved.
            </p>

            <div className="footer-bottom-links">

              <a href="#">
                Privacy Policy
              </a>

              <a href="#">
                Terms of Service
              </a>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;