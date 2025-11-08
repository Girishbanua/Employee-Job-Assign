import { useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [empName, setEmpName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("employees")) || [];

    // Find the employee
    const smalletter = empName.toLowerCase();
    const upperletter = empName.toUpperCase();
    const firstname = empName.split(" ")[0].toLowerCase();

    let taskAssigned = false;

    const updatedData = data.map((elm) => {
      if (
        smalletter === elm.name.toLowerCase() ||
        upperletter === elm.name.toUpperCase() ||
        empName === elm.name ||
        firstname === elm.name.split(" ")[0].toLowerCase()
      ) {
        const taskNumber = elm.tasks.length + 1;

        const newTask = {
          id: Date.now(), // unique id
          taskNumber,
          active: false,
          newTask: true,
          completed: false,
          failed: false,
          title,
          taskDate,
          category,
          taskDescription: description,
        };

        elm.tasks.push(newTask);
        elm.taskCount.newTask += 1;
        taskAssigned = true;
      }
      return elm;
    });

    if (taskAssigned) {
      localStorage.setItem("employees", JSON.stringify(updatedData));
      alert("✅ Task created successfully!");
    } else {
      alert("⚠️ Employee not found!");
    }

    // Reset form fields
    setTitle("");
    setTaskDate("");
    setEmpName("");
    setCategory("");
    setDescription("");
  };

  return (
    <div className="bg-slate-900 p-7 rounded-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-wrap md:flex-nowrap gap-10 md:gap-20 justify-evenly"
      >
        <div className="w-full">
          <h3>New Title</h3>
          <input
            type="text"
            placeholder="Enter the task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <h3>Date</h3>
          <input
            type="date"
            onChange={(e) => setTaskDate(e.target.value)}
            value={taskDate}
          />
          <h3>Assign to</h3>
          <input
            type="text"
            placeholder="Employee Name"
            onChange={(e) => setEmpName(e.target.value)}
            value={empName}
          />
          <h3>Category</h3>
          <input
            type="text"
            placeholder="design, coding, dev, etc"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          />
        </div>

        <div className="w-full flex flex-col">
          <h3>Description</h3>
          <textarea
            className="md:h-full"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
          <button
            type="submit"
            className="bg-green-400/50 w-full mt-4 rounded-lg py-2 hover:bg-green-400/70"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
