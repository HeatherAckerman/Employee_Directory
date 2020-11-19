import React, { Component } from "react";
import EmployeeInfo from "./EmployeeInfo.js";

class Directory extends Component {

  state = {
    employees: [],
  };

  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`)
      .then(res => res.json())
      .then(json => {
        this.setState({ employees: json.results })
      })
  };

  render = () => {
    return (
      <div>
        <div className="jumbotron">
          <h1>
            Employee Directory
          </h1>
        </div>

        <div className="container">
          <table className="table">
            <thead className="thead">
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Birthday</th>
              </tr>
            </thead>
            <tbody>

              {this.state.employees.map(employee => (
                < EmployeeInfo
                  key={employee.id.value}
                  icon={employee.picture.medium}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                />))}
            </tbody>
          </table>
        </div>
      </div >
    )
  }
}

export default Directory;