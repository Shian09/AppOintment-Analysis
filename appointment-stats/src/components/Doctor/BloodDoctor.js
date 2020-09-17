import React, { Component } from "react";

//Import Api functions
import { getDoctorBlood } from "../../API/ApiCalls/DoctorApiCalls";

//Import Chart
import { Polar } from "react-chartjs-2";

export default class BloodDoctor extends Component {
  state = {
    chartData: {},
  };

  getDoctorBloodData = async () => {
    try {
      const data = await getDoctorBlood();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting doctor blood from component"
      );
      console.log(
        "An unexpected error occured from getting doctor blood from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorBloodData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting doctor blood from component" +
          error
      );
      console.log(
        "An unexpected error occured from getting doctor blood from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Polar
          data={this.state.chartData}
          height={700}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Doctors per Blood Group",
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
