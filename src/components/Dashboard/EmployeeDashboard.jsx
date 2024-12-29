import React from 'react'
import { Header } from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import { TaskList } from '../Task/TaskList'

export const EmployeeDashboard = ({data}) => {
    console.log(data);
    
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
    </div>
  )
}
