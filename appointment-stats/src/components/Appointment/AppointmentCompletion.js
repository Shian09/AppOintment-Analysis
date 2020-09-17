import React, { Component } from "react";

//Import Api functions
import { getCompletedAppointment } from "../../API/ApiCalls/AppointmentApiCalls";

//Import Chart
import { Bar } from "react-chartjs-2";

export default class AppointmentCompletion extends Component {
  state = {
    chartData: {},
  };

  getCompletedAppointmentData = async () => {
    try {
      const data = await getCompletedAppointment();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting doctor address from component");
      console.log(
        "An unexpected error occured from getting completed appointment from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getCompletedAppointmentData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting completed appointment from component");
      console.log(
        "An unexpected error occured from getting completed appointment from componentDidMount." +
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
              text: "Number of Completed Appointments",
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
                left: 890,
                right: 890,
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
