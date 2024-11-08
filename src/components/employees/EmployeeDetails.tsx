import { useParams } from "react-router-dom";

const EmployeeDetails = () => {
  // Let's read the URL Param
  const { id } = useParams();
  console.log(id);

  // on load you need to hit the rest api

  return (
    <div className="row">
      <h1>Employee Details</h1>
      <p>You are viewing the details of Employee Id: #1</p>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Name: John</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">
            Phone: 32453678
          </h6>
          <p className="card-text">
            EMail: john@gmail.com
          </p>
          <a href="#" className="btn btn-primary">
            Edit
          </a>
          <button className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
