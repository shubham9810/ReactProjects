import Form from "../component/Form.jsx";
import TodoList from "../component/TodoList.jsx";
import { useState } from "react";
import Footer from "./footer.jsx";
export default function Todo() {
    const [todos , setTodos] = useState([]);
    const completedTodos = todos.filter((todo)=>todo.done === true).length;
    const totalTodos = todos.length;
    
  return (
    <div>
      <Form  todos = {todos} setTodos = {setTodos}/>
      <TodoList todos = {todos} setTodos = {setTodos}/>
      <Footer completedTodos = {completedTodos} totalTodos={totalTodos}/>
    </div>
  )
}
