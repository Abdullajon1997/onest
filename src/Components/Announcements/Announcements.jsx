import React from 'react'
import ListCard from '../ListCard/ListCard'
import Menu from "./Menu/Menu"
import MenuLeft from './MenuLeft/MenuLeft'
function Announcements() {
  return (
    <div>
        <Menu/>
        <div className='Announcements__inner__out container' >
        <MenuLeft/>
        <div>
        <ListCard/>
        <ListCard/>
        <ListCard/>
        </div>
        </div>
    </div>
  )
}

export default Announcements