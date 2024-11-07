const Employees = () => {
  return (
    <>
      <div className="row">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">
            Welcome to Employee Manager
          </h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus corrupti dolore praesentium debitis. Repellendus
              nobis quas quae consectetur iste ad odio! Explicabo sequi qui
              pariatur ipsam a eligendi consectetur quam?
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 gap-3"
              >
                Add Employee
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <h2>Listing Employees</h2>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">John</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Phone: 23456789
              </h6>
              <a href="/employees/1" className="card-link">
                View More
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Employees;
