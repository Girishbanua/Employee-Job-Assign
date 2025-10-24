const ActiveTask = ({ task }) => {
  return (
    <div className=" taskList p-3 bg-orange-400">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="bg-red-500 text-sm p-2 rounded-xl">{task.category}</h3>
          <h4>{task.taskDate}</h4>
        </div>
        <h2 className=" mt-3 mb-2 text-xl font-bold">{task.taskTitle}</h2>
        <p className="text-sm">{task.taskDescription}</p>
      </div>
      <div>
        <button className="bg-green-500">Mark as Completed</button>
        <button className="bg-red-500">Mark as failed</button>
      </div>
    </div>
  );
};

export default ActiveTask;
