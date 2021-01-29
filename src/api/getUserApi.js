import axiosClient from "./axiosClient";

const getUserApi = {
  get: () => {
    const url = "/users";
    return axiosClient.get(url);
  },
};

export default getUserApi;