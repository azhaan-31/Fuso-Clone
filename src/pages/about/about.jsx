import './About.css';

function About() {
  return (
    <div className="about-page">

      {/* =================================
          ABOUT HERO
      ================================= */}

      <section className="about-hero">

        <div className="container">

          <div className="about-hero-content">

            <span className="page-label">
              ABOUT FUSO
            </span>

            <h1>
              Moving businesses
              <br />
              <span>forward.</span>
            </h1>

            <p>
              We build reliable vehicles and smart
              transportation solutions that help
              businesses move with confidence.
            </p>

          </div>

        </div>

      </section>


      {/* =================================
          INTRO
      ================================= */}

      <section className="about-intro">

        <div className="container">

          <div className="row align-items-center g-5">

            <div className="col-lg-6">

              <span className="section-label">
                WHO WE ARE
              </span>

              <h2>
                Built around your
                <span> business.</span>
              </h2>

            </div>


            <div className="col-lg-6">

              <p className="about-description">
                Fuso is focused on delivering dependable
                commercial vehicles designed for real-world
                business needs.
              </p>

              <p className="about-description">
                From powerful trucks to professional
                services, we combine engineering,
                technology and customer support to help
                businesses operate efficiently.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          VALUES
      ================================= */}

      <section className="about-values">

        <div className="container">

          <div className="section-heading">

            <span>
              OUR VALUES
            </span>

            <h2>
              What drives us
            </h2>

          </div>


          <div className="row g-4">

            {/* Reliability */}

            <div className="col-lg-4 col-md-6">

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h3>
                  Reliability
                </h3>

                <p>
                  Vehicles and services you can
                  depend on every day.
                </p>

              </div>

            </div>


            {/* Innovation */}

            <div className="col-lg-4 col-md-6">

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-lightbulb"></i>
                </div>

                <h3>
                  Innovation
                </h3>

                <p>
                  Smart technology designed for
                  modern transportation.
                </p>

              </div>

            </div>


            {/* Customer */}

            <div className="col-lg-4 col-md-6">

              <div className="value-card">

                <div className="value-icon">
                  <i className="bi bi-people"></i>
                </div>

                <h3>
                  Customer First
                </h3>

                <p>
                  Solutions and support built around
                  your business.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          STATS
      ================================= */}

      <section className="about-stats">

        <div className="container">

          <div className="row">

            <div className="col-md-3 col-6">

              <div className="about-stat">

                <strong>
                  50+
                </strong>

                <span>
                  Years Experience
                </span>

              </div>

            </div>


            <div className="col-md-3 col-6">

              <div className="about-stat">

                <strong>
                  100K+
                </strong>

                <span>
                  Vehicles
                </span>

              </div>

            </div>


            <div className="col-md-3 col-6">

              <div className="about-stat">

                <strong>
                  50+
                </strong>

                <span>
                  Countries
                </span>

              </div>

            </div>


            <div className="col-md-3 col-6">

              <div className="about-stat">

                <strong>
                  24/7
                </strong>

                <span>
                  Support
                </span>

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

          <div className="about-cta-box">

            <div>

              <span>
                READY TO MOVE?
              </span>

              <h2>
                Let's move your
                <br />
                business forward.
              </h2>

            </div>

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Contact Us
              <i className="bi bi-arrow-right"></i>
            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default About;