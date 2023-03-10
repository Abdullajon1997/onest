import React from "react";
import Mold from "../Mold/Mold";
import AutoPlay from "../AutoPlay/AutoPlay";
import Удобства from "../Удобства/Удобства";
import Information from "../Information/Information";
import Conditions from "../Conditions/Conditions";
import Author from "../Author/Author";
import OnestCard from "../OnestCard/OnestCard";

function Second() {
  return (
    <>
      <Mold />
      <AutoPlay className="container" />
      <div className="infomation frame__container">
        <div>
          <Удобства />
          <Information />
          <Conditions />
          <OnestCard />
        </div>
        <Author />
      </div>
    </>
  );
}

export default Second;
