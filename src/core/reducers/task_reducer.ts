import { Task } from "../../pages/TasksPage/interfaces/task";

interface TaskState {
    tasks: Task[];
}

export enum ActionType {
    LOADED,
    ADDED,
    UPDATED,
    DELETED
}

type TaskLoaded = { type: ActionType.LOADED; payload: { tasks: Task[] } };
type TaskAdded = { type: ActionType.ADDED; payload: { task: Task } };
type TaskUpdated = { type: ActionType.UPDATED; payload: { task: Task } };
type TaskDeleted = { type: ActionType.DELETED; payload: { id: string } };

export type Action = TaskLoaded | TaskAdded | TaskUpdated | TaskDeleted;

const reducer = (state: TaskState, action: Action): TaskState => {
    switch (action.type) {
        case ActionType.LOADED:
            return { tasks: [...action.payload.tasks] };
        case ActionType.ADDED:
            return { tasks: [action.payload.task, ...state.tasks] };
        case ActionType.UPDATED:
            return { tasks: [... state.tasks.map(task => task.id === action.payload.task.id ? action.payload.task : task)]};
        case ActionType.DELETED:
            return { tasks: state.tasks.filter(task => task.id !== action.payload.id) };
        default:
            return state;
    }
}

export {reducer as TaskReducer}

