import React from "react";
import "./Header.scss";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Header-Logo.png";
import searchImg from "../../images/search.png";
import usd from "../../images/usd.png";
import plus from "../../images/plus.png";
import user from "../../images/user.png";
import Recent from "../Recent/Recent";
import ToEnter from "../ToEnter/ToEnter";

function Header() {
  const divForm = useRef();
  const rec = useRef();
  const lab = useRef();
  const [val, setVal] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleInput = (evt) => {
    setVal(evt.target.value);
    if (evt.target.value) {
      setIsVisible(true);
      rec.current.style.transition = "all .9s ease-in";
    } 
    else {
      rec.current.style.border='6px solid transparent '
      setIsVisible(false);
    }
  };

  const [access, setAccess] = useState(false);
  const handleAccess = () => {
    setAccess(!access);
  };
  return (
    <>
      <div className="header__logo">
        <div className="header__div">
              <img className="header__inner__logo" src={Logo} alt="Logo" />
        </div>
        <header className="header ">
          <div className="header__inner">
            <div className={isVisible ? "header__animate" : "header__inner__div"} ref={divForm}>
            <div>
            <form className="header__inner__form" >
              <label className="header__inner__form__labbel" ref={lab}>
                <img
                  className="header__inner__form__labbel__img"
                  src={searchImg}
                  alt="Search"
                />
                <input
                  className="header__inner__form__labbel__input"
                  type="search"
                  placeholder="Поиск домов"
                  value={val}
                  onChange={handleInput}
                />
              </label>
            </form>
            </div>
                <Recent isVisible={isVisible} currentRef={rec} />
            </div>
            <ul className="header__inner__list">
              <li className="header__inner__list__item">
                Как разместить объект?
              </li>
              <li className="header__inner__list__item">О проекте</li>
              <li className="header__inner__list__item">
                <svg
                  width={15}
                  height={21}
                  viewBox="0 0 15 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.75 14C1.59393 14.733 2.58187 15.2814 3.65035 15.61C4.71882 15.9385 5.8442 16.0399 6.95419 15.9076C8.06418 15.7754 9.13423 15.4124 10.0956 14.842C11.057 14.2716 11.8884 13.5065 12.5365 12.5957C13.1845 11.6849 13.6349 10.6486 13.8587 9.55334C14.0825 8.45813 14.0747 7.32822 13.8358 6.2362C13.5969 5.14418 13.1323 4.1142 12.4717 3.21243C11.8111 2.31066 10.9692 1.55705 10 1M6 16V20M2 20H10M10 8C10 10.2091 8.20914 12 6 12C3.79086 12 2 10.2091 2 8C2 5.79086 3.79086 4 6 4C8.20914 4 10 5.79086 10 8Z"
                    stroke="#121212"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Язык
              </li>
              <li className="header__inner__list__item">
                <img src={usd} alt="USD" />
                <select name="USD" id="USD">
                  <option value="USD">USD</option>
                </select>
              </li>
              <li className="header__inner__list__item">
                <Link to="/announcements" className="header__inner__list__item__link">
                <img
                  className="header__inner__list__item__plus"
                  src={plus}
                  alt="PLUS"
                />
                Добавить объект
                </Link>
              </li>
              <li className="header__inner__list__item">
                <Link to="/accaunt" className="header__inner__list__item__links">
                  <img src={user} alt="USER" />
                </Link>
                <span onClick={handleAccess}>Войти</span>
              </li>
            </ul>
          </div>
        </header>
        <div className="header__div">
          <img className="header__inner__logo" src={Logo} alt="Logo" />
        </div>
        <ToEnter access={access} setAccess={setAccess} />
      </div>
    </>
  );
}

export default Header;
