import { FiTrash } from "react-icons/fi";
import { toast } from "react-toastify";

interface Task {
  id: string;
  task: string;
  status: boolean;
}

const Tasks = ({ id, task, status }: Task) => {
  const getTasks = (key: string): Task[] =>
    JSON.parse(localStorage.getItem(key) || "[]");
  const setTasks = (key: string, tasks: Task[]) =>
    localStorage.setItem(key, JSON.stringify(tasks));

  const handleCheck = () => {
    const pendingTasks = getTasks("pendingTasks");
    const completedTasks = getTasks("completedTasks");

    if (status) {
      setTasks(
        "completedTasks",
        completedTasks.filter((t) => t.id !== id)
      );
      setTasks("pendingTasks", [...pendingTasks, { id, task, status: false }]);
      toast("Task mark as pending!!");
    } else {
      setTasks(
        "pendingTasks",
        pendingTasks.filter((t) => t.id !== id)
      );
      setTasks("completedTasks", [
        ...completedTasks,
        { id, task, status: true },
      ]);
      toast.success("Task mark as completed");
    }
  };

  const handleDelete = () => {
    const taskListKey = status ? "completedTasks" : "pendingTasks";
    const updatedTasks = getTasks(taskListKey).filter((t) => t.id !== id);
    setTasks(taskListKey, updatedTasks);
    toast.success("Task deleted successfully");
  };

  return (
    <div
      className="mx-5 grid grid-cols-12 items-center mb-4 max-w-full"
      key={id}
    >
      <input
        type="checkbox"
        id={"checkBox" + id}
        checked={status}
        onChange={handleCheck}
        className="md:h-4 md:w-4 lg:h-6 lg:w-6 col-span-1"
      />
      <label
        htmlFor={"checkBox" + id}
        className="text-xs sm:text-sm lg:text-lg cursor-pointer text-wrap col-span-9"
      >
        {task}
      </label>
      <div className="col-span-2">
        <button
          className="border rounded-md px-1 py-1 md:px-3 md:py-2 bg-red-500 text-white float-right "
          onClick={handleDelete}
        >
          <FiTrash />
        </button>
      </div>
    </div>
  );
};

export default Tasks;
