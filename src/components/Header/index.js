import React from "react";
import Generations from "../Generations";
import Logo2 from "../Logo2";

const Header = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
      <Generations text="Generations using props" />
      <Logo2 />
    </div>
  );
};

export default Header;
