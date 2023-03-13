import React from "react";
import "./City.scss";
import logo from "../../images/onestImg.png";
import Icon from "../../images/Icon.png";
import AllList from "./AllList/AllList";
import CityList from "./CityList/CityList";
import { useState } from "react";

function City({ handleCity, priceVisible,
  handleRoom, handleSize, handleRepair,
  handleMaterial,isCityActive,isCityActive1,
  isCityActive2,isCityActive3,
  isCityActive4,isCityActive5 }) {

    const [isApartment, setIsApartment] = useState(false);
    const [isburgerMenu, setIsburgerMenu] = useState("");

    const Apartment =()=>{
      setIsApartment(!isApartment)
    }
    const handleBurgerMenu=()=>{
      if(!isburgerMenu){
        setIsburgerMenu(true);
      }
      else{
        setIsburgerMenu(false);
      }
    }
  return (
    <>
      <div className="City__inner">
        <div className="City__inner__one">
          <img className="City__inner__one__img" src={logo} alt="logo" />
          <h2 className="City__inner__one__h2">ONEST</h2>
          <img className="City__inner__one__images" src={Icon} alt="Icon" onClick={handleBurgerMenu} />
        </div>
        <CityList isCityActive={isCityActive} isCityActive1={isCityActive1} isCityActive2={isCityActive2} isCityActive3={isCityActive3} isCityActive4={isCityActive4}isCityActive5={isCityActive5} handleCity={handleCity} priceVisible={priceVisible} handleRoom={handleRoom} handleSize={handleSize} handleRepair={handleRepair} handleMaterial={handleMaterial} isApartment={isApartment} Apartment={Apartment} isburgerMenu={isburgerMenu} />
        <AllList Apartment={Apartment} isApartment={isApartment} isburgerMenu={isburgerMenu} />
      </div>
    </>
  );
}

export default City;
