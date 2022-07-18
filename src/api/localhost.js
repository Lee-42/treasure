import axios from "axios";

const STATUS_OK = 200;

axios.defaults.baseURL = "http://localhost:6789";

export function localhostGet(url, params) {
  return axios
    .get(url, {
      params,
    })
    .then((res) => {
      return res;
    })
    .catch((e) => {
      console.log(e);
    });
}
