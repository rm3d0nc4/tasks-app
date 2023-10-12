import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { useTasksDispatcher } from "../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../core/reducers/task_reducer";
import { TaskService } from "../../core/services/task_service";
import { Link, useParams } from "react-router-dom";
import { Task } from "../TasksPage/interfaces/task";

export function TaskDetailsPage() {
  const dispatch = useTasksDispatcher();
  const [task, setTask] = useState<Task>();
  const [isEditing, setIsEditing] = useState(false);
  const refTaskNameInput = useRef<HTMLInputElement>(null);
  const refTaskDescriptionInput = useRef<HTMLInputElement>(null);

  const { id } = useParams();
  // console.log("Executando1: %s", id);

  const getTaskDetails = useCallback(async () => {
    try {
      const task = await TaskService.getTask(id!);
      setTask(task);
      // console.log("Task: %s", task);
    } catch (error) {
      // console.log("Error: %s", error);
    }
  }, [id]);

  useEffect(() => {
    // console.log("Executando2");
    getTaskDetails();
  }, [getTaskDetails]);

  const handleSaveOrEdit = () => {
    if (isEditing) {
      task!.name = refTaskNameInput.current!.value;
      task!.description = refTaskDescriptionInput.current!.value;
      TaskService.updateTask(task!).then((task) => dispatch({ type: ActionType.UPDATED, payload: { task } }));
    }
    setIsEditing(!isEditing);
  };

  const handleTaskDelete = () => {
    TaskService.deleteTask(task!.id).then(() => dispatch({ type: ActionType.DELETED, payload: { id: task!.id } }));
  };

  useEffect(() => {
    if (isEditing) {
      refTaskNameInput.current!.value = task!.name;
      refTaskDescriptionInput.current!.value = task!.description ?? "";
      refTaskNameInput.current!.focus();
    }
  }, [isEditing]);

  const labelEditOrSave = useMemo(() => {
    return isEditing ? "Salvar" : "Editar";
  }, [isEditing]);

  return (
    <>
      <h2>Task Details</h2>
      <div>
        {isEditing ? <input type="text" ref={refTaskNameInput}/> : <h4>{task?.name}</h4>}

        {isEditing ? <input type="text" ref={refTaskDescriptionInput}/> : <p>{task?.description}</p>}
      </div>

      <Link to="/tasks" onClick={handleTaskDelete}>
        Remover
      </Link>
      {/* <button onClick={handleTaskDelete}>Remover</button> */}
      <button onClick={handleSaveOrEdit}>{labelEditOrSave}</button>
    </>
  );
}
