import { useContext } from "react";
import { TasksDispatchContext } from "../contexts/task_context";

export const useTasksDispatcher = () => {
    return useContext(TasksDispatchContext)!;
}