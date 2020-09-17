import React, { Component } from "react";

//Import Api functions
import { getDoctorAddress } from "../../API/ApiCalls/DoctorApiCalls";

//Import Chart
import { Bar } from "react-chartjs-2";

export default class AddressDoctor extends Component {
  state = {
    chartData: {},
  };

  getDoctorAddressData = async () => {
    try {
      const data = await getDoctorAddress();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting doctor address from component");
      console.log(
        "An unexpected error occured from getting doctor address from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorAddressData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting doctor address from component");
      console.log(
        "An unexpected error occured from getting doctor address from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          height={700}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Doctors per Address",
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
