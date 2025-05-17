import { useState } from "react";
import AddTaskForm from "./AddTaskForm";
import TodoItem from "./TodoItem";
import Modal from "./Modal";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const INITIAL_TASK_LIST: Task[] = [
  { id: "1", name: "Eat", completed: false },
  { id: "2", name: "Sleep", completed: false },
  { id: "3", name: "Repeat", completed: false },
];

function App() {
  const [taskList, setTaskList] = useState<Task[]>(INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const addTask = (name: string) => {
    setTaskList((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, completed: false },
    ]);
    setIsModalOpen(false);
  };

  const toggleTask = (id: string) => {
    setTaskList((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: string) => {
    setTaskList((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <main className="m-4">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Task
      </button>

      <Modal
        headerLabel="Add New Task"
        isOpen={isModalOpen}
        onCloseRequested={() => setIsModalOpen(false)}
      >
        <AddTaskForm onNewTask={addTask} />
      </Modal>

      <section>
        <h1 className="text-xl font-bold mt-6 mb-2">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
