import { Task } from "./Form";

type Props = {
  task: Task;
  onDeleteTask: (id: number) => void;
  onEditeTask: (id: number) => void;
};

export default function TaskRow({ task, onDeleteTask, onEditeTask }: Props) {
  console.log(task);

  return (
    <tr>
      <td>
        <input type="radio" name="check" id="check"  className="accent-orange-400/25 cursor-pointer"/>
      </td>
      {/* <td>{task.id}</td> */}
      <td>{task.text}</td>
      <td>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </td>
      <td>
        <button onClick={() => onEditeTask(task.id)}>Edit</button>
      </td>
    </tr>
  );
}
