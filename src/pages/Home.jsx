import React from 'react'
import Banner from '../components/Banner'
import Jobs from '../components/Jobs'

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <div className='w-11/12 mx-auto'>
      <Jobs></Jobs>
      </div>
    </div>
  )
}
