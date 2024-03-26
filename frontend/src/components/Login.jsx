import React, { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import axios from "axios";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(user);
    if (user.email === "" || user.password === "") {
      alert("please fill all the fields");
      return;
    }

    axios
      .post("http://localhost:3000/api/login", user)
      .then((res) => {
        console.log(res.data.token);

        localStorage.setItem("token", JSON.stringify(res.data.token));

        navigate("/blogs");
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <div id="signup">
      <h2>SignIn</h2>
      <input
        type="text"
        placeholder="email"
        id="email"
        name="email"
        value={user.email}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        placeholder="password"
        id="password"
        name="password"
        value={user.password}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={() => handleSubmit()}>Login</button>
      <h3>Dont Have An Account ?</h3>
      <Link to="/signup">Signup</Link>
    </div>
  );
};

export default Login;
