import React, { useState, useEffect } from "react";
import details from "../database/details.json";
import writeJsonFile from "write-json-file"
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const submitRegisterForm = e => {
    e.preventDefault();
    console.log(username, password);
    const detail = {
      "username": username,
      "password": password
    };
    writeJsonFile('test.json', { 1: 2 }).then(window.location.assign("/"));
  };
  return (
    <div style={{ margin: "300px", border: "3px solid black", padding: "10px" }}>
      <h1>Register</h1>
      <form onSubmit={submitRegisterForm}>
        <label>
          Enter Username:
          <input
            value={username}
            onChange={event => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <label>
          Enter Password:
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
