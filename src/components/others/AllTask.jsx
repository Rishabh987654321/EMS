import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

export const AllTask = () => {
  const authData = useContext(AuthContext);
  console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 mt-5 rounded">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded ">
        <h2 className="w-1/5 text-lg font-medium ">Employee Name</h2>
        <h3 className="w-1/5 text-lg font-medium">New Task</h3>
        <h5 className="w-1/5 text-lg font-medium">Active Task</h5>
        <h5 className="w-1/5 text-lg font-medium">Completed</h5>
        <h5 className="w-1/5 text-lg font-medium">Failed</h5>
      </div>
      <div id="allTask">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-emerald-500 border-2 mb-2 py-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{elem.taskStats.new_task}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellowtext-lg fonte-medium -400">
                {elem.taskStats.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-white-600">
                {elem.taskStats.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{elem.taskStats.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};