import React, { Component } from "react";

//Import component
import NumDoctors from "../../components/Doctor/NumDoctors";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class NumDoctorPage extends Component {
  render() {
    return (
      <div className="container">
        <NumDoctors />
      </div>
    );
  }
}
