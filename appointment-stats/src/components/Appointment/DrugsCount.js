import React, { Component } from "react";

//Import Api functions
import { getDrugsCount } from "../../API/ApiCalls/AppointmentApiCalls";

//Import Chart
import { Bar } from "react-chartjs-2";

export default class DrugsCount extends Component {
  state = {
    chartData: {},
  };

  getDrugsCountData = async () => {
    try {
      const data = await getDrugsCount();
      return data;
    } catch (error) {
      //   alert(
      //     "An unexpected error occured from getting drugs count from component."
      //   );
      console.log(
        "An unexpected error occured from getting drugs count from component getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDrugsCountData();
      this.setState({ chartData });
    } catch (error) {
      //   alert(
      //     "An unexpected error occured from getting drugs count from component."
      //   );
      console.log(
        "An unexpected error occured from getting drugs count from componentDidMount." +
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
              text: "Number of Most Used Drugs in Prescription",
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
