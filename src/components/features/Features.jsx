import './Features.css';

const features = [
  {
    icon: 'bi-lightning-charge-fill',
    title: 'Fast Performance',
    description:
      'Enjoy a fast and smooth experience that helps you work more efficiently.',
  },
  {
    icon: 'bi-shield-check',
    title: 'Secure & Reliable',
    description:
      'Keep your business information safe with secure and reliable technology.',
  },
  {
    icon: 'bi-bar-chart-line-fill',
    title: 'Smart Analytics',
    description:
      'Understand your business with powerful analytics and useful insights.',
  },
  {
    icon: 'bi-people-fill',
    title: 'Team Collaboration',
    description:
      'Work together with your team and keep everything organized in one place.',
  },
  {
    icon: 'bi-phone-fill',
    title: 'Mobile Friendly',
    description:
      'Access your business from desktop, tablet or mobile whenever you need it.',
  },
  {
    icon: 'bi-gear-fill',
    title: 'Easy Customization',
    description:
      'Customize your workspace to match the way you and your team work.',
  },
];

function Features() {
  return (
    <section className="features-section">

      <div className="container">

        {/* Heading */}

        <div className="features-heading">

          <span className="features-label">
            OUR FEATURES
          </span>

          <h2>
            Everything you need
            <br />
            to grow your business
          </h2>

          <p>
            Powerful tools designed to make your
            business simpler, faster and more efficient.
          </p>

        </div>


        {/* Feature Cards */}

        <div className="row g-4">

          {features.map((feature, index) => (

            <div
              className="col-md-6 col-lg-4"
              key={index}
            >

              <div className="feature-card">

                <div className="feature-icon">
                  <i className={`bi ${feature.icon}`}></i>
                </div>

                <span className="feature-number">
                  0{index + 1}
                </span>

                <h3>
                  {feature.title}
                </h3>

                <p>
                  {feature.description}
                </p>

                <a
                  href="#"
                  onClick={(event) =>
                    event.preventDefault()
                  }
                >
                  Learn More
                  <i className="bi bi-arrow-up-right"></i>
                </a>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;