import { Task } from "./Form";
import TaskRow from "./TaskRow";
import TaskTableHead from "./TaskHead";

type Props = {
  tasks: Task[];
  onDeleteTask: (id: number) => void;
  onEditeTask: (id: number) => void;
};

export default function TaskTable({ tasks, onDeleteTask, onEditeTask }: Props) {
  return (
    <table className="w-[90%] items-center text-center">
      <TaskTableHead />
      <tbody>
        {tasks.map((task) => (
          <TaskRow
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onEditeTask={onEditeTask}
          />
        ))}
      </tbody>
    </table>
  );
}
