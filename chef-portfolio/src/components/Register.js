import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Sidebar from "../img/chef.jpg";
import axios from "axios";

const initialState = {
  username: "",
  password: "",
  name: "",
  location: "",
  contact_info: "",
  isFetching: false
};

const Register = props => {
  const [data, setData] = useState(initialState);

  const handleChange = e => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setData({ ...data, isFetching: true });
    delete data.isFetching;
    axios
      .post("https://chefposts.herokuapp.com/api/chefs/register", data)
      .then(res => {
        props.setChefId(res.data.id)
        localStorage.setItem("id", res.data.id)
        props.history.push("/");
      })
      .catch(err =>
        console.log(
          "sorry, an error has occured while registering your information",
          err
        )
      );
  };

  return (
    <div>
      <div className="Login">
      <img src={Sidebar}/>
      <div className="box">
        <h1>Register to continue</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={data.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={data.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contact_info"
            placeholder="Email"
            value={data.contact_info}
            onChange={handleChange}
          />
          <button type="submit">Register</button>
          {data.isFetching && "...Registering Profile"}{" "}
          {/* optional loading state */}
        </form>

        <div className="link">
          Already have an account? 
          <Link to="/">Log in here.</Link>
        </div>

      </div>
      </div>
    </div>
  );
};

export default Register;
