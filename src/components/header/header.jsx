import './Header.css';

function Header() {
  return (
    <header className="main-header">

      <div className="container">

        <div className="header-inner">

          {/* Logo */}

          <a href="/" className="site-logo">

            <span className="logo-icon">
              F
            </span>

            <span className="logo-text">
              FUSO
            </span>

          </a>


          {/* Navigation */}

          <nav className="main-navigation">

            <a href="/" className="nav-link">
              Home
            </a>

            <a href="/about" className="nav-link">
              About
            </a>

            <a href="/vehicles" className="nav-link">
              Vehicles
            </a>

            <a href="/services" className="nav-link">
              Services
            </a>

            <a href="/contact" className="nav-link">
              Contact
            </a>

          </nav>


          {/* Header Actions */}

          <div className="header-actions">
             <a
    href="/login"
    className="header-button"
  >
    Login

    <i className="bi bi-box-arrow-in-right"></i>
  </a>
          </div>


          {/* Mobile Menu */}

          <button
            className="mobile-menu-button"
            type="button"
          >
            <i className="bi bi-list"></i>
          </button>

        </div>

      </div>

    </header>
  );
}

export default Header;