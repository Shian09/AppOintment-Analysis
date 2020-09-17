import React, { Component } from "react";

//Import Api functions
import { getDoctorSpecialty } from "../../API/ApiCalls/DoctorApiCalls";

//Import Chart
import { HorizontalBar } from "react-chartjs-2";

export default class SpecialtyDoctor extends Component {
  state = {
    chartData: {},
  };

  getDoctorSpecialtyData = async () => {
    try {
      const data = await getDoctorSpecialty();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting doctor specialty from component");
      console.log(
        "An unexpected error occured from getting doctor specialty from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorSpecialtyData();
      this.setState({ chartData });
    } catch (error) {
      //alert("An unexpected error occured from getting doctor specialty from component");
      console.log(
        "An unexpected error occured from getting doctor specialty from componentDidMount." +
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
              text: "Number of Doctors per Specialty",
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
