import { useContext } from "react"
import { TasksContext } from "../contexts/task_context";

export const useTasks = () => {
    return useContext(TasksContext)!;
}