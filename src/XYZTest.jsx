import React, { useEffect } from "react";
import ApiCaller from "./ApiCaller";

const XYZTest = () => {
  const Bearer =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0NTY0NTY1NCIsImV4cCI6MTYxOTE4ODYyNn0.TfUu5-SUDh1ShJNZ9Gg00iIzraU14bejfLF2hP9SB6cjv8loyIdAdfD-EU5Ee6GRW4cjE5OR5L7AZYDUtV9YLA";
  const url = "https://jsonplaceholder.typicode.com/todos/1";

  useEffect(() => {
    const fetchMyAPI = async (url) => {
      const result = await ApiCaller(url);
      console.log(result);
    };
    fetchMyAPI(url);
  }, []);
  return (
    <button
      type="button"
      onClick={() =>
        window.localStorage.setItem("Bearer", JSON.stringify(Bearer))
      }
    >
      Save to LocalStorage
    </button>
  );
};

export default XYZTest;
