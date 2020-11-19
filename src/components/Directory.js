import React, { Component } from "react";
import EmployeeInfo from "./EmployeeInfo.js";
import Search from "./Search.js"

class Directory extends Component {

  state = {
    employees: [],
    sortedEmp: [],
    search: "",
    sorted: false
  };

  componentDidMount = () => {
    fetch(`https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`)
      .then(res => res.json())
      .then(json => {
        this.setState({ employees: json.results })
      })
  };

  startSorting = event => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmployees();
      this.setState({ sorted: true });
    });
  };

  sortEmployees = () => {
    let { employees, search } = this.state;
    let sortedEmp = employees.filter(sorted => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      )
    })
    this.setState({ sortedEmp })
  }

  render = () => {
    return (
      <div>
        <div className="jumbotron">
          <h1>
            Employee Directory
          </h1>
        </div>
        <div>
          <Search
            name="search"
            startSorting={this.startSorting}
            label="Search"
          />
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

              {!this.state.sorted ? this.state.employees.map(employee => (
                < EmployeeInfo
                  key={employee.id.value}
                  icon={employee.picture.medium}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  dob={employee.dob.date}
                />
              ))
                : this.state.sortedEmp.map(employee => (

                  <EmployeeInfo
                    key={employee.id.value}
                    icon={employee.picture.medium}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    phone={employee.phone}
                    email={employee.email}
                    dob={employee.dob.date}
                  />
                ))}
            </tbody>
          </table>
        </div>
      </div >
    )
  }
}

export default Directory;