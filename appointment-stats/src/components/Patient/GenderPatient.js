import React, { Component } from "react";

//Import Api functions
import { getPatientGender } from "../../API/ApiCalls/PatientApiCalls";

//Import Chart
import { Doughnut } from "react-chartjs-2";

export default class GenderPatient extends Component {
  state = {
    chartData: {},
  };

  getPatientGenderData = async () => {
    try {
      const data = await getPatientGender();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient gender from component"
      );
      console.log(
        "An unexpected error occured from getting patient gender from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getPatientGenderData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient gender from component" +
          error
      );
      console.log(
        "An unexpected error occured from getting patient gender from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.chartData}
          height={700}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Patients per Gender",
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
