import api from "../Api";

//Get number of doctors per Rating
export const getDoctorRating = async () => {
  let chartData = {};
  console.log("inside");
  try {
    const res = await api.get("/dataAnalysis/doctorRatingDist");

    console.log(res.data);

    chartData = {
      labels: [0.5, 1.5, 2.5, 3.5, 4.5],
      datasets: [
        {
          label: "Number of doctors per rating",
          data: res.data.y,
          backgroundColor: [
            "rgba(213, 246, 79, 0.6)",
            "rgba(17,213,235, 0.6)",
            "rgba(246,157,79, 0.6)",
            "rgba(246,79,163, 0.6)",
            "rgba(17,213,235, 0.6)",
          ],
          borderWidth: 5,
          fill: false,
          pointHoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
          pointHoverBorderColor: "rgba(54, 162, 235, 0.6)",
          pointHoverBorderWidth: 5,
          pointHoverRadius: 8,
        },
      ],
    };

    return chartData;
  } catch (error) {
    // alert("An unexpected error occured from getting doctor rating from apicalls.");
    console.log(
      "An unexpected error occured from getting doctor rating from apicalls." +
        error
    );
  }
};

//Get number of doctors per address
export const getDoctorAddress = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/doctorAddressDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of doctors",
          data: res.data.y,
          borderWidth: 3,
          borderColor: "rgba(246, 79, 157, 0.6)",
          backgroundColor: "rgba(246, 79, 157, 0.3)",
          hoverBackgroundColor: "rgba(246, 79, 157, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
        },
      ],
    };

    return chartData;
  } catch (error) {
    //alert("An unexpected error occured from getting doctor adddress from apicalls.");
    console.log(
      "An unexpected error occured from getting doctor adddress from apicalls." +
        error
    );
  }
};

//Get number of doctors per specialty
export const getDoctorSpecialty = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/doctorSpecialtyDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of doctors",
          data: res.data.y,
          borderWidth: 3,
          borderColor: "rgba(68, 245, 215, 0.6)",
          backgroundColor: "rgba(68, 245, 215, 0.2)",
          hoverBackgroundColor: "rgba(68, 245, 215, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
        },
      ],
    };

    return chartData;
  } catch (error) {
    //alert("An unexpected error occured from getting doctor specialty from apicalls.");
    console.log(
      "An unexpected error occured from getting doctor specialty from apicalls." +
        error
    );
  }
};
