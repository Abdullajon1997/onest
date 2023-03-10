import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from '../Home/Home';
import Account from '../Account/Account';
import Announcements from '../Announcements/Announcements';

function RoutesWrapper() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/accaunt' element={<Account/>}/>
      <Route path='/announcements' element={<Announcements/>}/>
    </Routes>

    </>
  )
}

export default RoutesWrapper