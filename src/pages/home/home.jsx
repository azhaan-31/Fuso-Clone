import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Home.css';

import carImage from '../../assets/images/car.png';

function Home() {

  const navigate = useNavigate();

  const carRef = useRef(null);

  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  const startX = useRef(0);

  const handlePointerDown = (e) => {

    setIsDragging(true);

    startX.current = e.clientX - dragX;

    carRef.current?.setPointerCapture(e.pointerId);
  };


  const handlePointerMove = (e) => {

    if (!isDragging) {
      return;
    }

    let newX = e.clientX - startX.current;

    // Limit dragging
    if (newX < -80) {
      newX = -80;
    }

    if (newX > 350) {
      newX = 350;
    }

    setDragX(newX);
  };


  const handlePointerUp = () => {

    setIsDragging(false);

    // If dragged far enough → Vehicles page
    if (dragX > 180) {

      setDragX(500);

      setTimeout(() => {
        navigate('/vehicles');
      }, 350);

    } else {

      // Return car to original position
      setDragX(0);
    }
  };


  return (

    <div className="home-page">

      {/* ==============================
          HERO
      ============================== */}

      <section className="hero-section">

        <div className="container">

          <div className="hero-wrapper">


            {/* ==============================
                LEFT CONTENT
            ============================== */}

            <div className="hero-content">

              <span className="hero-subtitle">
                ✦ Welcome to Fuso
              </span>


              <h1>

                Built to move.

                <br />

                <span>
                  Built for you.
                </span>

              </h1>


              <p>

                Powerful vehicles, smart solutions
                and reliable services designed to keep
                your business moving forward.

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


              {/* STATS */}

              <div className="hero-stats">

                <div className="hero-stat">

                  <strong>
                    10K+
                  </strong>

                  <span>
                    Happy Users
                  </span>

                </div>


                <div className="hero-stat">

                  <strong>
                    98%
                  </strong>

                  <span>
                    Satisfaction
                  </span>

                </div>


                <div className="hero-stat">

                  <strong>
                    24/7
                  </strong>

                  <span>
                    Support
                  </span>

                </div>

              </div>

            </div>


            {/* ==============================
                RIGHT CAR
            ============================== */}

            <div className="hero-car-area">


              <div className="car-circle"></div>


              <div
                ref={carRef}

                className={`hero-car ${
                  isDragging ? 'dragging' : ''
                }`}

                style={{
                  transform: `translateX(${dragX}px)`
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


              {/* PERFORMANCE CARD */}

              <div className="performance-card">

                <div className="performance-icon">

                  <i className="bi bi-lightning-fill"></i>

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


              {/* DRAG MESSAGE */}

              <div className="drag-hint">

                {/* <i className="bi bi-arrows"></i> */}

                <span>
                  Drag the car →
                </span>

              </div>

            </div>

          </div>


          {/* SCROLL */}

          <div className="scroll-explore">

            Scroll to explore

            <i className="bi bi-arrow-down"></i>

          </div>

        </div>

      </section>


    </div>

  );
}

export default Home;