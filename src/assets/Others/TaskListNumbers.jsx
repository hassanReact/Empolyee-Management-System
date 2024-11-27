import React from 'react'

const TaskListNumbers = ({Data}) => {
  // console.log()
  return (
    <div className='flex flex-wrap md:flex-nowrap mt-10 justify-between gap-5 screen '>
      <div className="w-[45%] p-10 rounded-2xl py-6 px-9 bg-red-400">
      <h1 className='flex flex-wrap text-3xl font-semibold'>{Data.taskCounts.newTask}</h1>
      <h2 className='flex text-2xl font-medium'>New Task</h2>
      </div>
      <div className="w-[45%] p-10 rounded-2xl py-6 px-9 bg-green-400">
      <h1 className='flex flex-wrap text-3xl font-semibold'>{Data.taskCounts.completed}</h1>
      <h2 className='flex text-2xl  font-medium'>Completed Task</h2>
      </div>
      <div className="w-[45%] p-10 rounded-2xl py-6 px-9 bg-yellow-400">
      <h1 className='flex flex-wrap text-3xl font-semibold'>{Data.taskCounts.active}</h1>
      <h2 className='flex text-2xl font-medium'>Accepted Task</h2>
      </div>
      <div className="w-[45%] p-10 rounded-2xl py-6 px-9 bg-blue-400">
      <h1 className='flex flex-wrap text-3xl font-semibold'>{Data.taskCounts.failed}</h1>
      <h2 className='flex  text-2xl font-medium'>Failed Task</h2>
      </div>
    </div>
  )
}

export default TaskListNumbers
