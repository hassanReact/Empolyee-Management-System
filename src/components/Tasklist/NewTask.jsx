import React from 'react'

const NewTask = () => {
  return (
    <div className="flex-shrink-0 h-full w-[24%] p-5 bg-green-400 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 px-3 py-1 rounded-lg">High</h3>
      <h4>20 Feb 2024</h4>
    </div>
    <h2 className="text-2xl font-semibold mt-5">Make a YouTube Channel</h2>
    <p className="text-sm mt-4">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
      maiores corrupti eos pariatur nisi alias quae autem blanditiis amet
      soluta?
    </p>
    <div className='flex justify-center mt-20'>
      <button className='bg-emerald-500 rounded-lg py-1 px-2'>Accept Task</button>
    </div>
  </div>
  )
}

export default NewTask
