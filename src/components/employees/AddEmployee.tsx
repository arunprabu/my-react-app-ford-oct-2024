import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IEmployee } from "../../models/IEmployee";

const AddEmployee = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { register, handleSubmit } = useForm<IEmployee>();

  const onSubmit = (formData: IEmployee) => {
    console.log(formData);
    // The above data should be sent to the REST API.
    // 1. What's the REST API URL?  https://jsonplaceholder.typicode.com/users
    // 2. What's the HTTP Method? POST
    // 3. What's the REST API client tool? axios (npm i axios)

    const saveEmployee = async () => {
      try {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/users",
          formData
        );
        console.log(response.data);
        setIsSaved(true);
      } catch (error) {
        console.log(error);
      }
    };

    saveEmployee();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Add Employee</h1>
          <button className="btn btn-dark">Go Back</button>
        </div>
        <form
          className="col-md-6 offset-md-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group row mb-3">
            <label htmlFor="nameInput" className="col-sm-2 col-form-label">
              Name
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                {...register("name")}
              />
              <div className="invalid-feedback">
                <div id="nameRequired">Name is required</div>
              </div>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="phoneInput" className="col-sm-2 col-form-label">
              Phone
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Phone"
                {...register("phone")}
              />
              <div className="invalid-feedback">
                <div id="phoneRequired">Phone is required</div>
                <div>TODO: Max 10 Digits</div>
              </div>
            </div>
          </div>
          <div className="form-group row mb-3">
            <label htmlFor="emailInput" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                {...register("email")}
              />
              <div className="invalid-feedback">
                <div id="emailRequired">Email is required</div>
                <div id="invalidEmail">Email seems to be not valid</div>
              </div>
            </div>
          </div>

          {isSaved && (
            <div className="alert alert-success">Saved Successfully</div>
          )}

          <div className="alert alert-danger">
            Some Error Occurred. Try again later
          </div>

          <div className="form-group row">
            <div className="col-sm-10 offset-sm-2">
              <button type="submit" className="btn btn-primary submitBtn">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
