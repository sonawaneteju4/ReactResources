import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const About = () => {
  const gitData = useLoaderData();
  // const [testD, settestD] = useState('');

  // useEffect(() => {
  //   fetch("https://api.github.com/users/sonawaneteju4")
  //   .then(response => response.json())
  //   .then(data =>{
  //       console.log(data)
  //       settestD(data);

  //   })
  // });
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
