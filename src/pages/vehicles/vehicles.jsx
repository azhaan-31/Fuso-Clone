import './vehicles.css';

function Vehicles() {
  const vehicles = [
    {
      name: 'Fuso Canter',
      category: 'Light Duty Truck',
      description:
        'Compact, powerful and efficient for everyday city deliveries.',
      image: '/src/assets/images/car.png',
      power: '130 HP',
      capacity: '3.5 Ton',
      transmission: 'Manual',
    },
    {
      name: 'Fuso Fighter',
      category: 'Medium Duty Truck',
      description:
        'Built for demanding jobs with excellent performance and durability.',
      image: '/src/assets/images/car.png',
      power: '240 HP',
      capacity: '12 Ton',
      transmission: 'Manual',
    },
    {
      name: 'Fuso Super Great',
      category: 'Heavy Duty Truck',
      description:
        'Maximum power and reliability for long-distance heavy transport.',
      image: '/src/assets/images/car.png',
      power: '460 HP',
      capacity: '25 Ton',
      transmission: 'Automatic',
    },
  ];

  return (
    <div className="vehicles-page">

      {/* HERO */}

      <section className="vehicles-hero">

        <div className="container">

          <div className="vehicles-hero-content">

            <span>
              OUR VEHICLES
            </span>

            <h1>
              Built for every
              <br />
              <strong>journey.</strong>
            </h1>

            <p>
              Discover reliable commercial vehicles
              designed to deliver performance,
              efficiency and confidence.
            </p>

          </div>

        </div>

      </section>


      {/* VEHICLE LIST */}

      <section className="vehicles-section">

        <div className="container">

          <div className="vehicles-heading">

            <div>

              <span>
                EXPLORE OUR RANGE
              </span>

              <h2>
                Find the right vehicle
              </h2>

            </div>

            <p>
              Choose from our range of powerful
              vehicles designed for different
              business requirements.
            </p>

          </div>


          <div className="row g-4">

            {vehicles.map((vehicle) => (

              <div
                className="col-lg-4 col-md-6"
                key={vehicle.name}
              >

                <div className="vehicle-card">

                  {/* Image */}

                  <div className="vehicle-image">

                    <span className="vehicle-category">
                      {vehicle.category}
                    </span>

                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                    />

                  </div>


                  {/* Content */}

                  <div className="vehicle-content">

                    <h3>
                      {vehicle.name}
                    </h3>

                    <p>
                      {vehicle.description}
                    </p>


                    {/* Specs */}

                    <div className="vehicle-specs">

                      <div>

                        <i className="bi bi-speedometer2"></i>

                        <span>
                          {vehicle.power}
                        </span>

                        <small>
                          Power
                        </small>

                      </div>


                      <div>

                        <i className="bi bi-box-seam"></i>

                        <span>
                          {vehicle.capacity}
                        </span>

                        <small>
                          Capacity
                        </small>

                      </div>


                      <div>

                        <i className="bi bi-gear"></i>

                        <span>
                          {vehicle.transmission}
                        </span>

                        <small>
                          Transmission
                        </small>

                      </div>

                    </div>


                    {/* Button */}

                    <a
                      href="/contact"
                      className="vehicle-button"
                    >
                      Enquire Now

                      <i className="bi bi-arrow-right"></i>

                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="vehicles-cta">

        <div className="container">

          <div className="vehicles-cta-box">

            <div>

              <span>
                NEED HELP?
              </span>

              <h2>
                Not sure which vehicle
                <br />
                is right for you?
              </h2>

            </div>

            <a
              href="/contact"
              className="btn btn-primary"
            >
              Talk to an Expert

              <i className="bi bi-arrow-right"></i>

            </a>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Vehicles;