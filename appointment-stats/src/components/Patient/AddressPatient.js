import React, { Component } from "react";

//Import Api functions
import { getPatientAddress } from "../../API/ApiCalls/PatientApiCalls";

//Import Chart
import { Bar } from "react-chartjs-2";

export default class AddressPatient extends Component {
  state = {
    chartData: {},
  };

  getPatientAddressData = async () => {
    try {
      const data = await getPatientAddress();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient address from component."
      );
      console.log(
        "An unexpected error occured from getting patient address from component getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getPatientAddressData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting patient address from component."
      );
      console.log(
        "An unexpected error occured from getting patient address from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          height={600}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Patients per Address",
              fontSize: 25,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                  },
                },
              ],
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
