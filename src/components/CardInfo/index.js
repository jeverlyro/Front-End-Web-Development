import React from "react";
import Evolution from "./Evolution";
import TypeEffect from "./TypeEffect";
import Logo from "./Logo";

const CardInfo = () => {
  return (
    <div>
      <Evolution description="Evolution" />
      <TypeEffect effect="Type Effect" />
      <Logo title="Logo" />
    </div>
  );
};

export default CardInfo;
