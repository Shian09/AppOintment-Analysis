import api from "../Api";

//Get number of doctors per Rating
export const getDoctorRating = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/doctorRatingDist");

    chartData = {
      labels: [0.5, 1.5, 2.5, 3.5, 4.5],
      datasets: [
        {
          label: "Number of doctors per rating",
          data: res.data.y,
          backgroundColor: [
            "rgba(213, 246, 79, 0.3)",
            "rgba(17,213,235, 0.3)",
            "rgba(246,157,79, 0.3)",
            "rgba(246,79,163, 0.3)",
            "rgba(17,213,235, 0.3)",
          ],
          borderWidth: 5,
          borderColor: [
            "rgba(213, 246, 79, 0.6)",
            "rgba(17,213,235, 0.6)",
            "rgba(246,157,79, 0.6)",
            "rgba(246,79,163, 0.6)",
            "rgba(17,213,235, 0.6)",
          ],
          hoverBackgroundColor: [
            "rgba(213, 246, 79, 1)",
            "rgba(17,213,235, 1)",
            "rgba(246,157,79, 1)",
            "rgba(246,79,163, 1)",
            "rgba(17,213,235, 1)",
          ],

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

//Get number of patients per blood group
export const getDoctorBlood = async () => {
  let chartData = {};

  try {
    const res = await api.get("/dataAnalysis/doctorBloodDist");

    chartData = {
      labels: res.data.x,
      datasets: [
        {
          label: "Number of doctors",
          data: res.data.y,
          backgroundColor: [
            "rgba(48, 158, 143, 0.6)",
            "rgba(84, 111, 245, 0.6)",
            "rgba(164, 245, 84, 0.6)",
            "rgba(156, 80, 243, 0.6)",
            "rgba(84, 245, 116, 0.6)",
            "rgba(242, 242, 107, 0.6)",
            "rgba(80, 161, 243, 0.6)",
            "rgba(242, 242, 107, 0.6)",
            "rgba(242, 107, 107, 0.6)",
            "rgba(255, 206, 86, 0.6)",
            "rgba(245, 90, 84, 0.6)",
            "rgba(245, 27, 114, 0.6)",
            "rgba(242, 107, 193, 0.6)",
            "rgba(157, 107, 242, 0.6)",
            "rgba(107, 197, 242, 0.6)",
            "rgba(242, 242, 107, 0.6)",
          ],
          hoverBackgroundColor: [
            "rgba(48, 158, 143, 0.8)",
            "rgba(84, 111, 245, 0.8)",
            "rgba(164, 245, 84, 0.8)",
            "rgba(156, 80, 243, 0.8)",
            "rgba(84, 245, 116, 0.8)",
            "rgba(242, 242, 107, 0.8)",
            "rgba(80, 161, 243, 0.8)",
            "rgba(242, 242, 107, 0.8)",
            "rgba(242, 107, 107, 0.8)",
            "rgba(255, 206, 86, 0.8)",
            "rgba(245, 90, 84, 0.8)",
            "rgba(245, 27, 114, 0.8)",
            "rgba(242, 107, 193, 0.8)",
            "rgba(157, 107, 242, 0.8)",
            "rgba(107, 197, 242, 0.8)",
            "rgba(242, 242, 107, 0.8)",
          ],
        },
      ],
    };

    return chartData;
  } catch (error) {
    // alert("An unexpected error occured from getting doctor blood from apicalls.An unexpected error occured");
    console.log(
      "An unexpected error occured from getting doctor blood from apicalls." +
        error
    );
  }
};

//Get number of doctors in Rating Table
export const getDoctorNum = async () => {
  let chartData = {};
  try {
    const res = await api.get("/dataAnalysis/triggerDisp");

    chartData = {
      labels: ["Number of Doctors in Rating Table"],
      datasets: [
        {
          label: "Number of doctors",
          data: [parseInt(res.data.y)],
          backgroundColor: [
            "rgba(213, 246, 79, 0.6)",
            "rgba(17,213,235, 0.6)",
            "rgba(246,157,79, 0.6)",
            "rgba(246,79,163, 0.6)",
            "rgba(17,213,235, 0.6)",
          ],
          borderWidth: 5,
          fill: false,
          hoverBackgroundColor: [
            "rgba(213, 246, 79, 0.6)",
            "rgba(17,213,235, 0.6)",
            "rgba(246,157,79, 0.6)",
            "rgba(246,79,163, 0.6)",
            "rgba(17,213,235, 0.6)",
          ],
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
    // alert("An unexpected error occured from getting doctor numbers in rating table from apicalls.");
    console.log(
      "An unexpected error occured from getting doctor numbers in rating table from apicalls." +
        error
    );
  }
};
