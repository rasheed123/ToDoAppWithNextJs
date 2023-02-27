"use client"
import React, { useState } from 'react'
import { TodoComment } from 'typescript';

export default function TodoApps() {
    const[todo, SetTodo] = useState(''); 
    const [todos, SetTodos] = useState([
        { todosText: 'Todo 1', completed: false },
        { todosText: 'Todo 2', completed: true },
        { todosText: 'Todo 3', completed: true },
        { todosText: 'Todo 4', completed: false }
    ]);
    const onClickHandler = (paraElm: any) => {
        console.log("Mara Elm", paraElm);
        const newTodos = todos.map((todo) => {
            console.log("todos", todo);
            if (todo.todosText == paraElm.todosText) {
                todo.completed = !todo.completed; // False hi tu true kardo, True hai tu false kardo
            }
            return todo;
        });
        //console.log(newTodos);
        SetTodos(newTodos);
    };
    const addTodo = ()=>{
        const newTodo = {todosText: todo , completed: false}
        const newTodos = [...todos, newTodo] 
        SetTodos(newTodos);
        SetTodo("");
     }
    const deleteTodo = (deletTodoParam: any) =>{
        const newTodos = todos.filter( (todo)=> { 
            if(todo.todosText == deletTodoParam.todosText) return false; return true;});
            SetTodos(newTodos);
    }
    
    return (
        <>
            <div>TodoApps </div>
           <input placeholder="Add to App" value={todo} onChange={(e)=>(SetTodo(e.target.value))} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((elm) => {
                    return <li style={{
                        color: elm.completed ? "Green" : "red",
                        fontStyle: "oblique",
                        listStyle: "none"
                    }}
                        key={elm.todosText}>
                        <input type="checkbox" checked={elm.completed} onChange={() => { onClickHandler(elm) }} />
                        {elm.todosText}
                        <button style={{background: "red"}} onClick={()=>{deleteTodo(elm)}}  >Delete</button>
                    </li>
                })}
            </ul>
        </>

    );
}
