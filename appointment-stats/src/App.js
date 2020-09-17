import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";
import AppointmentCompletionPage from "./pages/Appointment/AppointmentCompletionPage";
import BookedTimePage from "./pages/Appointment/BookedTimePage";
import DiagnosesCountPage from "./pages/Appointment/DiagnosesCountPage";
import DrugsCountPage from "./pages/Appointment/DrugsCountPage";

//Import Pages
import AddressDoctorPage from "./pages/Doctor/AddressDoctorPage";
import BloodDoctorPage from "./pages/Doctor/BloodDoctorPage";
import GenderDoctorPage from "./pages/Doctor/GenderDoctorPage";
import NumDoctorPage from "./pages/Doctor/NumDoctorPage";
import RatingDoctorPage from "./pages/Doctor/RatingDoctorPage";
import SpecialtyDoctorPage from "./pages/Doctor/SpecialtyDoctorPage";
import AddressPatientPage from "./pages/Patient/AddressPatientPage";
import AgePatientPage from "./pages/Patient/AgePatientPage";
import BloodPatientPage from "./pages/Patient/BloodPatientPage";
import GenderPatientPage from "./pages/Patient/GenderPatientPage";

function App() {
  return (
    <Router>
      <div>
        <h1 className="WebpageTitle">
          Data Visualization Tool for AppOintment App
        </h1>
        <div className="NavigationBar">
          <div className="divDoc">
            <NavLink activeClassName="Navigate" exact to="/">
              <button className="buttonDoc">Doctor Rating</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/blood">
              <button className="buttonDoc">Doctor Blood</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/address">
              <button className="buttonDoc">Doctor Address</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/specialty">
              <button className="buttonDoc">Doctor Specialty</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/gender">
              <button className="buttonDoc">Doctor Gender</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/trigger">
              <button className="buttonDoc">Doctor Numbers</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/appointment">
              <button className="buttonDoc">Completed Appointment</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/bookedTime">
              <button className="buttonDoc">Booked Time</button>
            </NavLink>{" "}
          </div>
          <div className="divPat">
            <NavLink
              activeClassName="Navigate"
              exact
              to="/prescription/diagnoses"
            >
              <button className="buttonPat">Most Diagnoses</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/prescription/drugs">
              <button className="buttonPat">Most Drugs</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/age">
              <button className="buttonPat">Patient Age</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/address">
              <button className="buttonPat">Patient Address</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/gender">
              <button className="buttonPat">Patient Gender</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/blood">
              <button className="buttonPat">Patient Blood</button>
            </NavLink>{" "}
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={RatingDoctorPage} />
            <Route exact path="/doctor/blood" component={BloodDoctorPage} />
            <Route exact path="/doctor/address" component={AddressDoctorPage} />
            <Route
              exact
              path="/doctor/specialty"
              component={SpecialtyDoctorPage}
            />
            <Route exact path="/doctor/gender" component={GenderDoctorPage} />
            <Route exact path="/trigger" component={NumDoctorPage} />
            <Route
              exact
              path="/appointment"
              component={AppointmentCompletionPage}
            />
            <Route exact path="/bookedTime" component={BookedTimePage} />
            <Route
              exact
              path="/prescription/diagnoses"
              component={DiagnosesCountPage}
            />
            <Route
              exact
              path="/prescription/drugs"
              component={DrugsCountPage}
            />
            <Route exact path="/patient/age" component={AgePatientPage} />
            <Route
              exact
              path="/patient/address"
              component={AddressPatientPage}
            />
            <Route exact path="/patient/gender" component={GenderPatientPage} />
            <Route exact path="/patient/blood" component={BloodPatientPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
