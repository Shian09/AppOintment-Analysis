import React, { Component } from "react";

//Import Api functions
import { getPatientBlood } from "../../API/ApiCalls/PatientApiCalls";

//Import Chart
import { Pie } from "react-chartjs-2";

export default class BloodPatient extends Component {
  state = {
    chartData: {},
  };

  getPatientBloodData = async () => {
    try {
      const data = await getPatientBlood();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient blood from component"
      );
      console.log(
        "An unexpected error occured from getting patient blood from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getPatientBloodData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient blood from component" +
          error
      );
      console.log(
        "An unexpected error occured from getting patient blood from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Pie
          data={this.state.chartData}
          height={600}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Patients per Blood Group",
              fontSize: 25,
            },
            layout: {
              padding: {
                left: 500,
                right: 500,
                top: 0,
                bottom: 0,
              },
            },
            tooltips: {
              enabled: true,
            },
          }}
        />
      </div>
    );
  }
}
