import React from 'react'
import './AllList.scss'

function AllList({Apartment, isApartment,isburgerMenu }) {
  return (
        <div style={{display: isburgerMenu ? "block" : "none",width: isburgerMenu ? "583px" : "0"}}>
          <ul className='AllList__list' style={{display: isApartment ? "none" : "flex" }}>
            <li className='AllList__list__item'>Все</li>
            <li className='AllList__list__item' onClick={Apartment}>Квартира</li>
            <li className='AllList__list__item'>Частный дом</li>
            <li className='AllList__list__item'>Коммерческая</li>
            <li className='AllList__list__item'>Земельные участки</li>
        </ul>
        </div>
  )
}

export default AllList