import React, { Component } from "react";

//Import component
import BloodDoctor from "../../components/Doctor/BloodDoctor";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class BloodDoctorPage extends Component {
  render() {
    return (
      <div className="container">
        <BloodDoctor />
      </div>
    );
  }
}
