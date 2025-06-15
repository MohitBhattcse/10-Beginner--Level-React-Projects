import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = () => {
        setTodos((todos) => {
            return todos.concat({
                text: inputValue,
                id: Math.floor(Math.random() * 100000), // More unique ID
            });
        });
        setInputValue('');
    };

    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };

    return (
        <div className="todo-container">
            <input
                type="text"
                placeholder="Enter a todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit Todo</button>
            <ul>
                {todos.map(({ text, id }) => (
                    <li key={id}>
                        <span>{text}</span>
                        <button onClick={() => removeTodo(id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
