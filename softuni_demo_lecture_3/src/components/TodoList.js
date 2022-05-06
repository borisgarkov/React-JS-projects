import TodoItem from "./TodoItem";
import { useState, useEffect } from "react";
import uniqid from 'uniqid';


export default function TodoList(params) {

    const [todos, setTodos] = useState([
        { id: 1, text: 'Clean my room', isDone: false },
        { id: 2, text: 'Wash the dishes', isDone: false },
        { id: 3, text: 'Go to the gym', isDone: false },
    ])

    const [members, setMembers] = useState([]);

    // console.log('render');

    useEffect(() => {


        // console.log(apiData);
        console.log('mounted main');
    }, []);

    console.log(members);

    const addTodoToTheList = (e) => {

        const todo = {
            id: uniqid(),
            text: e.target.value,
            isDone: false,
        };

        setTodos(oldTodos => [
            ...oldTodos,
            todo
        ]);
    }

    const removeTodoItem = (id) => {
        setTodos(oldTodos => oldTodos.filter(item => item.id !== id));
    }

    const toggleTodoItemClickHandler = (id) => {
        const clikedTodo = todos.filter((item) => (item.id === id))[0];
        const toggledTodo = { ...clikedTodo, isDone: !clikedTodo.isDone }

        setTodos(oldTodos => [...oldTodos.filter(todo => todo.id !== toggledTodo.id), toggledTodo])
    }

    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input type="text" id="todo-name" onBlur={addTodoToTheList} />
            <ul>
                {todos.map(todo =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onRemove={removeTodoItem}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}
            </ul>
        </>
    );
}