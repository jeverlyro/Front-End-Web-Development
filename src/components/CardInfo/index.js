import React from "react";
import Evolution from "../Evolution";
import TypeEffect from "../TypeEffect";
import Logo from "../Logo";

const CardInfo = ({ Text }) => {
  return (
    <>
      <h1>{Text}</h1>
      <Evolution text="Evolution" />
      <TypeEffect text="Type Effect" />
      <Logo text="Logo" />
    </>
  );
};

export default CardInfo;
