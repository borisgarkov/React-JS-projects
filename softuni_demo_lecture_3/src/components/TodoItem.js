import { useEffect } from "react";
import styles from './TodoItem.module.css';

export default function TodoItem({
    todo,
    onRemove,
    onClick
}) {

    useEffect(() => {
        console.log(`${'Mounted'} ${todo.id}`);

        return () => (
            console.log(`${'UNMounted'} ${todo.id}`)
        )
    }, []);

    let todoClassNames = [styles['todo-item']];
    if (todo.isDone) {
        todoClassNames.push(styles['todo-item-finished']);
    }

    return (
        <>
            <li onClick={() => onClick(todo.id)} className={todoClassNames.join(' ')}>
                task: {todo.text}
            </li>
            <button onClick={() => onRemove(todo.id)}>Remove Todo</button>
        </>
    );
}