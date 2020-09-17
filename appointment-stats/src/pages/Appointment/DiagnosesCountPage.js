import React, { Component } from "react";

//Import component
import DiagnosesCount from "../../components/Appointment/DiagnosesCount";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class DiagnosesCountPage extends Component {
  render() {
    return (
      <div className="container">
        <DiagnosesCount />
      </div>
    );
  }
}
