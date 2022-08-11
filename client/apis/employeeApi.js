import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "content-type": "application/json",
  },
});

const employeeApi = {
  async getAll() {
    const response = await axiosClient.get(`employees/`);
    return response;
  },

  async get(id) {
    const url = `/employee/${id}/`;
    return axiosClient.get(url);
  },

  async add(data) {
    const url = `/employee/`;
    return axiosClient.post(url, data);
  },

  async update(data) {
    const url = `/employee/${data.id}/`;
    return axiosClient.put(url, data);
  },

  async delete(id) {
    const url = `/employee/${id}/`;
    return axiosClient.delete(url);
  },
};

export default employeeApi;
