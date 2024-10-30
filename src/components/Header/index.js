import React from "react";
import Generations from "../Generations";
import Logo2 from "../Logo2";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Generations />
      <Logo2 />
    </div>
  );
};

export default Header;
