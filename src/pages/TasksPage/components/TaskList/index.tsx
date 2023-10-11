import { useEffect } from "react";
import { TaskListItem } from "../TaskListItem";
import { TaskService } from "../../../../core/services/task_service";
import { useTasks } from "../../../../core/hooks/use_tasks";
import { useTasksDispatcher } from "../../../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../../../core/reducers/task_reducer";

export default function TaskList() {
  const loadedTasks = useTasks();
  const dispatch = useTasksDispatcher();

  useEffect(() => {
    TaskService.listAllTasks().then((tasks) => {
      dispatch({ type: ActionType.LOADED, payload: { tasks } });
    });
  }, []);

  return (
    <div>
      <h1>TaskList</h1>

      {loadedTasks.length === 0 ? (
        <p>Nenhuma tarefa cadastrada</p>
      ) : (
        <ul>
          {loadedTasks.map((task) => (
            <li key={task.id}>
              <TaskListItem task={task} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
