import { Link } from "react-router-dom";
import { useTasksDispatcher } from "../../../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../../../core/reducers/task_reducer";
import { TaskService } from "../../../../core/services/task_service";
import { Task } from "../../interfaces/task";

interface TaskListItemProps {
  task: Task;
}

export function TaskListItem({ task }: TaskListItemProps) {
  const dispatch = useTasksDispatcher();
  const handleTaskDone = () => {
    task.done = !task.done;
    TaskService.updateTask(task).then((task) => dispatch({ type: ActionType.UPDATED, payload: { task } }));
  };

  return (
    <div className="task-list-item">
      <input type="checkbox" checked={task.done} onChange={handleTaskDone} />
      <p>
        <Link to={`/tasks/${task.id}`}>{task.name}</Link>
      </p>
    </div>
  );
}
