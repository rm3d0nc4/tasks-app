import { TasksProvider } from "../../core/providers/task_provider";
import { TaskForm } from "./components/TaskForm";
import TaskList from "./components/TaskList";

export function TaskPage() {
  return (
    <TasksProvider>
      <div>
        <h1>Tasks Page</h1>
        <TaskForm />
        <TaskList />
      </div>
    </TasksProvider>
  );
}
