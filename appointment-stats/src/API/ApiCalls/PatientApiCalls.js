import api from "../Api";

//Get number of patients per gender
export const getPatientGender = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/patientGenderDist");

    chartData = {
      labels: ["Others", "Male", "Female"],
      datasets: [
        {
          label: "Number of patients",
          data: res.data.y,
          backgroundColor: [
            "rgba(255, 99, 132, 0.6)",
            "rgba(54, 162, 235, 0.6)",
            "rgba(255, 206, 86, 0.6)",
          ],
          hoverBackgroundColor: [
            "rgba(255, 99, 132, 0.8)",
            "rgba(54, 162, 235, 0.8)",
            "rgba(255, 206, 86, 0.8)",
          ],
        },
      ],
    };

    return chartData;
  } catch (error) {
    // alert("An unexpected error occured from getting patient gender from apicalls.An unexpected error occured");
    console.log(
      "An unexpected error occured from getting patient gender from apicalls." +
        error
    );
  }
};

//Get number of patients per address
export const getPatientAddress = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/patientAddressDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of patients",
          data: res.data.y,
          borderWidth: 3,
          borderColor: "rgba(73, 202, 249, 0.6)",
          backgroundColor: "rgba(73, 202, 249, 0.3)",
          hoverBackgroundColor: "rgba(73, 202, 249, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
        },
      ],
    };

    return chartData;
  } catch (error) {
    // alert("An unexpected error occured from getting patient address from apicalls.");
    console.log(
      "An unexpected error occured from getting patient address from apicalls." +
        error
    );
  }
};

//Get number of patients per age
export const getPatientAge = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/patientAgeDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of patients",
          data: res.data.y,
          backgroundColor: "rgba(247, 102, 243, 0.6)",
          hoverBackgroundColor: "rgba(247, 102, 243, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
          borderColor: "rgba(15, 198, 179, 1)",
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
    // alert("An unexpected error occured from getting patient age from apicalls.");
    console.log(
      "An unexpected error occured from getting patient age from apicalls." +
        error
    );
  }
};
