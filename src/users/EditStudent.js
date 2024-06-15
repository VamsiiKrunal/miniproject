import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function EditStudent() {
  const location = useLocation();
  const student = location.state;


  const [formData, setFormData] = useState({
    rollno: student.rollno,
    studentName: student.studentName,
    dob: student.dob,
    gender: student.gender,
    phoneNumber: student.phoneNumber,
    address: student.address,
    email: student.email,
    status: student.status
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted"); // Debugging log
    try {
      const res = await fetch(`http://localhost:8080/edit/${student.rollno}`,
        {
          method: 'PUT',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
      
      console.log("Form data sent", res);
      
    } catch (error) {
      console.error("There was an error!", error);
    }



  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="studentName"
                value={formData.studentName}
                onChange={handleChange}

              />
              <label htmlFor="Name" className="form-label">
                rollno
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your rollno"
                name="rollno"
                value={formData.rollno}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                dob
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                gender
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your gender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                phoneNumber
              </label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter your phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                address
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                email
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}


              />
              <label htmlFor="Name" className="form-label">
                status
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your status"
                name="status"
                value={formData.status}
                onChange={handleChange}


              />


            </div>


            <button type="submit" className="btn btn-outline-primary"

            >
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
