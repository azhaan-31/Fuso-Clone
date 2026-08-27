import './Contact.css';

function Contact() {
  return (
    <div className="contact-page">

      {/* Hero */}

      <section className="contact-hero">

        <div className="container">

          <div className="contact-hero-content">

            <span className="page-label">
              <i className="bi bi-chat-dots"></i>
              Contact Us
            </span>

            <h1>
              Let's start a
              <span> conversation.</span>
            </h1>

            <p>
              Have a question or need help?
              We'd love to hear from you.
            </p>

          </div>

        </div>

      </section>


      {/* Contact Area */}

      <section className="contact-section">

        <div className="container">

          <div className="row g-5">

            {/* Contact Information */}

            <div className="col-lg-5">

              <div className="contact-info">

                <span className="contact-label">
                  Get In Touch
                </span>

                <h2>
                  We're ready
                  <br />
                  to help.
                </h2>

                <p>
                  Whether you have a question about our
                  vehicles, services or anything else,
                  our team is ready to help.
                </p>


                <div className="contact-details">

                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <i className="bi bi-envelope"></i>
                    </div>

                    <div>
                      <span>Email</span>
                      <strong>
                        hello@fuso.com
                      </strong>
                    </div>

                  </div>


                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <i className="bi bi-telephone"></i>
                    </div>

                    <div>
                      <span>Phone</span>
                      <strong>
                        +1 800 123 4567
                      </strong>
                    </div>

                  </div>


                  <div className="contact-detail">

                    <div className="contact-detail-icon">
                      <i className="bi bi-geo-alt"></i>
                    </div>

                    <div>
                      <span>Location</span>
                      <strong>
                        123 Business Avenue
                      </strong>
                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Contact Form */}

            <div className="col-lg-7">

              <div className="contact-form-card">

                <h3>
                  Send us a message
                </h3>

                <p>
                  Fill out the form and we'll get back
                  to you as soon as possible.
                </p>


                <form>

                  <div className="row g-3">

                    <div className="col-md-6">

                      <label>
                        First Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your first name"
                      />

                    </div>


                    <div className="col-md-6">

                      <label>
                        Last Name
                      </label>

                      <input
                        type="text"
                        placeholder="Your last name"
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Subject
                      </label>

                      <input
                        type="text"
                        placeholder="How can we help?"
                      />

                    </div>


                    <div className="col-12">

                      <label>
                        Message
                      </label>

                      <textarea
                        rows="5"
                        placeholder="Write your message..."
                      ></textarea>

                    </div>


                    <div className="col-12">

                      <button type="submit">

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

    </div>
  );
}

export default Contact;