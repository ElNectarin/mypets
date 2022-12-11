import "../../index.css"

const PetsTodoInput = ({ todo, setTodo, addTodo }) => {
    return (
        <div className="input-wrapper">
                <input
                    type="text"
                    name="todo"
                    placeholder="Todo"
                    value={todo}
                    onChange={(e) => {
                        setTodo(e.target.value)
                    }}
                />
                <button className="add-button" onClick={addTodo}>Add</button>
        </div>
    )
}

export default PetsTodoInput