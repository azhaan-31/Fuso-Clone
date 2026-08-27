import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import carImage from '../../assets/images/car.png';

import './Home.css';

function Home() {

  const navigate = useNavigate();

  const carRef = useRef(null);
  const startX = useRef(0);

  const [isDragging, setIsDragging] = useState(false);
  const [carPosition, setCarPosition] = useState(0);

  const handlePointerDown = (event) => {

    setIsDragging(true);

    startX.current = event.clientX;

    carRef.current?.setPointerCapture(
      event.pointerId
    );
  };


  const handlePointerMove = (event) => {

    if (!isDragging) return;

    const difference =
      event.clientX - startX.current;

    const position = Math.max(
      0,
      Math.min(difference, 300)
    );

    setCarPosition(position);
  };


  const handlePointerUp = () => {

    if (!isDragging) return;

    setIsDragging(false);

    if (carPosition >= 120) {

      setCarPosition(500);

      setTimeout(() => {

        navigate('/about');

        setCarPosition(0);

      }, 350);

    } else {

      setCarPosition(0);

    }
  };


  return (
    <div className="home-page">

      {/* =================================
          HERO SECTION
      ================================= */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center">

            {/* LEFT CONTENT */}

            <div className="col-lg-6">

              <span className="hero-subtitle">
                Welcome to Fuso
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

                <a
                  href="/vehicles"
                  className="btn btn-primary"
                >
                  Explore Vehicles

                  <i className="bi bi-arrow-right"></i>

                </a>

                <a
                  href="/about"
                  className="btn btn-outline-secondary"
                >
                  Learn More
                </a>

              </div>

            </div>


            {/* RIGHT SIDE */}

            <div className="col-lg-6">

              <div className="hero-car-area">

                {/* Background Circle */}

                <div className="hero-circle"></div>


                {/* Decorative Text */}

                <div className="hero-car-label">

                  <span>
                    NEXT
                  </span>

                  <strong>
                    GENERATION
                  </strong>

                </div>


                {/* Swipe Instruction */}

                <div className="swipe-instruction">

                  <span>
                    Swipe the vehicle
                  </span>

                  <i className="bi bi-arrow-right"></i>

                </div>


                {/* Car */}

                <div
                  ref={carRef}
                  className={`hero-car ${
                    isDragging ? 'dragging' : ''
                  }`}
                  style={{
                    transform:
                      `translateX(${carPosition}px)`
                  }}
                  onPointerDown={handlePointerDown}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  onPointerCancel={handlePointerUp}
                >

                  <img
                    src={carImage}
                    alt="Fuso vehicle"
                    draggable="false"
                  />

                </div>


                {/* Bottom Hint */}

                <div className="hero-swipe-line">

                  <span></span>

                  <small>
                    DRAG
                  </small>

                  <span></span>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =================================
          FEATURES
      ================================= */}

      <section className="content-section">

        <div className="container">

          <div className="section-heading">

            <span>
              Our Features
            </span>

            <h2>
              Everything you need
            </h2>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;