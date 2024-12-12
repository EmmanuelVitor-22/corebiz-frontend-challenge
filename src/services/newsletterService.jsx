import axios from "axios";


const axiosInstance = axios.create({
    baseURL : 'https://corebiz-test-server.onrender.com/api/v1/',
    timeout : 10000
})

export const postNewsletter = async (data) => {
    try {
      const response = await axiosInstance.post("/newsletter", data);
      return response;
    } catch (error) {
      throw error;
    }
  };
  