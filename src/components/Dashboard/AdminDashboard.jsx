import { useState } from "react";
import AllTasks from "../others/AllTasks";
import CreateTask from "../others/CreateTask";
import Header from "../others/Header";
import Search from "../others/Search";

const AdminDashboard = ({data, handleUser}) => {
  const [fltr, setFltr] = useState('')
  const [show, setShow] = useState('')
  
  const handleFltr = (value)  => {
    setFltr(value)    
  }

  return (
    <div className="text-white w-full p-5">
      <Header handleUser={handleUser} data={data} />
      <CreateTask />
      <Search handleFltr={handleFltr} />
      { fltr != '' && <AllTasks fltr={fltr} />}
    </div>
  );
};
export default AdminDashboard;