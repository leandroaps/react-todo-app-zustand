// src/store/todoStore.js
import { create } from 'zustand';

const useTodoStore = create((set) => ({
    todos: [],

    // Add a new todo
    addTodo: (todo) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text: todo, completed: false }]
        })),

    // Remove a todo by ID
    removeTodo: (id) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id)
        })),

    // Toggle a todo's completion status
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        }))
}));

export default useTodoStore;
