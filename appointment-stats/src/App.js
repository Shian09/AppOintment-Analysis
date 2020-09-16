import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import "./App.css";

//Import Pages
import AddressDoctorPage from "./pages/Doctor/AddressDoctorPage";
import RatingDoctorPage from "./pages/Doctor/RatingDoctorPage";
import SpecialtyDoctorPage from "./pages/Doctor/SpecialtyDoctorPage";
import AddressPatientPage from "./pages/Patient/AddressPatientPage";
import AgePatientPage from "./pages/Patient/AgePatientPage";
import GenderPatientPage from "./pages/Patient/GenderPatientPage";

function App() {
  return (
    <Router>
      <div>
        <div className="NavigationBar">
          <div className="divDoc">
            <NavLink activeClassName="Navigate" exact to="/">
              <button className="buttonDoc">Doctor Rating</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/address">
              <button className="buttonDoc">Doctor Address</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/doctor/specialty">
              <button className="buttonDoc">Doctor Specialty</button>
            </NavLink>{" "}
          </div>
          <div className="divPat">
            <NavLink activeClassName="Navigate" exact to="/patient/age">
              <button className="buttonPat">Patient Age</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/address">
              <button className="buttonPat">Patient Address</button>
            </NavLink>{" "}
            <NavLink activeClassName="Navigate" exact to="/patient/gender">
              <button className="buttonPat">Patient Gender</button>
            </NavLink>{" "}
          </div>
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={RatingDoctorPage} />
            <Route exact path="/doctor/address" component={AddressDoctorPage} />
            <Route
              exact
              path="/doctor/specialty"
              component={SpecialtyDoctorPage}
            />
            <Route exact path="/patient/age" component={AgePatientPage} />
            <Route
              exact
              path="/patient/address"
              component={AddressPatientPage}
            />
            <Route exact path="/patient/gender" component={GenderPatientPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
