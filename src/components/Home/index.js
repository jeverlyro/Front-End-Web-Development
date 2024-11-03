import React from "react";
import CardInfo from "../CardInfo";
import Search from "../Search";

const Home = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <CardInfo />
      <Search />
    </div>
  );
};

export default Home;
