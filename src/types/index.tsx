export interface IToDo {
    id: number;
    completed: boolean;
    text: string;
}

export interface IToDoList {
    todos: IToDo[];
    addTodo: (param: string) => void;
    removeTodo: (param: number) => void;
    toggleTodo: (param: number) => void;
}
