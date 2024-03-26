import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(user);

    if (user.name === "" || user.email === "" || user.password === "") {
      alert("please fill all the fields");
      return;
    }
    if (user.password !== user.confirmpassword) {
      alert("passwords do not match");
      return;
    }
    axios
      .post("http://localhost:3000/api/signup", user)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err);
      });
  };

  return (
    <div id="signup">
      <h2>SignUp</h2>

      <input
        type="text"
        placeholder="name"
        id="name"
        name="name"
        value={user.name}
        onChange={(e) => handleChange(e)}
      />
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
      <input
        type="text"
        placeholder="confirmpassword"
        id="confirmpassword"
        name="confirmpassword"
        value={user.confirmpassword}
        onChange={(e) => handleChange(e)}
      />

      <button onClick={() => handleSubmit()}>SignUp</button>

      <h3>Alredy Have An Account ?</h3>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Signup;
