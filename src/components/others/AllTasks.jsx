import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = ({ fltr }) => {
  const authData = useContext(AuthContext);
  const empData = authData.employees;

  return (
    <div className="bg-slate-800 mt-15 p-5 rounded-xl">
    
      {(fltr === "pending" || fltr === "all")  && (
        <div className="pending mt-10">
          <h1 className="bg-pink-400/30 mb-5">Pending</h1>
          {empData.map((elm, id) => {
            const pending = elm.tasks.filter(
              (el) => el.active === true || el.newTask === true
            );
            return (
              <div
                key={id}
                className="mb-6 flex items-center gap-10 bg-slate-500/30 p-3 rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-2">{elm.name}</h2>
                {pending.length > 0 ? (
                  pending.map((task, idx) => (
                    <div
                      key={idx}
                      className="bg-pink-500/30 p-3 rounded-xl mb-2 w-1/4"
                    >
                      <h3>Task Number {task.taskNumber}</h3>
                      <h2>{task.taskTitle}</h2>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">0 failed tasks</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(fltr === "completed" || fltr === "all") && (
        <div className="completed mt-20">
          <h1 className="text-3xl font-bold bg-green-500/50 p-3 rounded my-3">
            Completed
          </h1>
          {empData.map((elm, id) => {
            const completed = elm.tasks.filter((el) => el.completed === true);
            return (
              <div
                key={id}
                className="mb-6 flex items-center gap-10 bg-slate-500/30 p-3 rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-2">{elm.name}</h2>

                {completed.length > 0 ? (
                  completed.map((task, idx) => (
                    <div
                      key={idx}
                      className="bg-green-500/50 p-3 rounded-xl mb-2 w-1/4"
                    >
                      <h3>Task Number {task.taskNumber}</h3>
                      <h2>{task.taskTitle}</h2>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">0 task completed</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(fltr === "failed" || fltr === "all") && (
        <div className="failed mt-20">
          <h1 className="text-3xl font-bold mb-4 bg-red-500/50 p-3 rounded">
            Failed Tasks
          </h1>

          {empData.map((emp, id) => {
            // Filter failed tasks for this employee
            const failedTasks = emp.tasks.filter(
              (task) => task.failed === true
            );

            return (
              <div
                key={id}
                className="mb-6 flex items-center gap-10 bg-slate-500/30 p-3 rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-2">{emp.name}</h2>

                {failedTasks.length > 0 ? (
                  failedTasks.map((task, idx) => (
                    <div
                      key={idx}
                      className="bg-red-500/70 p-3 rounded-xl mb-2 w-1/4"
                    >
                      <h3>Task Number {task.taskNumber}</h3>
                      <h2>{task.taskTitle}</h2>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">0 failed tasks</p>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(fltr === "notaccept" || fltr === "all") && (
        <div className="notAccepted mt-20 p-3">
          <h1 className="text-3xl font-bold bg-blue-500/30 mb-5">
            Not Accepted
          </h1>
          {empData.map((elm, id) => {
            const notAccept = elm.tasks.filter((el) => el.newTask === true);
            return (
              <div
                key={id}
                className="mb-6 flex items-center gap-10 bg-slate-500/30 p-3 rounded-xl"
              >
                <h2 className="text-xl font-semibold mb-2">{elm.name}</h2>

                {notAccept.length > 0 ? (
                  notAccept.map((task, idx) => (
                    <div
                      key={idx}
                      className="bg-blue-500/50 p-3 rounded-xl mb-2 w-1/4"
                    >
                      <h3>Task Number {task.taskNumber}</h3>
                      <h2>{task.taskTitle}</h2>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-400 italic">0 failed tasks</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AllTasks;
