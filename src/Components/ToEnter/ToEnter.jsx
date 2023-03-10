import React, {useState } from "react";
import "./ToEnter.scss";
import AccessIcon from "../../images/AccessIcon.png";
import Google from "../../images/Google.png";
import Googles from "../../images/Googles.png";
import Registration from '../Registration/Registration'

function ToEnter({ access, setAccess, setIsConfirmation}) {
  console.log(access);
  
  const [isRegistion, setIsRegistion] = useState(false)
  const handleisRegistion =()=>{
    setIsRegistion(!isRegistion);
    setIsConfirmation(false);
  }
  return (
    <div className="wrapper"
    onClick={()=>{
      setAccess(false)
    }}
     style={{ display: access ? "block" : "none" }}>
      <div className="ToEnter__inner" onClick={(e)=>{
        e.stopPropagation()
      }}>
        <div className="ToEnter__inner__left">
          <h2 className="ToEnter__inner__left__h2">Приветствую</h2>
          <div className="ToEnter__inner__left__div">
            <img
              className="ToEnter__inner__left__img"
              src={AccessIcon}
              alt="Logo"
            />
            <div>
              <h2 className="ToEnter__inner__left__title">ONEST</h2>
              <p className="ToEnter__inner__left__p">Продажа недвижимости</p>
            </div>
          </div>
        </div>
        <div className="ToEnter__inner__right">
          <h2 className="ToEnter__inner__right__h2">Войти</h2>
          <form className="ToEnter__inner__right__form" action="">
            <label className="ToEnter__inner__right__form__label" htmlFor="">
              Email или номер телефона
              <input
                className="ToEnter__inner__right__form__label__input"
                type="email"
                name=""
                id=""
                placeholder="Email или номер телефона"
              />
            </label>
            <label className="ToEnter__inner__right__form__label" htmlFor="">
              Пароль
              <input
                className="ToEnter__inner__right__form__label__input"
                type="password"
                name=""
                id=""
                placeholder="Пароль"
              />
            </label>
            <button className="ToEnter__inner__right__form__btn" type="submit">
              Войти
            </button>
          </form>
          <p className="ToEnter__inner__right__p"onClick={handleisRegistion} >
            Забыли пароль? |{" "}
            <span className="ToEnter__inner__right__p__span"  >
              {" "}
              Зарегистрироватся
            </span>
          </p>
          <div className="ToEnter__inner__right__div">
            <img
              className="ToEnter__inner__right__div__img"
              src={Google}
              alt="Google"
            />
            <img
              className="ToEnter__inner__right__div__img"
              src={Googles}
              alt="Google"
            />
          </div>
        </div>
      </div>
      <Registration isRegistion={isRegistion} setIsRegistion={setIsRegistion} setIsConfirmation={setIsConfirmation}/>
    </div>
  );
}

export default ToEnter;
