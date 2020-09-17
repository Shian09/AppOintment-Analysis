import React, { Component } from "react";

//Import Component
import GenderDoctor from "../../components/Doctor/GenderDoctor";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class GenderDoctorPage extends Component {
  render() {
    return (
      <div>
        <GenderDoctor />
      </div>
    );
  }
}
