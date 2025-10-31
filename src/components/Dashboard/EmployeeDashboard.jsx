import Header from "../others/Header"
import TaskList from "../TasksList/TaskList"
import TaskListNumbers from "../TasksList/TaskListNumbers"

const EmployeeDashboard = ({data, handleUser}) => {
  return (
    <div className="text-white mt-10 p-4">            
      <Header handleUser={handleUser} data={data} />
      <TaskListNumbers data={data}/>
      <TaskList data={data}/>
    </div>
  )
}
export default EmployeeDashboard