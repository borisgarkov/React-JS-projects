import React from "react";
import ListItem from "./TodoListItem";


function TodoListFunction() {

    let [todos, setTodos] = React.useState([
        'Clean your room', 'Learn React', 'Learn React Components'
    ])

    let [counter, setCounter] = React.useState(0)

    let [dynamicText, setDynamicText] = React.useState('')

    const inputChangeHandler = (e) => {
        setDynamicText(e.target.value);
    }

    return (
        <React.Fragment>
            <h2>Tasks</h2>
            <h2>Text from input field - {dynamicText}</h2>

            {dynamicText.toLowerCase() == 'pesho'
                ? <h2>yes</h2>
                : <h2>no</h2>
            }

            <ul>
                {todos.map((todo) => { return <ListItem >{todo}</ListItem> })}
                <ListItem>{counter}</ListItem>
            </ul>

            <button onClick={() => { setTodos(['Modified']) }}>Modify</button>
            <button onClick={() => { setCounter(counter + 1) }}>Increase counter</button>
            <input type="text" onChange={inputChangeHandler}></input>

        </React.Fragment >
    )
}

export default TodoListFunction