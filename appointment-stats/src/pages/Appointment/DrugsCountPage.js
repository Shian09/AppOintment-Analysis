import React, { Component } from "react";

//Import component
import DrugsCount from "../../components/Appointment/DrugsCount";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class DrugsCountPage extends Component {
  render() {
    return (
      <div className="container">
        <DrugsCount />
      </div>
    );
  }
}
