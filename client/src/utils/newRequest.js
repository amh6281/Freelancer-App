import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:8800/api/",
  withCredentials: true, // origin이 달라 cookie에 token이 안들어가는 문제 해결
});

export default newRequest;
