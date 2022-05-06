function ListItem(props) {
    if (props.children === 'Learn React Components') {
        return <li style={{ color: 'red' }}>{props.children}</li>
    }

    return (
        <li style={{ color: 'green' }}>{props.children}</li>
    )
}

export default ListItem