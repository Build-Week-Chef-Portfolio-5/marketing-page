import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Sidebar from "../img/chef.jpg";
import "./Login.css";


const initialState = {
  username: "",
  password: "",
  isFetching: false
};

const Login = props => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleChange = e => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setInputValues({ ...inputValues, isFetching: true });
    delete inputValues.isFetching;
    axios
      .post("https://chefposts.herokuapp.com/api/chefs/login", inputValues)
      .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token);
        props.setChefId(res.data.id)
        localStorage.setItem("id", res.data.id)
        props.history.push("/chef-portfolio"); // this is the name of the page that it will "push" to after a user logs in with correct credentials
      })
      .catch(err =>
        console.log("sorry, an error has occured with logging you in", err)
      );
  };

  return (
    <div>
      <div className="Login">
        <img src={Sidebar}/>
        <div className="box">
          <h1>Login to continue</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={inputValues.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={inputValues.password}
              onChange={handleChange}
            />
            <button type="submit">Login</button>
            {inputValues.isFetching && "...Logging You In"}{" "}
            {/* optional loading state */}
        </form>

        <div className="link">
          Don't have an account? 
          <Link to="/register">Register here.</Link>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
