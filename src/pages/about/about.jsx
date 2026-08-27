import './About.css';

function About() {
  return (
    <div className="about-page">

      {/* =================================
          ABOUT HERO
      ================================= */}

      <section className="about-hero">

        <div className="about-hero-shape"></div>

        <div className="container">

          <div className="about-hero-content">

            <span className="about-label">
              <i className="bi bi-info-circle"></i>
              About Fuso
            </span>

            <h1>
              Moving your
              <span> business forward.</span>
            </h1>

            <p>
              We combine modern technology, powerful
              solutions and thoughtful design to help
              businesses work smarter and grow faster.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          ABOUT INTRO
      ================================= */}

      <section className="about-intro">

        <div className="container">

          <div className="row align-items-center g-5">

            {/* Image */}

            <div className="col-lg-6">

              <div className="about-image-wrapper">

                <div className="about-image-bg"></div>

                <img
                  src="/src/assets/images/car 6.png"
                  alt="Fuso vehicle"
                  className="about-car-image"
                />

                <div className="about-experience-card">

                  <strong>
                    10+
                  </strong>

                  <span>
                    Years of
                    <br />
                    Experience
                  </span>

                </div>

              </div>

            </div>


            {/* Content */}

            <div className="col-lg-6">

              <div className="about-content">

                <span className="section-label">
                  Who We Are
                </span>

                <h2>
                  Built with purpose.
                  <br />
                  Designed for
                  <span> success.</span>
                </h2>

                <p>
                  Fuso is a modern platform designed to
                  help businesses simplify their daily
                  operations and achieve more.
                </p>

                <p>
                  From powerful tools to an intuitive
                  experience, everything we build is
                  focused on making your work easier,
                  faster and more productive.
                </p>


                {/* Points */}

                <div className="about-points">

                  <div className="about-point">

                    <div className="point-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>

                    <div>
                      <strong>
                        Simple & Powerful
                      </strong>

                      <p>
                        Easy-to-use tools built for
                        modern businesses.
                      </p>
                    </div>

                  </div>


                  <div className="about-point">

                    <div className="point-icon">
                      <i className="bi bi-check-lg"></i>
                    </div>

                    <div>
                      <strong>
                        Built for Growth
                      </strong>

                      <p>
                        Solutions that grow alongside
                        your business.
                      </p>
                    </div>

                  </div>

                </div>


                <button className="about-button">

                  Learn More

                  <i className="bi bi-arrow-right"></i>

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          STATISTICS
      ================================= */}

      <section className="about-stats-section">

        <div className="container">

          <div className="about-stats">

            <div className="about-stat">

              <strong>
                10K+
              </strong>

              <span>
                Happy Customers
              </span>

            </div>


            <div className="stat-line"></div>


            <div className="about-stat">

              <strong>
                25+
              </strong>

              <span>
                Countries
              </span>

            </div>


            <div className="stat-line"></div>


            <div className="about-stat">

              <strong>
                98%
              </strong>

              <span>
                Customer Satisfaction
              </span>

            </div>


            <div className="stat-line"></div>


            <div className="about-stat">

              <strong>
                24/7
              </strong>

              <span>
                Customer Support
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          OUR MISSION
      ================================= */}

      <section className="mission-section">

        <div className="container">

          <div className="row justify-content-center">

            <div className="col-lg-8">

              <div className="mission-content">

                <span className="section-label">
                  Our Mission
                </span>

                <h2>
                  Technology that makes
                  <span> a difference.</span>
                </h2>

                <p>
                  Our mission is simple: create technology
                  that removes complexity and gives people
                  the tools they need to achieve their goals.
                </p>

                <div className="mission-icon">

                  <i className="bi bi-rocket-takeoff"></i>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          CTA
      ================================= */}

      <section className="about-cta">

        <div className="container">

          <div className="cta-box">

            <div>

              <span>
                Ready to get started?
              </span>

              <h2>
                Let's build something
                <br />
                amazing together.
              </h2>

            </div>

            <button>
              Get Started

              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;