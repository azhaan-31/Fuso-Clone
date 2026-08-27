import './Vehicles.css';

function Vehicles() {
  const vehicles = [
    {
      name: 'Fuso Canter',
      category: 'Light Duty Truck',
      description:
        'Compact, powerful and reliable for everyday transportation and city deliveries.',
      image: '/src/assets/images/car 1.png',
      icon: 'bi-truck'
    },
    {
      name: 'Fuso Fighter',
      category: 'Medium Duty Truck',
      description:
        'Built for demanding jobs with excellent performance, comfort and efficiency.',
      image: '/src/assets/images/car3.png',
      icon: 'bi-speedometer2'
    },
    {
      name: 'Fuso Super Great',
      category: 'Heavy Duty Truck',
      description:
        'Maximum power and durability for long-distance and heavy-duty operations.',
      image: '/src/assets/images/car4.png',
      icon: 'bi-box-seam'
    }
  ];

  return (
    <div className="vehicles-page">

      {/* Hero */}

      <section className="vehicles-hero">

        <div className="container">

          <div className="vehicles-hero-content">

            <span className="page-label">
              <i className="bi bi-truck"></i>
              Our Vehicles
            </span>

            <h1>
              Built to move
              <span> your world.</span>
            </h1>

            <p>
              Discover powerful and reliable vehicles
              designed to keep your business moving
              forward.
            </p>

          </div>

        </div>

      </section>


      {/* Vehicles */}

      <section className="vehicles-section">

        <div className="container">

          <div className="section-heading">

            <span>
              Explore Our Range
            </span>

            <h2>
              The right vehicle
              <br />
              for every journey.
            </h2>

            <p>
              From city deliveries to heavy-duty
              transportation, find a vehicle designed
              around your business needs.
            </p>

          </div>


          <div className="row g-4">

            {vehicles.map((vehicle, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="vehicle-card">

                  <div className="vehicle-image">

                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                    />

                    <span className="vehicle-icon">
                      <i className={`bi ${vehicle.icon}`}></i>
                    </span>

                  </div>


                  <div className="vehicle-card-content">

                    <span className="vehicle-category">
                      {vehicle.category}
                    </span>

                    <h3>
                      {vehicle.name}
                    </h3>

                    <p>
                      {vehicle.description}
                    </p>

                    <a
                      href="#"
                      className="vehicle-link"
                    >
                      View Details

                      <i className="bi bi-arrow-right"></i>
                    </a>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Features */}

      <section className="vehicle-features">

        <div className="container">

          <div className="row g-4">

            <div className="col-md-4">

              <div className="vehicle-feature">

                <i className="bi bi-shield-check"></i>

                <h3>
                  Built to Last
                </h3>

                <p>
                  Dependable engineering designed
                  for years of reliable performance.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="vehicle-feature">

                <i className="bi bi-fuel-pump"></i>

                <h3>
                  Efficient
                </h3>

                <p>
                  Smart engineering helps reduce
                  operating costs and fuel consumption.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="vehicle-feature">

                <i className="bi bi-person-check"></i>

                <h3>
                  Driver Focused
                </h3>

                <p>
                  Comfortable cabins and thoughtful
                  technology for every driver.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Vehicles;