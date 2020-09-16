import React, { Component } from "react";

//Import Component
import AddressPatient from "../../components/Patient/AddressPatient";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class AddressPatientPage extends Component {
  render() {
    return (
      <div className="container">
        <AddressPatient />
      </div>
    );
  }
}
