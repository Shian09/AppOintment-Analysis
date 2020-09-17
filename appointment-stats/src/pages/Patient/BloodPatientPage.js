import React, { Component } from "react";

//Import component
import BloodPatient from "../../components/Patient/BloodPatient";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class BloodPatientPage extends Component {
  render() {
    return (
      <div className="container">
        <BloodPatient />
      </div>
    );
  }
}
