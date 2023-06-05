/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'


import Footer from '../pages/Shared/Footer/Footer'
import NavBar from '../pages/Shared/NavBar/NavBar'

const Main = () => {
  const location = useLocation()
  const isLogin = location.pathname.includes('login')

  return (
    <div>
     {isLogin || <NavBar/>}
      <Outlet />
      {isLogin|| <Footer/>}
    </div>
  )
}

export default Main
