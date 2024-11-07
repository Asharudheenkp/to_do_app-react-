import { useEffect, useState } from "react";
import Tasks from "./Tasks";

interface Task {
  id: string;
  task: string;
  status: boolean;
}
const PendingTasks = () => {
  const [pendingTasks, setPendingTasks] = useState<Task[]>([]);
  useEffect(() => {
    const savedPendingTasks: Task[] = JSON.parse(
      localStorage.getItem("pendingTasks") || "[]"
    );
    console.log(savedPendingTasks);
    
    if (savedPendingTasks) {
      setPendingTasks(savedPendingTasks);
    }
  }, [pendingTasks]);

  return (
    <div className="max-w-full border rounded-s-md h-[65vh] overflow-y-scroll ">
      <h3 className="text-center mt-5 text-xl font-semibold">PendingTasks</h3>
      <div className="mt-10">
        {!pendingTasks.length && <p className="text-center text-gray-400">No pending tasks found</p>}
        {
            pendingTasks.map(({id, task, status}) => (<Tasks id={id} status={status} task={task}/>))
        }
      </div>
    </div>
  );
};

export default PendingTasks;
