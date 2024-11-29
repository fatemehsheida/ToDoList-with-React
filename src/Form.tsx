export type Task = {
  id: number;
  text: string;
};

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onEditForm: (event: React.FormEvent<HTMLFormElement>, id: number) => void;
  task?: Task;
};
export default function FormTask({ onSubmit, task, onEditForm }: Props) {
  
  return (
    
    <form
      onSubmit={
        task
          ? (e) => {
              onEditForm(e, task?.id);
            }
          : onSubmit
      }
      className="flex flex-row gap-2 w-[80%] bg-slate-500 rounded-full justify-end"
    >
      <div className="flex flex-row gap-2">
          <input className="bg-transparent w-[70%] text-slate-100 outline-none font-bold pl-5 "
            type="text"
            name="text"
            id="task"
            placeholder="add a task..."
            defaultValue={task?.text}
          />
          <button className="items-center w-[30%] text-center rounded-full bg-amber-600 px-2 py-2 text-sm font-semibold text-slate-50" type="submit">Add Task</button>

      </div>
    </form>
  );
}
