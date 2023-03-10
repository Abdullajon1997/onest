import React from 'react'
import './OnestCard.scss'
import onestImg from '../../images/onestImg.png'
import icon from '../../images/Icon.png'
import Woman from '../../images/Woman.png'

function OnestCard({val,handleInput}) {
  return (
    <div className='OnestCard__inner'>
        <div className='OnestCard__inner__left'>
                <img className='OnestCard__inner__left__img' src={onestImg} alt="Logo" />
                <h2 className='OnestCard__inner__left__h2'>ONEST</h2>
                <img className='OnestCard__inner__left__images'
                value={val}
                onClick={handleInput}
                src={icon} alt="icon" />
            </div>
            <div className='OnestCard__inner__medium'>
                <h2 className='OnestCard__inner__medium__h2'>Назад</h2>
                <img className='OnestCard__inner__medium__img' src={Woman} alt="Woman" />
                <div>
                <p className='OnestCard__inner__medium__p'>Alla Pugachova</p>
                <span className='OnestCard__inner__medium__span'>Автор</span>
                </div>
            </div>
            <div className='OnestCard__inner__right'>
                <h2 className='OnestCard__inner__right__h2'>Показать телефон</h2>
            </div>
    </div>
  )
}

export default OnestCard