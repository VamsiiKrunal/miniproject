import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditStudent() {
  const location=useLocation();
  const student=location.state;
 
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form >
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={student.studentName}
               
              />
              <label htmlFor="Name" className="form-label">
                rollno
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your rollno"
                name="rollno"
                value={student.rollno}
               
              />
              <label htmlFor="Name" className="form-label">
              dob
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your dob"
                name="dob"
                value={student.dob}
               
              />
              <label htmlFor="Name" className="form-label">
              gender
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={student.gender}
               
              />
              <label htmlFor="Name" className="form-label">
              phoneNumber
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                value={student.phoneNumber}
               
              />
              <label htmlFor="Name" className="form-label">
                address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={student.address}
               
              />
              <label htmlFor="Name" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={student.email}
               
              />
              <label htmlFor="Name" className="form-label">
              status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your status"
                name="status"
                value={student.status}
               
              />

              
            </div>
          
           
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
