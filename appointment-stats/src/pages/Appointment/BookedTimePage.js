import React, { Component } from "react";

//Import component
import BookedTime from "../../components/Appointment/BookedTime";

//Import Styling
import "../../css/Patient/PatientPage.css";

export default class BookedTimePage extends Component {
  render() {
    return (
      <div className="container">
        <BookedTime />
      </div>
    );
  }
}
