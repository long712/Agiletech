import axios from "axios";

// export const axi

export const instance = axios.create({
  baseURL: "https://test-react.agiletech.vn",
  timeout: 5000,
  headers: { "X-Custom-Header": "foobar" },
});
