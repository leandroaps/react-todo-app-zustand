import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { IToDo } from '../types';

const store = create()(
    devtools(
        persist(
            (set) => ({
                todos: [],
                addTodo: (todo: IToDo) => {
                    set((state: { todos: IToDo[] }) => ({
                        todos: [...state.todos, { id: Date.now(), text: todo, completed: false }]
                    }));
                },
                removeTodo: (id: number) => {
                    set((state: { todos: IToDo[] }) => ({
                        todos: state.todos.filter((todo: IToDo) => todo.id !== id)
                    }));
                },
                toggleTodo: (id: number) => {
                    set((state: { todos: IToDo[] }) => ({
                        todos: state.todos.map((todo: IToDo) =>
                            todo.id === id ? { ...todo, completed: !todo.completed } : todo
                        )
                    }));
                }
            }),
            { name: 'bearStore' }
        )
    )
);
export default store;
