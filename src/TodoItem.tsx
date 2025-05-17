import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TodoItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

function TodoItem({ task, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="flex items-center gap-2 my-2">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.name}
        </span>
      </label>
      <button onClick={() => onDelete(task.id)}>
        <FontAwesomeIcon
          icon={faTrash}
          className="text-gray-500 hover:text-red-600"
          title="Delete task"
        />
      </button>
    </li>
  );
}

export default TodoItem;
