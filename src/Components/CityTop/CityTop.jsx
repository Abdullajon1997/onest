import React from "react";
import { useState} from "react";
import "./CityTop.scss";
import City from "../City/City";
import Price from "../Price/Price";
import Room from "../Room/Room";
import Size from "../Size/Size";
import Repair from '../Repair/Repair'
import Material from '../Material/Material'
import { margin } from "@mui/system";

function CityTop() {

  const [isVisible, setIsVisible] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isRoom, setIsRoom] = useState(false);
  const [isSize, setIsSize] = useState(false);
  const [isRepair, setIsRepair] = useState(false);
  const [isMaterial, setIsMaterial] = useState(false);

  const [isCityActive, setIsCityActive] = useState("");
  const [isCityActive1, setIsCityActive1] = useState("");
  const [isCityActive2, setIsCityActive2] = useState("");
  const [isCityActive3, setIsCityActive3] = useState("");
  const [isCityActive4, setIsCityActive4] = useState("");
  const [isCityActive5, setIsCityActive5] = useState("");


  const handleCity = (evt) => {
    setIsVisible(!isVisible);
    setIsCityActive(!isCityActive);
    setIsCityActive1(false);
    setIsCityActive2(false);
    setIsCityActive3(false);
    setIsCityActive4(false);
    setIsCityActive5(false);
    if (isPrice) {
      setIsPrice(!isPrice);

    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  };
  
  const priceVisible =() =>{
    setIsCityActive(false);
    setIsCityActive1(!isCityActive1)
    setIsCityActive2(false);
    setIsCityActive3(false);
    setIsCityActive4(false);
    setIsCityActive5(false);
    setIsPrice(!isPrice);
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }

  const handleRoom =()=>{
    setIsCityActive(false);
    setIsCityActive1(false);
    setIsCityActive2(!isCityActive2);
    setIsCityActive3(false);
    setIsCityActive4(false);
    setIsCityActive5(false);
    setIsRoom(!isRoom)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }

  const handleSize =()=>{
    setIsCityActive(false);
    setIsCityActive1(false);
    setIsCityActive2(false);
    setIsCityActive3(!isCityActive3);
    setIsCityActive4(false);
    setIsCityActive5(false);
    setIsSize(!isSize)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }
  const handleRepair =()=>{
    setIsCityActive(false);
    setIsCityActive1(false);
    setIsCityActive2(false);
    setIsCityActive3(false);
    setIsCityActive4(!isCityActive4);
    setIsCityActive5(false);
    setIsRepair(!isRepair)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isMaterial) {
      setIsMaterial(!isMaterial);
    }
  }
  const handleMaterial =()=>{
    setIsCityActive(false);
    setIsCityActive1(false);
    setIsCityActive2(false);
    setIsCityActive3(false);
    setIsCityActive4(false);
    setIsCityActive5(!isCityActive5);
    setIsMaterial(!isMaterial)
    if (isVisible) {
      setIsVisible(!isVisible);
    }
    if (isPrice) {
      setIsPrice(!isPrice);
    }
    if (isRoom) {
      setIsRoom(!isRoom);
    }
    if (isSize) {
      setIsSize(!isSize);
    }
    if (isRepair) {
      setIsRepair(!isRepair);
    }
  }
  const [isburgerMenu, setIsburgerMenu] = useState("");


  return (
    <div className="City__all" style={{width: isburgerMenu ? "742px " : "178px"}}>
      <div
        div
        className="City__out"
        style={{ height:isVisible ? "170px":"0px", marginBottom: isVisible ? "5px" : "0" }}
      >
        <div className="City__out__div">
        <ul className="City__out__list">
          <li className="City__out__list__item ">Ташкент</li>
          <li className="City__out__list__item">Андижон</li>
          <li className="City__out__list__item">Букхара</li>
          <li className="City__out__list__item">Фаргона</li>
          <li className="City__out__list__item">Джиззах</li>
          <li className="City__out__list__item">Хоразм</li>
          <li className="City__out__list__item">Навоий</li>
          <li className="City__out__list__item">Кашкадарё</li>
          <li className="City__out__list__item">Самарканд</li>
          <li className="City__out__list__item">Сирдарё</li>
          <li className="City__out__list__item">Сурхондарё</li>
          <li className="City__out__list__item">Тошкент вилояти</li>
        </ul>
        </div>
        <ul className="City__out__lists">
          <li className="City__out__lists__items">Сортировать по:</li>
          <li className="City__out__lists__items">Рекомендованное вам</li>
          <li className="City__out__lists__items">Дешевые</li>
          <li className="City__out__lists__items">Дорогие</li>
        </ul>
      </div>
      <Price isPrice={isPrice}/>
      <Room isRoom={isRoom}/>
      <Size isSize={isSize}/>
      <Repair isRepair={isRepair}/>
      <Material isMaterial={isMaterial}/>
      <City handleCity={handleCity} priceVisible={priceVisible} handleRoom={handleRoom} handleSize={handleSize} handleRepair={handleRepair} handleMaterial={handleMaterial} isCityActive={isCityActive} isCityActive1={isCityActive1} isCityActive2={isCityActive2} isCityActive3={isCityActive3} isCityActive4={isCityActive4} isCityActive5={isCityActive5} isburgerMenu={isburgerMenu} setIsburgerMenu={setIsburgerMenu}/>      
    </div>
  );
}

export default CityTop;
