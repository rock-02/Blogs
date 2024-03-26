import React, { useEffect, useState } from "react";

import axios from "axios";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("token"));

  console.log("Profile User", user);

  const [logUser, setLogUser] = useState({});

  const fetch = () => {
    axios
      .get(`http://localhost:3000/api/user/${user.id}`)
      .then((res) => {
        console.log(res.data);
        setLogUser(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
  const handleUpdate = () => {
    axios
      .put(`http://localhost:3000/api/user/${logUser._id}`, logUser)
      .then((res) => {
        console.log(res.data);
        fetch();
      })
      .catch((e) => {
        console.log(e.response.data.message);
      });
  };
  return (
    <div id="prof">
      <div id="prof-img">
        <img src={logUser?.profileImage} alt="" />
      </div>
      <div id="prof-details">
        <div>
          <h1>Name : </h1>
          <input
            type="text"
            name="name"
            value={logUser?.name}
            onChange={(e) => {
              setLogUser({ ...logUser, name: e.target.value });
            }}
          />
        </div>
        <div>
          <h1>Email : </h1>
          <input
            type="text"
            name="email"
            value={logUser?.email}
            onChange={(e) => {
              setLogUser({ ...logUser, email: e.target.value });
            }}
          />
        </div>
        <div>
          <h1>ProfileImage Url</h1>
          <input
            type="text"
            name="prfileImage"
            value={logUser?.profileImage}
            onChange={(e) => {
              setLogUser({ ...logUser, profileImage: e.target.value });
            }}
          />
        </div>

        <div>
          <button onClick={handleUpdate}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
