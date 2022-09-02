import './index.css'

const TodoItem = props => {
  const {title, deleteTodoItemHandler} = props

  return (
    <li className="todo-item-container">
      <p className="todo-item-title">{title}</p>
      <button
        type="button"
        className="todo-item-delete-button"
        onClick={deleteTodoItemHandler}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
