import React from 'react'
import './Material.scss'

function Material({isMaterial}) {
  return (
    <div className='Material__inner' style={{ height:isMaterial ? "136px":"0px", marginBottom: isMaterial ? "5px" : "0" }}>
        <div className='Material__inner__div'>
        <ul className='Material__inner__list'>
            <li className='Material__inner__list__item'>Кирпич</li>
            <li className='Material__inner__list__item'>Бетон</li>
            <li className='Material__inner__list__item'>Деревянный</li>
        </ul>
        </div>
        <ul className='Material__inner__lists'>
            <li className='Material__inner__lists__items'>Сортировать по:</li>
            <li className='Material__inner__lists__items'>Рекомендованное вам</li>
            <li className='Material__inner__lists__items'>Дешевые</li>
            <li className='Material__inner__lists__items'>Дорогие</li>
        </ul>
    </div>
  )
}

export default Material