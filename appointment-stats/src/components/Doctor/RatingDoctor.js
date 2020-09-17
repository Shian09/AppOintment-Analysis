import React, { Component } from "react";

//Import Api functions
import { getDoctorRating } from "../../API/ApiCalls/DoctorApiCalls";

//Chart Imports
import { Pie } from "react-chartjs-2";

export default class RatingDoctor extends Component {
  state = {
    chartData: {},
  };

  getDoctorRatingData = async () => {
    try {
      const data = await getDoctorRating();
      return data;
    } catch (error) {
      //alert("An unexpected error occured from getting doctor rating from component");
      console.error(
        "An unexpected error occured from getting doctor rating from getData" +
          error
      );
    }
  };

  componentDidMount = async () => {
    try {
      const chartData = await this.getDoctorRatingData();
      this.setState({ chartData });
    } catch (error) {
      //  alert("An unexpected error occured from getting doctor rating from component");
      console.error(
        "An unexpected error occured from getting doctor rating from component" +
          error
      );
    }
  };

  render() {
    return (
      <div>
        <Pie
          data={this.state.chartData}
          height={600}
          options={{
            maintainAspectRatio: false,
            title: {
              display: true,
              text: "Numbers of Doctors per Range of Rating",
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
