export interface Task {
    id: string;
    name: string;
    description?: string;
    done: boolean;
    createdAt: Date;
}