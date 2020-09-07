import axios from "axios";

const BASE_ULR = "https://api.spacexdata.com/v3";

export const getCompanyInfo = () => {
  return axios.get(BASE_ULR + "/info");
};

export const getAllShips = () => {
  return axios.get(BASE_ULR + "/ships");
};
