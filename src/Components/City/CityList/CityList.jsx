import React from 'react'
import './CityList.scss'
import { useState } from 'react'

function CityList({
  isCityActive, isCityActive1,
  isCityActive2, isCityActive3,
  isCityActive4, isCityActive5,
  handleCity, priceVisible,
  handleRoom, handleSize, 
  handleRepair, handleMaterial, 
  isApartment, Apartment}) {
  return (
    <ul className="CityList__list" style={{display: isApartment ? "flex" : "none"}}>
          <li className="CityList__list__item" onClick={Apartment}>
            <svg
              width={12}
              height={10}
              viewBox="0 0 12 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3334 1H6.66675M11.3334 5H5.33341M11.3334 9H6.66675M3.33341 2.33333L0.666748 5L3.33341 7.66667"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Назад
          </li>
          <li className={`${isCityActive ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => handleCity()} >
            Город</li>
          <li className={`${isCityActive1 ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => priceVisible()}>
            Цена</li>
          <li className={`${isCityActive2 ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => handleRoom()}>
            Комната</li>
          <li className={`${isCityActive3 ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => handleSize()}>
            Кв/метр</li>
          <li className={`${isCityActive4 ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => handleRepair()}>
            Ремонт</li>
          <li className={`${isCityActive5 ? "City__inner__list__item__active" : "CityList__list__item"}`} onClick={() => handleMaterial()}>
            Материал</li>
        </ul>
  )
}

export default CityList