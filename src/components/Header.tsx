/* Skeleton of a component
 * can have import
 * must have a component defn fn that returns JSX
 * must have export
 **/

import MenuList from "./MenuList";

// Fn component with Named Fn
function Header() {
  // it must return JSX
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Big React App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <MenuList />
        </div>
      </div>
    </nav>
  );
}

export default Header;
