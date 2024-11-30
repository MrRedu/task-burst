import { Trash } from "lucide-react";
import { TaskType } from "../types/Tasks.type";

export const Task = ({
  id,
  title,
  status,
  // createdAt,
  // updatedAt,
  toggleStatus,
  removeTask,
}: TaskType & { toggleStatus: (id: string) => void; removeTask: (id: string) => void; }): JSX.Element => {
  return (
    <li className="flex justify-between items-center py-4">
      <div className="flex items-center">
        <input
          id={title}
          type="checkbox"
          checked={status}
          onChange={() => toggleStatus(id)}
          className=""
        />
        <label htmlFor={title} className="ml-3 block">
          <span
            className={`${status ? "line-through" : ""}`}
          >
            {title}
          </span>
        </label>
      </div>
      <button
        onClick={() => removeTask(id)}
        className=""
      >
        <Trash size={20} />
      </button>
    </li>
  );
};
