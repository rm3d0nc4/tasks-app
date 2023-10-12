import { Task } from "../../pages/TasksPage/interfaces/task";

const baseUrl = "http://localhost:3000";

async  function listAllTasks(): Promise<Task[]> {
    const response =  await fetch(`${baseUrl}/tasks`);
    const tasks = await response.json() as Task[];
    return tasks;
}

async function addTask(task: Task): Promise<Task> {
    const response = await fetch(`${baseUrl}/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
    const addedTask = await response.json();
    return addedTask;
}



async function updateTask(task: Task): Promise<Task> {
    const response = await fetch(`${baseUrl}/tasks/${task.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(task)
    });
    const updatedTask = await response.json();
    return updatedTask;
}

async function deleteTask(id: string): Promise<void> {
    const response = await fetch(`${baseUrl}/tasks/${id}`, {
        method: "DELETE"
    });
    const deletedTask = await response.json();
    return deletedTask;
}

async function getTask(id: string): Promise<Task> {
    const response = await fetch(`${baseUrl}/tasks/${id}`);
    const task = await response.json();
    return task;
}

export const TaskService = {
    listAllTasks,
    getTask,
    addTask,
    updateTask,
    deleteTask
}
