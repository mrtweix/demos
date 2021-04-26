import React, { useEffect } from "react";
import ApiCaller from "./ApiCaller";

const XYZTest = () => {
  const Bearer =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI3NzM4MDczMzc3IiwiZXhwIjoxNjE5MTg4NjI2fQ.O9BEMdVeg0cMwPmLlw4qi3EF-4picP53WShOJF1U20e8GxfCYLMYy1P0oVe90BzjWBIq8K8ARyU2kkqFMT4ZKA";
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
