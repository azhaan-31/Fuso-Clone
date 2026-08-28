import { Link } from 'react-router-dom';
import './login.css';

function Login() {
  return (
    <div className="login-page">

      <div className="login-container">

        {/* LEFT SIDE */}

        <div className="login-brand-side">

          <div className="login-brand-content">

            <div className="login-logo">
              FUSO
            </div>

            <h1>
              Move your
              <br />
              business
              <br />
              forward.
            </h1>

            <p>
              Reliable vehicles. Powerful performance.
              A partner you can depend on.
            </p>

            <div className="login-features">

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Reliable Vehicles
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Powerful Performance
              </div>

              <div>
                <i className="bi bi-check-circle-fill"></i>
                Trusted Support
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDE */}

        <div className="login-form-side">

          <div className="login-form-wrapper">

            <span className="login-small-title">
              Welcome back
            </span>

            <h2>
              Sign in to Fuso
            </h2>

            <p className="login-description">
              Enter your details to access your account.
            </p>


            {/* EMAIL */}

            <div className="login-field">

              <label>
                Email Address
              </label>

              <div className="login-input">

                <i className="bi bi-envelope"></i>

                <input
                  type="email"
                  placeholder="Enter your email"
                />

              </div>

            </div>


            {/* PASSWORD */}

            <div className="login-field">

              <div className="password-label">

                <label>
                  Password
                </label>

                <a href="#forgot">
                  Forgot password?
                </a>

              </div>

              <div className="login-input">

                <i className="bi bi-lock"></i>

                <input
                  type="password"
                  placeholder="Enter your password"
                />

                <i className="bi bi-eye"></i>

              </div>

            </div>


            {/* REMEMBER */}

            <label className="remember-me">

              <input type="checkbox" />

              <span>
                Remember me
              </span>

            </label>


            {/* LOGIN BUTTON */}

            <button className="login-submit">

              Sign In

              <i className="bi bi-arrow-right"></i>

            </button>


            {/* CREATE ACCOUNT */}

            <p className="create-account">

              Don't have an account?

              <Link to="/login">
                Create Account
              </Link>

            </p>


            {/* BACK */}

            <Link
              to="/"
              className="back-home"
            >

              <i className="bi bi-arrow-left"></i>

              Back to Home

            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;