import { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">

      {/* =====================================
          HERO
      ===================================== */}

      <section className="contact-hero">

        <div className="container">

          <div className="contact-hero-content">

            <span>
              CONTACT US
            </span>

            <h1>
              Let's start a
              <br />
              <strong>conversation.</strong>
            </h1>

            <p>
              Have a question about our vehicles or
              services? Our team is ready to help.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================
          CONTACT CONTENT
      ===================================== */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* LEFT SIDE */}

            <div className="col-lg-5">

              <div className="contact-info">

                <span className="contact-label">
                  GET IN TOUCH
                </span>

                <h2>
                  We're here to
                  <br />
                  help.
                </h2>

                <p>
                  Whether you need information about a
                  vehicle, service support or anything
                  else, feel free to reach out to us.
                </p>


                {/* Address */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <i className="bi bi-geo-alt"></i>

                  </div>

                  <div>

                    <span>
                      Visit Us
                    </span>

                    <strong>
                      123 Business Street
                      <br />
                      Chennai, India
                    </strong>

                  </div>

                </div>


                {/* Phone */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <i className="bi bi-telephone"></i>

                  </div>

                  <div>

                    <span>
                      Call Us
                    </span>

                    <strong>
                      +91 12345 67890
                    </strong>

                  </div>

                </div>


                {/* Email */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <i className="bi bi-envelope"></i>

                  </div>

                  <div>

                    <span>
                      Email Us
                    </span>

                    <strong>
                      info@fuso.com
                    </strong>

                  </div>

                </div>


                {/* Hours */}

                <div className="contact-info-item">

                  <div className="contact-info-icon">

                    <i className="bi bi-clock"></i>

                  </div>

                  <div>

                    <span>
                      Business Hours
                    </span>

                    <strong>
                      Mon - Sat: 9:00 AM - 6:00 PM
                    </strong>

                  </div>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE FORM */}

            <div className="col-lg-7">

              <div className="contact-form-box">

                <div className="form-heading">

                  <span>
                    SEND A MESSAGE
                  </span>

                  <h2>
                    How can we help?
                  </h2>

                </div>


                {submitted && (

                  <div className="success-message">

                    <i className="bi bi-check-circle"></i>

                    Thank you! Your message has
                    been submitted successfully.

                  </div>

                )}


                <form onSubmit={handleSubmit}>

                  <div className="row g-4">

                    {/* Name */}

                    <div className="col-md-6">

                      <label>
                        Your Name
                      </label>

                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                      />

                    </div>


                    {/* Email */}

                    <div className="col-md-6">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />

                    </div>


                    {/* Phone */}

                    <div className="col-12">

                      <label>
                        Phone Number
                      </label>

                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                      />

                    </div>


                    {/* Message */}

                    <div className="col-12">

                      <label>
                        Message
                      </label>

                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us how we can help..."
                        rows="5"
                        required
                      ></textarea>

                    </div>


                    {/* Submit */}

                    <div className="col-12">

                      <button
                        type="submit"
                        className="contact-submit"
                      >
                        Send Message

                        <i className="bi bi-arrow-right"></i>

                      </button>

                    </div>

                  </div>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================
          MAP
      ===================================== */}

      <section className="contact-map-section">

        <div className="container">

          <div className="contact-map">

            <div className="map-content">

              <div className="map-pin">

                <i className="bi bi-geo-alt-fill"></i>

              </div>

              <h3>
                Find us here
              </h3>

              <p>
                Chennai, India
              </p>

              <button>
                Get Directions
                <i className="bi bi-arrow-up-right"></i>
              </button>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;