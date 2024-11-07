import { useEffect, useState } from "react";
import Tasks from "./Tasks";
interface Task {
  id: string;
  task: string;
  status: boolean;
}
const CompletedTasks = () => {
  const [completedTasks, setCompletedTasks] = useState<Task[]>([]);

  useEffect(() => {
    const savedCompletedTasks: Task[] =  JSON.parse( localStorage.getItem("completedTasks") || "[]" );
    if (savedCompletedTasks) {
      setCompletedTasks(savedCompletedTasks);
    }
  }, [completedTasks]);

  return (
    <div className="max-md:mt-4 border-e border-t border-b rounded-e-md h-[65vh] overflow-y-scroll w-full">
      <h3 className="text-center mt-5 text-xl font-semibold">CompletedTasks</h3>
      <div className="mt-10">
       {!completedTasks.length && <p className="text-center text-gray-400">No completed tasks found</p>}

        {
            completedTasks.map(({id, task, status}) => (<Tasks id={id} task={task} status={status}/>))
        }
      </div>
    </div>
  );
};

export default CompletedTasks;
