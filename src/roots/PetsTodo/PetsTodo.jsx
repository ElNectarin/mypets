import { useState } from "react";
import PetsTodoInput from "./PetsTodoInput";
import PetsTodoList from "./PetsTodoList";
import "../../index.css"

const PetsTodo = () => {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todos !== "") {
            setTodos([...todos, todo])
            setTodo("")
        }
    }

    const deleteTodo = (text) => {
        const newTodos = todos.filter((todo) => {
            return todo !== text
        })
        setTodos(newTodos)
    }

    return (
        <div className="App">
            <h1>Todo</h1>
            <PetsTodoInput todo={todo} setTodo={setTodo} addTodo={addTodo} />
            <PetsTodoList list={todos} remove={deleteTodo} />
        </div>
    )

}

export default PetsTodo