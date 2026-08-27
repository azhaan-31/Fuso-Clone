import './Services.css';

function Services() {
  const services = [
    {
      icon: 'bi-tools',
      title: 'Vehicle Maintenance',
      text: 'Keep your vehicles performing at their best with professional maintenance and servicing.'
    },
    {
      icon: 'bi-gear-wide-connected',
      title: 'Fleet Solutions',
      text: 'Manage your entire fleet efficiently with smart solutions built around your business.'
    },
    {
      icon: 'bi-headset',
      title: '24/7 Support',
      text: 'Get the assistance you need whenever you need it from our dedicated support team.'
    },
    {
      icon: 'bi-speedometer2',
      title: 'Performance',
      text: 'Improve productivity and efficiency with reliable vehicle performance solutions.'
    },
    {
      icon: 'bi-shield-check',
      title: 'Safety',
      text: 'Put safety first with dependable technology and carefully engineered solutions.'
    },
    {
      icon: 'bi-bar-chart-line',
      title: 'Business Solutions',
      text: 'Make better decisions with solutions designed to support your business growth.'
    }
  ];

  return (
    <div className="services-page">

      {/* Hero */}

      <section className="services-hero">

        <div className="container">

          <div className="services-hero-content">

            <span className="page-label">
              <i className="bi bi-gear"></i>
              Our Services
            </span>

            <h1>
              Solutions that keep
              <span> you moving.</span>
            </h1>

            <p>
              From maintenance to fleet management,
              our services are designed to keep your
              business running smoothly.
            </p>

          </div>

        </div>

      </section>


      {/* Services */}

      <section className="services-section">

        <div className="container">

          <div className="services-heading">

            <span>
              What We Offer
            </span>

            <h2>
              Everything your
              <br />
              business needs.
            </h2>

          </div>


          <div className="row g-4">

            {services.map((service, index) => (

              <div
                className="col-lg-4 col-md-6"
                key={index}
              >

                <div className="service-card">

                  <div className="service-icon">

                    <i className={`bi ${service.icon}`}></i>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <a href="#">
                    Learn More
                    <i className="bi bi-arrow-right"></i>
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="services-cta">

        <div className="container">

          <div className="services-cta-box">

            <div>

              <span>
                Need assistance?
              </span>

              <h2>
                We're here to
                <br />
                help your business.
              </h2>

            </div>

            <a href="/contact">
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