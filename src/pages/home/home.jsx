import { Link } from 'react-router-dom';
import './home.css';

import carImage from '../../assets/images/car.png';

function Home() {
  return (
    <div className="home-page">

      {/* ================================
          HERO SECTION
      ================================= */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT CONTENT */}

            <div className="col-lg-6">

              <div className="hero-content">

                <span className="hero-subtitle">
                  ✦ Welcome to Fuso
                </span>

                <h1>
                  Built to move.
                  <br />
                  <span>Built for you.</span>
                </h1>

                <p>
                  Powerful vehicles, smart solutions
                  and reliable services designed to
                  keep your business moving forward.
                </p>

                <div className="hero-actions">

                  <Link
                    to="/vehicles"
                    className="btn btn-primary"
                  >
                    Explore Vehicles
                    <i className="bi bi-arrow-right"></i>
                  </Link>

                  <Link
                    to="/about"
                    className="btn btn-outline-secondary"
                  >
                    Learn More
                  </Link>

                </div>


                {/* HERO STATS */}

                <div className="hero-stats">

                  <div className="hero-stat">
                    <strong>10K+</strong>
                    <span>Happy Users</span>
                  </div>

                  <div className="hero-stat">
                    <strong>98%</strong>
                    <span>Satisfaction</span>
                  </div>

                  <div className="hero-stat">
                    <strong>24/7</strong>
                    <span>Support</span>
                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT CAR */}

            <div className="col-lg-6">

              <div className="hero-image-wrapper">

                <div className="hero-glow"></div>

                <img
                  src={carImage}
                  alt="Fuso vehicle"
                  className="hero-car"
                />

                <div className="hero-image-info">

                  <div className="hero-info-icon">
                    <i className="bi bi-lightning-charge-fill"></i>
                  </div>

                  <div>
                    <strong>
                      Premium Performance
                    </strong>

                    <span>
                      Built for excellence
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* SCROLL TEXT */}

      {/* SCROLL TEXT */}

<div className="hero-scroll">

  <span>
    Scroll to explore
  </span>

  <i className="bi bi-arrow-down"></i>

</div>

      </section>

    </div>
  );
}

export default Home;