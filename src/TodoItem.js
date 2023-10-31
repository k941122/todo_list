import React from "react";

function TodoItem ({index, todo,togleTodo, deleteTodo}) {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : ''}}>
            {todo.text}
            <button onClick={() => togleTodo(index)}>완료</button>
            <button onClick={() => deleteTodo(index)}>삭제</button>
        </li>
    )
}

export default TodoItem;