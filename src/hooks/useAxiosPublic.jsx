import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://prime-electronics-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
