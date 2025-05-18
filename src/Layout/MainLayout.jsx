import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../shared/Nav'

export default function MainLayout() {
  return (
    <div>
        <Nav></Nav>
      <Outlet></Outlet>
    </div>
  )
}
