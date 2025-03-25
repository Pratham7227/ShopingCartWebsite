import React, { useState } from "react";
import { addEmp } from "../Services/emp";
import { EmployeeTable } from "./EmployeeTable";

const Employee = () => {
  const [isNewUser,setIsNewUser]=useState(false);

  const [empData, setEmpData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    empcode: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(empData);
    addEmp(empData.firstname, empData.lastname, empData.email, empData.empcode,setIsNewUser,isNewUser);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setEmpData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 flex-col md:flex-row">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
          Add Employee
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-gray-600">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Tom"
              required
              value={empData.firstname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-600">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Ken"
              required
              value={empData.lastname}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tom@gmail.com"
              required
              value={empData.email}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <div>
            <label htmlFor="empcode" className="block text-sm font-medium text-gray-600">
              Employee Code
            </label>
            <input
              type="text"
              id="empcode"
              name="empcode"
              placeholder="EMP01"
              required
              value={empData.empcode}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
          >
            Add Employee
          </button>
        </form>
      </div>
      <div><EmployeeTable isNewUser={isNewUser}/></div>

    </div>
  );
};

export default Employee;
