import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 screen justify-between gap-5'>
        <div className='w-[45%] bg-red-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskStats.new_task}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='w-[45%] bg-blue-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskStats.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className='w-[45%] bg-green-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskStats.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div>
        <div className='w-[45%] bg-yellow-400 py-6 px-9 rounded-xl'>
            <h2 className='text-3xl font-semibold'>{data.taskStats.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers