import { useRef } from "react";
import { useTasksDispatcher } from "../../core/hooks/use_tasks_dispatcher";
import { ActionType } from "../../core/reducers/task_reducer";
import { Task } from "../../core/interfaces/task";
import { TaskService } from "../../core/services/task_service";
import { ulid } from "ulid";
import { useNavigate } from "react-router-dom";

export function TaskFormPage() {
    const inputTaskNameRef = useRef<HTMLInputElement>(null);
    const inputTaskDescriptionRef = useRef<HTMLInputElement>(null);
    const dispatch = useTasksDispatcher();
    const navigate = useNavigate();


    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const taskName = inputTaskNameRef.current!.value;
        const taskDescription = inputTaskDescriptionRef.current!.value;
        const newTask: Task = {
            id: ulid(),
            name: taskName, 
            description: taskDescription,
            done: false,
            createdAt: new Date(),
        };
        inputTaskNameRef.current!.value = "";
        inputTaskDescriptionRef.current!.value = "";
        inputTaskNameRef.current!.focus();
        TaskService.addTask(newTask).then((task) => dispatch({type: ActionType.ADDED, payload: {task}}));
        navigate("/tasks");

        

    }

    return (
        <div>
            <h2>Task Form</h2>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Nome da tarefa" ref={inputTaskNameRef}/>
                <input type="text" placeholder="Descrição da tarefa" ref={inputTaskDescriptionRef}/>
                <input type="submit" value={'Adicionar'}/>
            </form>
        </div>
    );
}