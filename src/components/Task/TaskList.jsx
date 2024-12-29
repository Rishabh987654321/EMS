import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import FailedTask from './FailedTask'

export const TaskList = ({data}) => {
    // console.log(data)
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap mt-10 w-full py-5'>
        {/* <AcceptTask/>
        <NewTask/>
        <CompletetTask/>
        <FailedTask/> */}

        {data.tasks.map((ele,idx)=>{
            // console.log(ele)
            if(ele.active){
                return <AcceptTask key={idx} data={ele}/>
            }
            if(ele.new_task){
                return <NewTask key={idx} data={ele}/>
            }
            if(ele.completed){
                return <CompletedTask key={idx} data={ele}/>
            }
            if(ele.failed){
                return <FailedTask key={idx} data={ele}/>
            }
        })}
        
    </div>
  )
}
