import React, { Component } from "react";

//Import Api functions
import { getDiagnosesCount } from "../../API/ApiCalls/AppointmentApiCalls";

//Import Chart
import { HorizontalBar } from "react-chartjs-2";

export default class DiagnosesCount extends Component {
  state = {
    chartData: {},
  };

  getDiagnosesCountData = async () => {
    try {
      const data = await getDiagnosesCount();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting diagnosesfrom component");
      console.log(
        "An unexpected error occured from getting diagnosesfrom getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDiagnosesCountData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting diagnosesfrom component");
      console.log(
        "An unexpected error occured from getting diagnosesfrom componentDidMount." +
          error
      );
    }
  };
  render() {
    return (
      <div>
        <HorizontalBar
          data={this.state.chartData}
          height={570}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Most Diagnosed Diseases",
              fontSize: 25,
            },
            scales: {
              xAxes: [
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
                left: 300,
                right: 300,
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
