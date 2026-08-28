import { NavLink, Link } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="site-header">

      <div className="container">

        <div className="header-inner">

          {/* Logo */}

          <Link to="/" className="brand">

            <span className="brand-icon">
              F
            </span>

            <span className="brand-name">
              FUSO
            </span>

          </Link>


          {/* Navigation */}

          <nav className="main-nav">

            <NavLink
              to="/"
              end
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              to="/vehicles"
            >
              Vehicles
            </NavLink>

            <NavLink
              to="/services"
            >
              Services
            </NavLink>

            <NavLink
              to="/contact"
            >
              Contact
            </NavLink>

          </nav>


          {/* Login */}

          <Link
            to="/login"
            className="header-login-button"
          >
            Login
            <i className="bi bi-arrow-right"></i>
          </Link>

        </div>

      </div>

    </header>
  );
}

export default Header;