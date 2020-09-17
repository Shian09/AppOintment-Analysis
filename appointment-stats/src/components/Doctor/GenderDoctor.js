import React, { Component } from "react";

//Import Api functions
import { getDoctorGender } from "../../API/ApiCalls/DoctorApiCalls";

//Import Chart
import { Doughnut } from "react-chartjs-2";

export default class GenderDoctor extends Component {
  state = {
    chartData: {},
  };

  getDoctorGenderData = async () => {
    try {
      const data = await getDoctorGender();
      return data;
    } catch (error) {
      alert(
        "An unexpected error occured from getting Doctor gender from component"
      );
      console.log(
        "An unexpected error occured from getting Doctor gender from getData." +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorGenderData();
      this.setState({ chartData });
    } catch (error) {
      alert(
        "An unexpected error occured from getting Doctor gender from component" +
          error
      );
      console.log(
        "An unexpected error occured from getting Doctor gender from componentDidMount." +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Doughnut
          data={this.state.chartData}
          height={570}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Number of Doctors per Gender",
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
