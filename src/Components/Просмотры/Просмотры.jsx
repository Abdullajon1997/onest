import React from "react";
import "./Просмотры.scss";
import topImg from "../../images/topImg.png";

function Просмотры() {
  return (
    <div className="Поиск">
      <div className="Поиск__inner">
        <h2 className="Поиск__inner__h2">топ</h2>
        <img className="Поиск__inner__img" src={topImg} alt="Просмотры" />
        <div className="Поиск__inner__card">
          <p className="Поиск__inner__card__p1">г.Ташкент, М.Улугбеск...</p>
          <p className="Поиск__inner__card__p2">120 кв</p>
        </div>
        <span className="Поиск__inner__span">$63.000</span>
      </div>
    </div>
  );
}

export default Просмотры;
