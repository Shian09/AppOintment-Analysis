import React, { Component } from "react";

//Import component
import AgePatient from "../../components/Patient/AgePatient";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class AgePatientPage extends Component {
  render() {
    return (
      <div className="container">
        <AgePatient />
      </div>
    );
  }
}
