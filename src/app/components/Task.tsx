import { Trash } from "lucide-react";
import { TaskType } from "../types/Tasks.type";
import { Button } from "./Button";

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
    <li className="flex justify-between items-center py-2">
      <div className="flex items-center w-full">
        <input
          id={title}
          type="checkbox"
          checked={status}
          onChange={() => toggleStatus(id)}
          className=""
        />
        <label htmlFor={title} className="ml-3 block w-full">
          <span className={`${status ? "line-through" : ""}`}>
            {title}
          </span>
        </label>
      </div>
      <Button
        onClick={() => removeTask(id)}
        onlyIcon
        icon={Trash}
        variant="light"
      >
      </Button>
    </li>
  );
};
