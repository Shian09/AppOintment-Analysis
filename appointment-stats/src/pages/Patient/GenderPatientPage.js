import React, { Component } from "react";

//Import Component
import GenderPatient from "../../components/Patient/GenderPatient";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class GenderPatientPage extends Component {
  render() {
    return (
      <div className="container">
        <GenderPatient />
      </div>
    );
  }
}
