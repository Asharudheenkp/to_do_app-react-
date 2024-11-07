import { useState } from "react";
import { toast } from 'react-toastify';

interface Task {
    id: string;
    task: string;
    status: boolean;
}

const AddTask = () => {
    const [task, setTask] = useState("");

    const handleClick = () => {
        if (!task) {
            toast("Please enter task");
            return;
        }
    
        if (task.length > 50) {
            toast("The task must not be greater than 50 characters.");
            return;
        }
    
        const pendingTasks: Task[] = JSON.parse(localStorage.getItem("pendingTasks") || '[]');
        const newTask = {
            id: Date.now().toString(),
            task,
            status: false
        };
    
        localStorage.setItem("pendingTasks", JSON.stringify([newTask, ...pendingTasks]));
        setTask('');
    };
    

    return (
        <div className="mt-10 flex justify-end items-center mb-5 gap-2">

            <input
            placeholder="Enter task eg: Need to clean the desk"
                type="text"
                onChange={(e) => setTask(e.target.value)}
                value={task}
                className="border h-9 mb-0 px-2 py-1 outline-none w-full sm:w-[500px] rounded-md"
            />
            <button
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={handleClick}
            >
                Add
            </button>
        </div>
    );
};

export default AddTask;
