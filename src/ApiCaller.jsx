import axios from "axios";

const ApiCaller = async (URL, method = "GET", payload = null) => {
  const token = localStorage.Bearer;
  const headers = {
    accept: "application/json",
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  try {
    let response = await axios(URL, {
      method,
      headers,
      data: payload,
    });
    const result = {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
    return result;
  } catch (error) {
    return error;
  }
};

export default ApiCaller;
