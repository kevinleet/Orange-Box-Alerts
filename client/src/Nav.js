import { NavLink, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <span className="navbar-brand mx-4" style={{ cursor: "default" }}>
        Hermes Alerter
      </span>
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
          <li className="nav-item">
            <NavLink className="nav-link mx-2" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mx-2" to="/howitworks">
              How It Works
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mx-2" to="/recentrestocks">
              Recent Restocks
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link mx-2" to="/pricing">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <Link to="/subscribe">
              <button type="button" class="btn btn-success mx-2">
                Subscribe
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
