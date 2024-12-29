import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

export const Header = ({data}) => {
  // console.log(data);

  
  const logout=()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Hello,  👋</span></h1>
        <button onClick={logout} className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium '>Log Out</button>
    </div>
  )
}
