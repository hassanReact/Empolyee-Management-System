import React from 'react'


const Header = ({Data}) => {
  // console.log(Data.tasks.active)
  return (
    <div className='flex justify-between items-end'>
            <h1 className='text-2xl font-medium'>Hello,<br /><span className='text-3xl font-semibold'>{Data.firstName} 👏</span> </h1>
            <button className='bg-red-600 px-4 py-2 rounded-lg'>Log Out</button> 
    </div>
  )
}

export default Header
