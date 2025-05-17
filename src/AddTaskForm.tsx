import { useState } from "react";

interface AddTaskFormProps {
  onNewTask: (name: string) => void;
}

function AddTaskForm({ onNewTask }: AddTaskFormProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = () => {
    if (text.trim()) {
      onNewTask(text);
      setText("");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        className="border p-2 mr-2"
        placeholder="New task name"
        value={text}
        onChange={handleChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;
