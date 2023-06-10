import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <a className="navbar-brand mx-4" href="/">
        Hermes Alerter
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link mx-2" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/">
              How it Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/">
              Recent Restocks
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/">
              Pricing
            </a>
          </li>
          <li className="nav-item align-self-center">
            <button type="button" class="btn btn-success mx-3">
              Subscribe
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
