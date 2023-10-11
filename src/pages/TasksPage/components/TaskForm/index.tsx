import { useRef } from "react";
import { useTasksDispatcher } from "../../../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../../../core/reducers/task_reducer";
import { Task } from "../../interfaces/task";
import { TaskService } from "../../../../core/services/task_service";
import { ulid } from "ulid";

export function TaskForm() {
    const inputTaskNameRef = useRef<HTMLInputElement>(null);
    const dispatch = useTasksDispatcher();


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const taskName = inputTaskNameRef.current!.value;
        const newTask: Task = {
            id: ulid(),
            name: taskName, 
            description: "...",
            done: false,
            createdAt: new Date(),
        };
        inputTaskNameRef.current!.value = "";
        inputTaskNameRef.current!.focus();
        TaskService.addTask(newTask).then((task) => dispatch({type: ActionType.ADDED, payload: {task}}));

    }

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Nome da tarefa" ref={inputTaskNameRef}/>
                <input type="submit" value={'Adicionar'}/>
            </form>
        </div>
    );
}