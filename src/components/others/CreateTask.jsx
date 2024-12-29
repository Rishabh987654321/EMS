// import React, { useState } from 'react'

// const CreateTask = () => {

//   const [taskTitle, setTaskTitle] = useState('')
//   const [taskDescription,setTaskDescription]=useState('')
//   const [taskDate,setTaskDate]=useState('')
//   const [assignTo,setAssignTo]=useState('')
//   const [category,setCategory]=useState('')

//   const [newTask, setNewTask]=useState({})

//   const submitHandler=(e)=>{
//     e.preventDefault()
//     // console.log(taskTitle,taskDescription,taskDate,assignTo,category)

//     setNewTask({taskTitle,taskDescription,taskDate,category,active:false,newTask:true,failed:false,completed:false})
//     // console.log(task)

//     const data=JSON.parse(localStorage.getItem('employees'))
//     // console.log((data))

//     data.forEach((elem)=>{
//       // console.log(elem.firstname)
//       if(assignTo===elem.firstname){
//         elem.tasks.push(newTask)
//         console.log(elem)

//       }
//     })
//     localStorage.setItem('employees',JSON.stringify (data))
//     setTaskTitle("");
//     setTaskDescription("");
//     setTaskDate("");
//     setAssignTo("");
//     setCategory("");
    

//   }

//   return (
//     <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
//         <form
//         onSubmit={(e)=>{
//           submitHandler(e)
//         }}
//         className="flex w-full flex-wrap items-start justify-between">

//           <div className="w-1/2">
//             <div>
//               <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
//               <input
//                 value={taskTitle}
//                 onChange={(e)=>{
//                   setTaskTitle(e.target.value)
//                 }}
//                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//                 type="text"
//                 placeholder="Make a UI design"
//               />
//             </div>
//             <div>
//               <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
//               <input
//                 value={taskDate}
//                 onChange={(e)=>{
//                   setTaskDate(e.target.value)
//                 }}
//                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//                 type="date"
//               />
//             </div>
//             <div>
//               <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
//               <input
//                 value={assignTo}
//                 onChange={(e)=>{
//                   setAssignTo(e.target.value)
//                 }}
//                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//                 type="text"
//                 placeholder="Employee name"
//               />
//             </div>
//             <div>
//               <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
//               <input
//                 value={category}
//                 onChange={(e)=>{
//                   setCategory(e.target.value)
//                 }}
//                 className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
//                 type="text"
//                 placeholder="Design, Dev, etc"
//               />
//             </div>
//           </div>
//           <div className="w-2/5 flex flex-col items-start">
//             <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
//             <textarea
//               value={taskDescription}
//               onChange={(e)=>{
//                 setTaskDescription(e.target.value)
//               }}
//               className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
//               name=""
//               id=""
//               cols="30"
//               rows="10"
//             ></textarea>
//             <button className="w-full mt-4 text-sm rounded px-5 py-3 bg-emerald-500 hover:bg-emerald-600">
//               Create Task
//             </button>
//           </div>
//         </form>
//       </div>
//   )
// }

// export default CreateTask



import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [assignTo, setAssignTo] = useState("");
  const [category, setCategory] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Validation: Ensure all fields are filled
    if (!taskTitle || !taskDescription || !taskDate || !assignTo || !category) {
      alert("Please fill all the fields before creating the task.");
      return;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      task_date: taskDate,
      category,
      active: false,
      new_task: true,
      failed: true,
      completed: false,
    };

    // Retrieve data from localStorage
    const data = JSON.parse(localStorage.getItem("employees"));

    if (!data) {
      alert("No employee data found in localStorage.");
      return;
    }

    // Assign task to the specified employee
    let employeeFound = false;
    const updatedData = data.map((elem) => {
      if (elem.firstname === assignTo) {
        employeeFound = true;
        return {
          ...elem,
          tasks: [...elem.tasks, newTask],
          taskStats: {
            ...elem.taskStats,
            new_task: elem.taskStats.new_task + 1,
          },
        };
      }
      return elem;
    });

    if (!employeeFound) {
      alert(`Employee ${assignTo} not found.`);
      return;
    }

    // Save updated data back to localStorage
    localStorage.setItem("employees", JSON.stringify(updatedData));

    // Clear form inputs
    setTaskTitle("");
    setTaskDescription("");
    setTaskDate("");
    setAssignTo("");
    setCategory("");

    alert("Task successfully created and assigned!");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
      <form
        onSubmit={submitHandler}
        className="flex w-full flex-wrap items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Design, Dev, etc"
            />
          </div>
        </div>
        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            cols="30"
            rows="10"
            placeholder="Enter task details"
          ></textarea>
          <button className="w-full mt-4 text-sm rounded px-5 py-3 bg-emerald-500 hover:bg-emerald-600">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
  