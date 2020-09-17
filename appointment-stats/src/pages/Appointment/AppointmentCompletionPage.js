import React, { Component } from "react";

//Import component
import AppointmentCompletion from "../../components/Appointment/AppointmentCompletion";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class AppointmentCompletionPage extends Component {
  render() {
    return (
      <div className="container">
        <AppointmentCompletion />
      </div>
    );
  }
}
