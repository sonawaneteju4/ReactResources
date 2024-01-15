import React from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const gitData = useLoaderData();

  return (
    <div>
      About
      <div className="">{gitData.followers}</div>
      <img src={gitData.avatar_url} alt="userImg" height="20px" />
      {/* <div>{testD.followers}</div>
      <img src={testD.avatar_url} alt="userImg" height="20px" /> */}
    </div>
  );
};

export default About;

export const gitHubInfoData = async () => {
  const res = await fetch("https://api.github.com/users/sonawaneteju4");
  return res.json();
};
