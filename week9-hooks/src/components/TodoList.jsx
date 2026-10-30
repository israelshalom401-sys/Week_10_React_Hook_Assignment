import { useState } from "react";

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    function addTodo() {
        const task = input.trim();

        if (task === '') return;

        setTodos([...todos,task]);
        setInput('');
    }

    function deleteTodo(indexToDelete) {
       const updatedTodos =  todos.filter(
        (todo, index) => index !==indexToDelete 
    );
     
     setTodos(updatedTodos);

    }

    return (
        <div>
            <h2>Todo List</h2>

            <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Enter a task"
            />

            <button onClick={addTodo}>Add</button>

            <ul>
                {todos.map((todo, index) =>(
                    <li key={index}>
                        {todo} 

                        <button
                        type="button" 
                        onClick={() => deleteTodo(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;