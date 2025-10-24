const TaskListNumbers = ({data}) => {
  return (
    <div className='flex flex-wrap md:flex-nowrap gap-3 justify-between text-slate-200'>
      <div className='taskBox bg-blue-400'>
        <h2 className="text-5xl font-medium">{data.taskCount.newTask}</h2>
        <h3 className="text-3xl">New Task</h3>
      </div>
      <div className='taskBox bg-green-400 '>
        <h2 className="text-5xl font-medium">{data.taskCount.completed}</h2>
        <h3 className="text-3xl">Completed</h3>
      </div>
      <div className='taskBox bg-yellow-400'>
        <h2 className="text-5xl font-medium">{data.taskCount.active}</h2>
        <h3 className="text-3xl">Active Task</h3>
      </div>
      <div className='taskBox bg-red-400'>
        <h2 className="text-5xl font-medium">{data.taskCount.failed}</h2>
        <h3 className="text-3xl">Failed Task</h3>
      </div>
    </div>
  )
}

export default TaskListNumbers
