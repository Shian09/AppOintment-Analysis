import React, { Component } from "react";

//Import Api functions
import { getPatientAge } from "../../API/ApiCalls/PatientApiCalls";

//Import Chart
import { Line } from "react-chartjs-2";

export default class AgePatient extends Component {
  state = {
    chartData: {},
  };

  getPatientAgeData = async () => {
    try {
      const data = await getPatientAge();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient age from component"
      );
      console.log(
        "An unexpected error occured from getting patient age from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getPatientAgeData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient age from component" +
          error
      );
      console.log(
        "An unexpected error occured from getting patient age from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          height={700}
          options={{
            maintainAspectRatio: false,
            scales: {
              xAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                  },
                },
              ],
            },
            title: {
              display: true,
              text: "Numbers of Patients per Age",
              fontSize: 25,
            },
            legend: {
              display: true,
            },
            animation: {
              easing: "linear",
            },
            layout: {
              padding: {
                left: 500,
                right: 500,
                top: 0,
                bottom: 0,
              },
            },
          }}
        />
      </div>
    );
  }
}
