import React from 'react'
import './Size.scss'

function Size({isSize}) {
  return (
    <div className='Size__inner' style={{ height:isSize ? "136px":"0px", marginBottom: isSize ? "5px" : "0" }}>
        <div className='Size__inner__div'>
        <ul className='Size__inner__list'>
            <li className='Size__inner__list__item'>20-30</li>
            <li className='Size__inner__list__item'>30-40</li>
            <li className='Size__inner__list__item'>35-50</li>
            <li className='Size__inner__list__item'>50-65</li>
            <li className='Size__inner__list__item'>65-80</li>
            <li className='Size__inner__list__item'>80-90</li>
            <li className='Size__inner__list__item'>90-100</li>
            <li className='Size__inner__list__item'>100-</li>
        </ul>
        </div>
        <ul className="Size__inner__lists">
            <l className="Size__inner__lists__items">Сортировать по:</l>
            <l className="Size__inner__lists__items">Рекомендованное вам</l>
            <l className="Size__inner__lists__items">Дешевые</l>
            <l className="Size__inner__lists__items">Дорогие</l>
        </ul>
    </div>
  )
}

export default Size