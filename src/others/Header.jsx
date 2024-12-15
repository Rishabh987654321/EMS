import React from 'react'

export const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello, <br /> <span className='text-3xl font-semibold'>Rishabh 👋</span></h1>
        <button className='bg-red-600 text-white px-5 py-2 rounded-sm text-lg font-medium '>Log Out</button>
    </div>
  )
}
