import React from "react";
import Department from "./Department";

class Departments extends React.Component  {
  getDepartments() {
    return this.props.departments.map((department) => {
      return (
        <Department
        key= {department.id}
        {...department}
        // deleteDepartment={this.props.deleteDepartment}
        // updateDepartment={this.props.updateDepartment}
        />
      )
    })
  }

  render() {
    return (
      <div>
        {this.getDepartments()}
      </div>
    )
  }
}


export default Departments;
