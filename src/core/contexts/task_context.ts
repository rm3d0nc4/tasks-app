import { Dispatch, createContext } from "react";
import { Task } from "../interfaces/task";
import { Action } from "../reducers/task_reducer";

export const  TasksContext = createContext<Task[] | undefined>(undefined)
export const TasksDispatchContext = createContext<Dispatch<Action> | undefined>(undefined)
