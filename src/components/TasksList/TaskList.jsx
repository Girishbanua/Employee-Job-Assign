import ActiveTask from "./ActiveTask";
import CompletedTask from "./CompletedTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({ data }) => {
  const tasks = data.tasks;
  return (
    <div id="tasklist" className="h-[45vh] mt-10 rounded-2xl flex items-start gap-5 overflow-x-scroll" >                     
        {tasks.map((task, id) => {
              if(task.active){
              return <ActiveTask task={task} key={id} />
              }
              if(task.newTask){
              return <NewTask task={task} key={id} />
              }
              if(task.completed){
              return <CompletedTask task={task} key={id}/>
              }
              if(task.failed){
              return <FailedTask task={task}  key={id}/>  
              }
          }
        )
      }   
    </div>
  );
};

export default TaskList;
