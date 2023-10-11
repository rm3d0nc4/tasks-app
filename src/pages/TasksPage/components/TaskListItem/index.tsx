import { useEffect, useMemo, useRef, useState } from "react";
import { useTasksDispatcher } from "../../../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../../../core/reducers/task_reducer";
import { TaskService } from "../../../../core/services/task_service";
import { Task } from "../../interfaces/task";

interface TaskListItemProps {
  task: Task;
}

export function TaskListItem({ task }: TaskListItemProps) {
  const dispatch = useTasksDispatcher();

  const [isEditing, setIsEditing] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);

  const handleSaveOrEdit = () => {
    if (isEditing) {
      task.name = refInput.current!.value;
      TaskService.updateTask(task).then((task) => dispatch({ type: ActionType.UPDATED, payload: { task } }));
    }
    setIsEditing(!isEditing);
  };

  const handleTaskDone = () => {
    task.done = !task.done;
    TaskService.updateTask(task).then((task) => dispatch({ type: ActionType.UPDATED, payload: { task } }));
  };

  const handleTaskDelete = () => {
    TaskService.deleteTask(task.id).then(() => dispatch({ type: ActionType.DELETED, payload: { id: task.id } }));
  };


  useEffect(() => {
    if (isEditing) {
      refInput.current!.value = task.name;
        refInput.current!.focus();
    }
  }, [isEditing]);

  const labelEditOrSave = useMemo(() => {
    return isEditing ? "Salvar" : "Editar";
  }, [isEditing]);

  

  return (
    <div className="task-list-item">
      <input type="checkbox" checked={task.done} onChange={handleTaskDone} />
      {isEditing ? <input type="text" ref={refInput} /> : <p>{task.name}</p>}
      <button onClick={handleTaskDelete}>Remover</button>
      <button onClick={handleSaveOrEdit}>{labelEditOrSave}</button>
    </div>
  );
}
