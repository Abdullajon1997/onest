import React from "react";
import AuotoPlay from "../AutoPlay/AutoPlay";
import Ellipse from "../../images/Ellipse.png";
import LogoFrame from "../../images/logo__frame.png";
import "./Mold.scss";

function Mold() {
  return (
    <div className="mold">
      <div className="frame__container">
        <div className="mold__inner">
          <div className="mold__inner__address">
            <div className="mold__inner__address__left">
              <img
                className="mold__inner__address__left__img"
                frammes
                src={Ellipse}
                alt="Ellipse"
              />
              <img
                className="mold__inner__address__left__images"
                src={LogoFrame}
                alt="Frame"
              />
              <h2 className="mold__inner__address__left__h2">
                Пересечении ул.Тимур Малика и Дурмон йули.
              </h2>
            </div>
            <ul className="mold__inner__address__list">
              <li className="mold__inner__address__list__item">
                6 400 000 / кв
              </li>
              <li className="mold__inner__address__list__item">
                <svg
                  width="18.01"
                  height="16.01"
                  viewBox="0 0 21 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.5001 10.572L11.0001 18L3.50006 10.572C3.00536 10.0906 2.6157 9.51201 2.3556 8.87263C2.09551 8.23325 1.97062 7.54694 1.98879 6.85693C2.00697 6.16691 2.16782 5.48813 2.46121 4.86333C2.75461 4.23853 3.17419 3.68125 3.69354 3.22657C4.21289 2.7719 4.82076 2.42968 5.47887 2.22147C6.13697 2.01327 6.83106 1.94358 7.51743 2.0168C8.20379 2.09001 8.86756 2.30455 9.46693 2.6469C10.0663 2.98925 10.5883 3.45199 11.0001 4.00599C11.4136 3.45602 11.9362 2.99731 12.5352 2.6586C13.1341 2.31988 13.7966 2.10844 14.481 2.03751C15.1654 1.96658 15.8571 2.03769 16.5128 2.24639C17.1685 2.45508 17.7741 2.79687 18.2916 3.25036C18.8091 3.70385 19.2275 4.25928 19.5205 4.88189C19.8135 5.50449 19.9748 6.18088 19.9944 6.8687C20.0139 7.55653 19.8913 8.24099 19.6342 8.87924C19.3771 9.5175 18.991 10.0958 18.5001 10.578"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  />
                </svg>
                В избранные
              </li>
              <li className="mold__inner__address__list__item">
                <svg
                  width={18}
                  height={18}
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.70001 8.69999L13.3 5.29999M6.70001 11.3L13.3 14.7M7 10C7 11.6569 5.65685 13 4 13C2.34315 13 1 11.6569 1 10C1 8.34315 2.34315 7 4 7C5.65685 7 7 8.34315 7 10ZM19 4C19 5.65685 17.6569 7 16 7C14.3431 7 13 5.65685 13 4C13 2.34315 14.3431 1 16 1C17.6569 1 19 2.34315 19 4ZM19 16C19 17.6569 17.6569 19 16 19C14.3431 19 13 17.6569 13 16C13 14.3431 14.3431 13 16 13C17.6569 13 19 14.3431 19 16Z"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap={"round"}
                    strokeLinejoin={"round"}
                  />
                </svg>
                В избранные
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <AuotoPlay/> */}
    </div>
  );
}

export default Mold;
