import React, { Component } from "react";

//Import component
import SpecialtyDoctor from "../../components/Doctor/SpecialtyDoctor";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class SpecialtyDoctorPage extends Component {
  render() {
    return (
      <div className="container">
        <SpecialtyDoctor />
      </div>
    );
  }
}
