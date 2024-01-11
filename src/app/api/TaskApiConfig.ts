import axios from "axios";

const config = localStorage.getItem('token')
  ? {
      baseURL: "http://127.0.0.1:8000/",
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  : {
      baseURL: "http://127.0.0.1:8000/",
    };

const TaskApiConfig = axios.create(config);

export default TaskApiConfig;
//        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,