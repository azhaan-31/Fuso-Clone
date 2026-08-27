import './Login.css';

function Login() {
  return (
    <div className="login-page">

      <div className="container">

        <div className="login-wrapper">

          {/* Left Side */}

          <div className="login-intro">

            <span className="login-label">
              Welcome Back
            </span>

            <h1>
              Drive your
              <br />
              business <span>forward.</span>
            </h1>

            <p>
              Sign in to your Fuso account and
              continue managing your business,
              vehicles and services.
            </p>

            <div className="login-benefits">

              <div className="login-benefit">

                <div className="benefit-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <div>
                  <strong>
                    Secure Access
                  </strong>

                  <span>
                    Your account is protected.
                  </span>
                </div>

              </div>


              <div className="login-benefit">

                <div className="benefit-icon">
                  <i className="bi bi-speedometer2"></i>
                </div>

                <div>
                  <strong>
                    Manage Everything
                  </strong>

                  <span>
                    Access your business dashboard.
                  </span>
                </div>

              </div>


              <div className="login-benefit">

                <div className="benefit-icon">
                  <i className="bi bi-headset"></i>
                </div>

                <div>
                  <strong>
                    24/7 Support
                  </strong>

                  <span>
                    We're always here to help.
                  </span>
                </div>

              </div>

            </div>

          </div>


          {/* Login Card */}

          <div className="login-card">

            <div className="login-card-header">

              <div className="login-logo">
                F
              </div>

              <h2>
                Sign in
              </h2>

              <p>
                Enter your details to access your account.
              </p>

            </div>


            <form className="login-form">

              {/* Email */}

              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <div className="input-wrapper">

                  <i className="bi bi-envelope"></i>

                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                  />

                </div>

              </div>


              {/* Password */}

              <div className="form-group">

                <div className="password-label">

                  <label htmlFor="password">
                    Password
                  </label>

                  <a href="#">
                    Forgot password?
                  </a>

                </div>


                <div className="input-wrapper">

                  <i className="bi bi-lock"></i>

                  <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                  >
                    <i className="bi bi-eye"></i>
                  </button>

                </div>

              </div>


              {/* Remember */}

              <div className="login-options">

                <label className="remember-me">

                  <input
                    type="checkbox"
                  />

                  <span>
                    Remember me
                  </span>

                </label>

              </div>


              {/* Login Button */}

              <button
                type="submit"
                className="login-submit"
              >
                Sign In

                <i className="bi bi-arrow-right"></i>

              </button>


              {/* Divider */}

              <div className="login-divider">

                <span>
                  OR
                </span>

              </div>


              {/* Social Login */}

              <button
                type="button"
                className="social-login"
              >

                <i className="bi bi-google"></i>

                Continue with Google

              </button>


              {/* Register */}

              <p className="register-text">

                Don't have an account?

                <a href="#">
                  Create an account
                </a>

              </p>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;
