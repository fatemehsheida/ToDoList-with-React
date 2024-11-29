import TaskTable from "./TaskTable";
import FormTask from "./Form";
import { useState } from "react";
import { Task } from "./Form";

export function ToDoList() {
  const [SelectedTaskInEditeMode, setSelectedTaskInEditMode] = useState<
    number | null
  >(null);

  const [tasks, setTask] = useState<Task[]>([
    { id: 1, text: "1 Task" },
    { id: 2, text: "2 Task" },
    { id: 3, text: "3 Task" },
  ]);
  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newTask = Object.fromEntries(formData.entries()) as unknown as Task;
    console.log(newTask);
    const max = Math.max(...tasks.map((task) => task.id));
    newTask.id = max + 1;
    console.log(newTask);
    console.log(max);
    setTask([...tasks, newTask]);
    event.currentTarget.reset();
  };

  const HandleEdite = (event: React.FormEvent<HTMLFormElement>, id: number) => {
    event.preventDefault();
    const SelectedTaskIndex = tasks.findIndex((value) => value.id == id);
    const BackUpTasks = tasks;
    const formData = new FormData(event.currentTarget);
    const newTask = Object.fromEntries(formData.entries()) as unknown as Task;
    BackUpTasks[SelectedTaskIndex].text = newTask.text;
    setTask([...BackUpTasks]);
    event.currentTarget.reset();
    setSelectedTaskInEditMode(null);
  };
  const handleDeleteTask = (id: number) => {
    setTask(tasks.filter((task) => task.id !== id));
  };
  const handleSelectedTaskInEditMode = (id: number) => {
    const selectedTaskIndex = tasks.findIndex((value) => value.id == id);
    setSelectedTaskInEditMode(selectedTaskIndex);
  };

  return (
    <div className="container w-full h-screen m-auto flex justify-center items-center content-center bg-indigo-950 ">
      
      <div className="bg-slate-100 w-[40%] flex flex-col justify-center items-center content-center py-5 gap-8 px-5 rounded-3xl">
      <h1 className="w-full px-4 text-2xl font-bold text-indigo-950">To-Do List</h1>

        <FormTask
          onSubmit={HandleSubmit}
          onEditForm={HandleEdite}
          task={
            SelectedTaskInEditeMode
              ? tasks[SelectedTaskInEditeMode]
              : SelectedTaskInEditeMode == 0
              ? tasks[SelectedTaskInEditeMode]
              : undefined
          }
        />
        <TaskTable
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onEditeTask={handleSelectedTaskInEditMode}
        />
      </div>
    </div>
  );
}
