import React from 'react'
import './Room.scss'

function Room({isRoom}) {
  return (
    <div className='Room__inner' style={{ height:isRoom ? "136px":"0px", marginBottom: isRoom ? "5px" : "0" }}>
        <div className='Room__inner__div'>
        <ul className='Room__inner__list'>
            <li className='Room__inner__list__item'>
                1
            </li>
            <li className='Room__inner__list__item'>
                2
            </li>
            <li className='Room__inner__list__item'>
                3
            </li>
            <li className='Room__inner__list__item'>
                4
            </li>
            <li className='Room__inner__list__item'>
                5
            </li>
            <li className='Room__inner__list__item'>
                6
            </li>
            <li className='Room__inner__list__item'>
                7
            </li>
            <li className='Room__inner__list__item'>
                8
            </li>
            <li className='Room__inner__list__item'>
                9
            </li>
            <li className='Room__inner__list__item'>
                10
            </li>
        </ul>
        </div>
        <ul className='Room__inner__lists'>
            <li className='Room__inner__lists__items'>Сортировать по:</li>
            <li className='Room__inner__lists__items'>Рекомендованное вам</li>
            <li className='Room__inner__lists__items'>Дешевые</li>
            <li className='Room__inner__lists__items'>Дорогие</li>
        </ul>
    </div>
  )
}

export default Room