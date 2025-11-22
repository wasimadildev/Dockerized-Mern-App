import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:4000/api/todos';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        try {
            const response = await axios.get(API_URL);
            setTodos(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    };

    const addTodo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(API_URL, { description });
            setTodos([...todos, response.data]);
            setDescription('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const toggleTodo = async (id, completed) => {
        try {
            const response = await axios.put(`${API_URL}/${id}`, { completed: !completed });
            setTodos(todos.map(todo => (todo.id === id ? response.data : todo)));
        } catch (error) {
            console.error('Error updating todo:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await axios.delete(`${API_URL}/${id}`);
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Todo List</h2>
            <form onSubmit={addTodo} className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Add a new todo"
                    required
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Add
                </button>
            </form>
            <ul className="space-y-3">
                {todos.map(todo => (
                    <li
                        key={todo.id}
                        className={`flex items-center justify-between p-3 rounded-lg border ${todo.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-200 hover:border-blue-300'
                            } transition-all duration-200`}
                    >
                        <span
                            onClick={() => toggleTodo(todo.id, todo.completed)}
                            className={`flex-1 cursor-pointer select-none ${todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'
                                }`}
                        >
                            {todo.description}
                        </span>
                        <button
                            onClick={() => deleteTodo(todo.id)}
                            className="ml-2 text-red-500 hover:text-red-700 p-1 rounded-md hover:bg-red-50 transition-colors"
                            aria-label="Delete todo"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length === 0 && (
                <p className="text-center text-gray-400 mt-4 text-sm">No todos yet. Add one above!</p>
            )}
        </div>
    );
};

export default TodoApp;
