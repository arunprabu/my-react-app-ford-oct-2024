// Fn component with Arrow Fn
const MenuList = () => {
  return (
    <ul className="navbar-nav me-auto mb-2 mb-md-0">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/netflix">
          Netflix
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/employees">
          Employee Manager
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">
          About
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/contact">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default MenuList;