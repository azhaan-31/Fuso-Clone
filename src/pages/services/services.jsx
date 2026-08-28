import './services.css';

function Services() {
  const services = [
    {
      icon: 'bi-tools',
      number: '01',
      title: 'Vehicle Maintenance',
      description:
        'Keep your vehicle performing at its best with professional scheduled maintenance and inspections.',
    },
    {
      icon: 'bi-gear-wide-connected',
      number: '02',
      title: 'Repairs & Diagnostics',
      description:
        'Our experienced technicians diagnose problems quickly and provide reliable repair solutions.',
    },
    {
      icon: 'bi-truck',
      number: '03',
      title: 'Fleet Management',
      description:
        'Smart fleet solutions that help you manage vehicles, reduce downtime and improve efficiency.',
    },
    {
      icon: 'bi-sign-stop',
      number: '04',
      title: 'Roadside Assistance',
      description:
        'Get support when you need it with dependable roadside assistance for unexpected situations.',
    },
    {
      icon: 'bi-box-seam',
      number: '05',
      title: 'Genuine Parts',
      description:
        'Quality replacement parts designed to maintain the performance and reliability of your vehicle.',
    },
    {
      icon: 'bi-headset',
      number: '06',
      title: 'Expert Support',
      description:
        'Our support team is ready to answer your questions and help you find the right solution.',
    },
  ];

  return (
    <div className="services-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="services-hero">

        <div className="container">

          <div className="services-hero-content">

            <span>
              OUR SERVICES
            </span>

            <h1>
              More than a vehicle.
              <br />
              <strong>A complete solution.</strong>
            </h1>

            <p>
              From maintenance and repairs to fleet
              management and support, we're here to
              keep your business moving.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="services-section">

        <div className="container">

          <div className="services-heading">

            <span>
              HOW WE HELP
            </span>

            <h2>
              Services built around you
            </h2>

            <p>
              Reliable support and professional
              solutions designed to keep your
              vehicles working efficiently.
            </p>

          </div>


          <div className="row g-4">

            {services.map((service) => (

              <div
                className="col-lg-4 col-md-6"
                key={service.number}
              >

                <div className="service-card">

                  <div className="service-card-top">

                    <span className="service-number">
                      {service.number}
                    </span>

                    <div className="service-icon">

                      <i
                        className={`bi ${service.icon}`}
                      ></i>

                    </div>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <a href="/contact">

                    Learn More

                    <i className="bi bi-arrow-right"></i>

                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================
          PROCESS
      ===================================== */}

      <section className="service-process">

        <div className="container">

          <div className="process-heading">

            <span>
              SIMPLE PROCESS
            </span>

            <h2>
              Getting support is easy
            </h2>

          </div>


          <div className="row g-4">

            <div className="col-lg-4">

              <div className="process-card">

                <div className="process-number">
                  1
                </div>

                <h3>
                  Tell us what you need
                </h3>

                <p>
                  Contact our team and tell us about
                  your vehicle or service requirement.
                </p>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="process-card">

                <div className="process-number">
                  2
                </div>

                <h3>
                  Get expert advice
                </h3>

                <p>
                  Our specialists will understand
                  your requirement and recommend
                  the right solution.
                </p>

              </div>

            </div>


            <div className="col-lg-4">

              <div className="process-card">

                <div className="process-number">
                  3
                </div>

                <h3>
                  Get back on the road
                </h3>

                <p>
                  We help get your vehicle ready so
                  you can focus on your business.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="services-cta">

        <div className="container">

          <div className="services-cta-box">

            <div>

              <span>
                NEED ASSISTANCE?
              </span>

              <h2>
                We're here to keep
                <br />
                you moving.
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

export default Services;