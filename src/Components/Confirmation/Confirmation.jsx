import React from 'react'
import './Confirmation.scss'
import Google from '../../images/Google.png'
import Googles from '../../images/Googles.png'
import AccessIcon from '../../images/AccessIcon.png'



function Confirmation({isConfirmation}) {
  return (
    <div className='Confirmation__out' style={{display: isConfirmation ? "block" : "none"}} >
        <div className="Confirmation__inner" 
      onClick={(e)=>{
      e.stopPropagation()
    }}>
        <div className="Confirmation__inner__left">
          <h2 className="Confirmation__inner__left__h2">Приветствую</h2>
          <div className="Confirmation__inner__left__div">
            <img
              className="Confirmation__inner__left__img"
              src={AccessIcon}
              alt="Logo"
            />
            <div>
              <h2 className="Confirmation__inner__left__title">ONEST</h2>
              <p className="Confirmation__inner__left__p">
                Продажа недвижимости
              </p>
            </div>
          </div>
        </div>
        <div className="Confirmation__inner__right">
          <h2 className="Confirmation__inner__right__h2">Подтверждение</h2>
          <form className="Confirmation__inner__right__form" action="">
            <label
              className="Confirmation__inner__right__form__label"
              htmlFor=""
            >
              Смс код
              <input
                className="Confirmation__inner__right__form__label__input"
                type="tel"
                name="tel"
                id="tel"
                placeholder="Email или номер телефона"
              />
            </label>
            <ul className='Confirmation__inner__right__form__list'>Повторить попытку:
              <li className='Confirmation__inner__right__form__list__item'>59</li>
            </ul>
            <button
              className="Confirmation__inner__right__form__btn"
              type="submit"
            >
              Далее
            </button>
          </form>
          <p className="Confirmation__inner__right__p">
          У вас уже есть аккаунт? {" "} | 
            <span className="Registration__inner__right__p__span">
            {" "}
            Войти 
            </span>
          </p>
          <div className="Confirmation__inner__right__div">
            <img
              className="Confirmation__inner__right__div__img"
              src={Google}
              alt="Google"
            />
            <img
              className="Confirmation__inner__right__div__img"
              src={Googles}
              alt="Google"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Confirmation