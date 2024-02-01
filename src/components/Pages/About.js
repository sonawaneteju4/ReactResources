import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import UserContext from "../context/UserContext";

const About = () => {
  const gitData = useLoaderData();
  const { user } = useContext(UserContext);

  return (
    <div>
      About
      <div className="">{gitData.name}</div>
      <img src={gitData.avatar_url} alt="userImg" height="20px" />
      <div>{user.phone}</div>
      <div>{user.email}</div>
      <input type="date"></input>
    </div>
  );
};

export default About;

export const gitHubInfoData = async () => {
  const res = await fetch("https://api.github.com/users/sonawaneteju4");
  return res.json();
};
