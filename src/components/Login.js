import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import details from "../database/details.json";
import Register from "./Register";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const submitForm = e => {
    e.preventDefault();
    console.log(username, password);
    details.users.map(detail => {
      if (username == detail.username && password == detail.password) {
        console.log("success");
        setSuccess(true);
        console.log(success);
      }
    });
  };
  useEffect(() => {
    if (success) {
      window.location.assign("/dashboard");
    }
  });
  return (
    <div style={{ margin: "300px", border: "3px solid black", padding: "10px" }}>
      <h1>Login</h1>
      <form onSubmit={submitForm}>
        <label>
          Username:
          <input
            value={username}
            onChange={event => setUsername(event.target.value)}
            name="username"
            type="text"
          />
        </label>
        <br />
        <label>
          Password:
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
            name="password"
            type="password"
          />
        </label>
        <br />
        <button type="submit">Submit</button>
        <button>
          <Link to="/register">Register</Link>
        </button>
        <h4>Default=>username:admin password:admin</h4>
        <h4>Registration page not working !!</h4>
      </form>
    </div>
  );
};

export default Login;
