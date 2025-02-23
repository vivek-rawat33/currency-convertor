import React from "react";
import Card from "./Components/Card";
import "./App.css";
import { useState, useEffect } from "react";
function App() {
  const [FormData, setFormData] = useState({ username: "", email: "" });
  const handleChange = (e) => {
    setFormData({ ...FormData, [e.target.name]: e.target.value }); // This will set the form data but it is slow
    console.log(FormData); // This will log the form data in the console . console.log will execute before the setFormData
  };
  useEffect(() => {
    console.log(FormData);
  }, [FormData]);

  const handleSubmit = () => {
    alert("form submitted");
    setFormData({ username: "", email: "" });
  };
  return (
    <>
      <div
        className="flex-wrap 
      justify-center items-center  md:flex md:justify-center bg-blue-400 h-screen w-full py-10 px-40"
      >
        <Card username={FormData.username} email={FormData.email} id="333" />
        <input
          type="text"
          name="username"
          value={FormData.username}
          onChange={handleChange}
          className="bg-slate-500 rounded-md py-1 px-3 mx-2"
          placeholder="Enter your name"
        />
        <input
          type="text"
          name="email"
          value={FormData.email}
          onChange={handleChange}
          className="bg-slate-500 rounded-md py-1 px-3 mx-2"
          placeholder="enter your mail"
        />
        <button
          className="bg-orange-600 rounded-md py-1 px-3 m-3 cursor-pointer "
          onClick={handleSubmit}
        >
          submit
        </button>
      </div>
    </>
  );
}

export default App;
