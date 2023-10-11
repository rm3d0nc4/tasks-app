import { useReducer } from "react";
import { TaskReducer } from "../reducers/task_reducer";
import { TasksContext, TasksDispatchContext } from "../contexts/task_context";

interface TaskProviderProps {
    children: React.ReactNode;
}

export function TasksProvider({children}: TaskProviderProps) {
    const [tasks, dispatch] = useReducer(TaskReducer, {tasks: []});

    return (
        <TasksContext.Provider value={tasks!.tasks}>
            <TasksDispatchContext.Provider value={dispatch!}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}