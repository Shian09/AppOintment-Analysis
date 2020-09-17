import api from "../Api";

//Get number of completed appointments
export const getCompletedAppointment = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/appointmentCompletion");

    chartData = {
      labels: [res.data.x],
      datasets: [
        {
          label: "Number of completed appointment",
          data: [res.data.y],
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
      "An unexpected error occured from getting appointment completion from apicalls." +
        error
    );
  }
};

//Get number of most completed booked time
export const getBookedTime = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/bookedTimeDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of booked time",
          data: res.data.y,
          borderWidth: 5,
          borderColor: "rgba(91, 238, 54, 0.6)",
          backgroundColor: "rgba(91, 238, 54, 0.3)",
          hoverBackgroundColor: "rgba(91, 238, 54, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
          pointHoverBackgroundColor: "rgba(54, 162, 235, 0.6)",
          pointHoverBorderColor: "rgba(54, 162, 235, 0.6)",
          pointHoverBorderWidth: 5,
          pointHoverRadius: 8,
        },
      ],
    };

    return chartData;
  } catch (error) {
    //alert("An unexpected error occured from getting booked time from apicalls.");
    console.log(
      "An unexpected error occured from getting booked time from apicalls." +
        error
    );
  }
};

//Get number of most used drugs
export const getDrugsCount = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/prescription");

    chartData = {
      labels: res.data.drugs,
      datasets: [
        {
          label: "Number of drugs",
          data: res.data.drugsCount,
          borderWidth: 3,
          borderColor: "rgba(238, 134, 54, 0.6)",
          backgroundColor: "rgba(238, 134, 54, 0.3)",
          hoverBackgroundColor: "rgba(238, 134, 54, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
        },
      ],
    };

    return chartData;
  } catch (error) {
    // alert("An unexpected error occured from getting drugs count from apicalls.");
    console.log(
      "An unexpected error occured from getting drugs count from apicalls." +
        error
    );
  }
};

//Get number of diagnoses
export const getDiagnosesCount = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/prescription");

    chartData = {
      labels: res.data.diagnoses,
      datasets: [
        {
          label: "Number of doctors",
          data: res.data.diagnosesCount,
          borderWidth: 3,
          borderColor: "rgba(127, 54, 238, 0.6)",
          backgroundColor: "rgba(127, 54, 238, 0.3)",
          hoverBackgroundColor: "rgba(127, 54, 238, 1)",
          hoverBorderWidth: "3",
          hoverBorderColor: "black",
        },
      ],
    };

    return chartData;
  } catch (error) {
    //alert("An unexpected error occured from getting diagnoses from apicalls.");
    console.log(
      "An unexpected error occured from getting diagnoses from apicalls." +
        error
    );
  }
};
