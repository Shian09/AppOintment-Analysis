import React, { Component } from "react";

//Import Api functions
import { getBookedTime } from "../../API/ApiCalls/AppointmentApiCalls";

//Import Chart
import { Line } from "react-chartjs-2";

export default class BookedTime extends Component {
  state = {
    chartData: {},
  };

  getBookedTimeData = async () => {
    try {
      const data = await getBookedTime();
      return data;
    } catch (error) {
      //   alert(
      //     "An unexpected error occured from getting patient age from component"
      //   );
      console.log(
        "An unexpected error occured from getting booked time from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getBookedTimeData();
      this.setState({ chartData });
    } catch (error) {
      //   alert(
      //     "An unexpected error occured from getting patient age from component" +
      //       error
      //   );
      console.log(
        "An unexpected error occured from getting booked time from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Line
          data={this.state.chartData}
          height={570}
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
              text: "Number of most booked Appointments per Time",
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
