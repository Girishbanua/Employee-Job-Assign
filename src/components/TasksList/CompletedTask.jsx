import React from "react";

const CompletedTask = ({task}) => {
  return (
    <div className=" taskList p-3 bg-green-400">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-red-500 text-sm p-2 rounded-xl">{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2 className=" mt-3 mb-2 text-xl font-bold">{task.taskTitle}</h2>
        <p className="text-sm">{task.taskDescription}</p>
      </div>
      <div>
        <button className="bg-green-600">Completed</button>        
      </div>
    </div>
  );
};

export default CompletedTask;
