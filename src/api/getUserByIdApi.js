import axiosClient from "./axiosClient";

const getUserByIdApi = {
  get: (id) => {
    if(id) return;

    const url = `/users/${id}`;
    return axiosClient.get(url);
  },
};

export default getUserByIdApi;