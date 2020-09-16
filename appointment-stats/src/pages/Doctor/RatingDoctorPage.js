import React, { Component } from "react";

//Import Chart
import RatingDoctor from "../../components/Doctor/RatingDoctor";

//Import styling
import "../../css/Doctor/DoctorPage.css";

export default class RatingDoctorPage extends Component {
  render() {
    return (
      <div className="container">
        <RatingDoctor />
      </div>
    );
  }
}
