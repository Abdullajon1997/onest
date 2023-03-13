import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home';
import Account from '../Account/Account';
import Announcements from '../Announcements/Announcements';
import Second from '../Second/Second'

function RoutesWrapper() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/accaunt' element={<Account/>}/>
      <Route path='/announcements' element={<Announcements/>}/>
      <Route path='/Second/:id' element={<Second/>}/>
    </Routes>

    </>
  )
}

export default RoutesWrapper