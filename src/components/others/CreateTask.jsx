import { useState } from "react"

const CreateTask = () => {
  const [title, setTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [empName, setEmpName] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(title + " " + taskDate + " " + empName + " " + category + " " + description )
    setTitle('')
    setTaskDate('')
    setEmpName('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className="bg-slate-900 p-7 rounded-xl">
        <form onSubmit={handleSubmit} className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 justify-evenly">
          <div className="w-full">
            <h3>Task Title</h3>
            <input type="text" placeholder="Enter the task" onChange={(e) => setTitle(e.target.value)} value={title} />            
            <h3>Date</h3>
            <input type="date" name="" id="" onChange={(e) => setTaskDate(e.target.value)} value={taskDate} />
            <h3>Assign to</h3>
            <input type="text" placeholder="Employee Name" onChange={(e) => setEmpName(e.target.value)} value={empName} />
            <h3>Category</h3>
            <input type="text" placeholder="design, coding, dev, etc" onChange={(e) => setCategory(e.target.value)} value={category} />
          </div>
          <div className="w-full flex flex-col">
            <h3>Description</h3>
            <textarea className="md:h-full" onChange={(e) => setDescription(e.target.value)} value={description} ></textarea >
            <button className="bg-green-400/50 w-full mt-4">Create Task</button>
          </div>
        </form>
      </div>
  )
}
export default CreateTask