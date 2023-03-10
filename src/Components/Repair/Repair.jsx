import React from "react";
import "./Repair.scss";

function Repair({isRepair}) {
  return (
    <div className="Repair__inner" style={{ height:isRepair ? "136px":"0px", marginBottom: isRepair ? "5px" : "0" }}>
      <div className="Repair__inner__div">
        <ul className="Repair__inner__list">
          <li className="Repair__inner__list__item">Средный</li>
          <li className="Repair__inner__list__item">Евро</li>
          <li className="Repair__inner__list__item">Люкс</li>
          <li className="Repair__inner__list__item">Без ремонт</li>
        </ul>
      </div>
      <ul className="Repair__inner__lists">
        <li className="Repair__inner__lists__items">Сортировать по:</li>
        <li className="Repair__inner__lists__items">Рекомендованное вам</li>
        <li className="Repair__inner__lists__items">Дешевые</li>
        <li className="Repair__inner__lists__items">Дорогие</li>
      </ul>
    </div>
  );
}

export default Repair;
