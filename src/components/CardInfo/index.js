import React from "react";
import Evolution from "../Evolution";
import TypeEffect from "../TypeEffect";
import Logo from "../Logo";

const CardInfo = ({text}) => {
  return (
    <div>
      <h1>{text}</h1>
      <Evolution />
      <TypeEffect />
      <Logo />
    </div>
  );
};

export default CardInfo;
