import { display } from "@mui/system";
import React from "react";
import Marquee from "react-fast-marquee";
import uy from "../../images/uy.png";
import "./AutoPlay.scss";

function AutoPlay() {
  return (
    <div className="container">
      <Marquee pauseOnHover speed={80} >
      <div className="Marquee__inner">
        <div className="anime__one">
          <img className="anime__one__img" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two__img" src={uy} alt="uy" />
          <img className="anime__two__img" src={uy} alt="uy" />
        </div>
        <div className="anime__one">
          <img className="anime__one__img" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two__img" src={uy} alt="uy" />
          <img className="anime__two__img" src={uy} alt="uy" />
        </div>
        <div className="anime__one">
          <img className="anime__one__img" src={uy} alt="uy" />
        </div>
        <div className="anime__two">
          <img className="anime__two__img" src={uy} alt="uy" />
          <img className="anime__two__img" src={uy} alt="uy" />
        </div>
      </div>
    </Marquee>
    </div>
  );
}

export default AutoPlay;
