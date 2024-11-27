import React from 'react'
import Header from '../../assets/Others/Header'
import TaskListNumbers from '../../assets/Others/TaskListNumbers'
import Tasklist from '../Tasklist/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div className='p-10 h-screen bg-[#1c1c1c]'>
      <Header Data={data}/>
      <TaskListNumbers Data={data}/>
      <Tasklist Data={data}/>
    </div>
  )
}

export default EmployeeDashboard
