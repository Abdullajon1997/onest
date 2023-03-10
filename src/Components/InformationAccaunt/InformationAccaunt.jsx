import "./InformationAccaunt.scss";
import { boxSizing } from "@mui/system";
import AccountCenter from "./AccountCenter/AccountCenter";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement } from "chart.js";
ChartJS.register(
  Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement
)

function InformationAccaunt() {
  const [data, setData] = useState({
  labels: ['','','','','','','','','','','','','',''],
  datasets: [
    {
      label: '',
      data: [10,30,40,60,51,52,89,126,124,51,52,89,126,124],
      BackgroundColor: 'yellow',
      borderColor: '#FF0000',
      tension: 0.2,
      fill: false
    }
  ]
})


  return (
    <div className="InformationAccaunt__wrapper">
      <AccountCenter/>
      <div className="InformationAccaunt__wrapper__left">
        <div className="InformationAccaunt__wrapper__left__div">
        <p className="InformationAccaunt__wrapper__left__p">
          Статистика конверсий при продвижении объявления
        </p>
        </div>
        <ul className="InformationAccaunt__wrapper__left__list">
          <li className="InformationAccaunt__wrapper__left__list__item">
            Просмотры
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Избранные
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Лайки
          </li>
          <li className="InformationAccaunt__wrapper__left__list__item">
            Поделится
          </li>
        </ul>
        <Line data={data} ></Line>
        
      </div>
    </div>
  );
}

export default InformationAccaunt;
