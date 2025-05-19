import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../shared/Nav'
import Footer from '../shared/Footer'

export default function MainLayout() {
  return (
    <div>
        <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
