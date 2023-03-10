import React from "react";
import { useState } from "react";
import "./Registration.scss";
import Google from "../../images/Google.png";
import Googles from "../../images/Googles.png";
import AccessIcon from "../../images/AccessIcon.png";
import Confirmation from "../Confirmation/Confirmation";

function Registration({isRegistion, setIsRegistion}) {

  const [isConfirmation, setIsConfirmation] = useState(false)
  const handleConfirmation =()=>{
    setIsConfirmation(!isConfirmation);

  }

  return (
    <div className="Registration__out" style={{display:isRegistion ? "block":'none'}}
    onClick={(e)=>{
      setIsRegistion(false)
    }}
    >
      <div className="Registration__inner" 
      onClick={(e)=>{
      e.stopPropagation()
    }}>
        <div className="Registration__inner__left">
          <h2 className="Registration__inner__left__h2">Приветствую</h2>
          <div className="Registration__inner__left__div">
            <img
              className="Registration__inner__left__img"
              src={AccessIcon}
              alt="Logo"
            />
            <div>
              <h2 className="Registration__inner__left__title">ONEST</h2>
              <p className="Registration__inner__left__p">
                Продажа недвижимости
              </p>
            </div>
          </div>
        </div>
        <div className="Registration__inner__right">
          <h2 className="Registration__inner__right__h2">Регистрация</h2>
          <form className="Registration__inner__right__form" action="">
            <label
              className="Registration__inner__right__form__label"
              htmlFor=""
            >
              Email или номер телефона
              <input
                className="Registration__inner__right__form__label__input"
                type="email"
                name=""
                id=""
                placeholder="Email или номер телефона"
              />
            </label>
            <button
              className="Registration__inner__right__form__btn"
              type="submit"
              onClick={handleConfirmation}
            >
              Далее
            </button>
          </form>
          <p className="Registration__inner__right__p" >
          У вас уже есть аккаунт? {" "} | 
            <span className="Registration__inner__right__p__span">
            {" "}
            Войти 
            </span>
          </p>
          <div className="Registration__inner__right__div">
            <img
              className="Registration__inner__right__div__img"
              src={Google}
              alt="Google"
            />
            <img
              className="Registration__inner__right__div__img"
              src={Googles}
              alt="Google"
            />
          </div>
        </div>
      </div>
      <Confirmation isConfirmation={isConfirmation} />
    </div>
  );
}

export default Registration;
