import React, { Component } from "react";

//Import Api functions
import { getDoctorNum } from "../../API/ApiCalls/DoctorApiCalls";

//Import Chart
import { Bar } from "react-chartjs-2";

export default class NumDoctors extends Component {
  state = {
    chartData: {},
  };

  getDoctorNumData = async () => {
    try {
      const data = await getDoctorNum();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting doctor num from component");
      console.log(
        "An unexpected error occured from getting doctor num from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorNumData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting doctor num from component");
      console.log(
        "An unexpected error occured from getting doctor num from componentDidMount." +
          error
      );
    }
  };

  componentDidUpdate = async () => {
    console.log("Here");
    try {
      const chartData = await this.getDoctorNumData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting doctor num from component");
      console.log(
        "An unexpected error occured from getting doctor num from componentDidUpdate." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Bar
          data={this.state.chartData}
          height={570}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Doctors in Rating Table",
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
                left: 800,
                right: 800,
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
