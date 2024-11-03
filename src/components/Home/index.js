import React from "react";
import CardInfo from "../CardInfo";
import Search from "../Search";

const Home = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <CardInfo text="CardInfo using props"/>
      <Search text="Search using props"/>
    </div>
  );
};

export default Home;
