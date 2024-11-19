import { Button, Input, List, ListItem, Typography } from '@mui/material';
import store from '@store/Store';
import { IToDo, IToDoList } from '@typing/index';
import { memo, useState } from 'react';

const TodoList = () => {
    const { todos, addTodo, removeTodo, toggleTodo }: IToDoList = store();

    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim()) {
            addTodo(newTodo);
            setNewTodo(''); // Clear the input after adding
        }
    };

    return (
        <div>
            <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Todo List
            </Typography>
            <Input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new todo"
            />
            <Button onClick={handleAddTodo}>Add</Button>

            <List>
                {todos.map((todo: IToDo) => (
                    <ListItem key={todo.id}>
                        <Typography
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                            onClick={() => toggleTodo(todo.id)}
                        >
                            {todo.text}
                        </Typography>
                        <Button onClick={() => removeTodo(todo.id)}>Delete</Button>
                    </ListItem>
                ))}
            </List>
        </div>
    );
};

export default memo(TodoList);
