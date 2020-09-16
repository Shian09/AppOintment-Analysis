import React, { Component } from "react";

//Import component
import AddressDoctor from "../../components/Doctor/AddressDoctor";

//Import Styling
import "../../css/Doctor/DoctorPage.css";

export default class AddressDoctorPage extends Component {
  render() {
    return (
      <div className="container">
        <AddressDoctor />
      </div>
    );
  }
}
