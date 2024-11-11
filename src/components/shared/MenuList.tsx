import { Link } from "react-router-dom";

// Fn component with Arrow Fn
const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/">
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/netflix">
          Netflix
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/employees">
          Employee Manager
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/spotify">
          Spotify
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default MenuList;