import './index.css'

const TodoItem = props => {
  const {title, deleteTodoItemHandler} = props

  const onClickDeleteHandler = deleteEvent => {
    deleteTodoItemHandler(deleteEvent)
  }

  return (
    <li className="todo-item-container">
      <p className="todo-item-title">{title}</p>
      <button
        type="button"
        className="todo-item-delete-button"
        onClick={onClickDeleteHandler}
      >
        Delete
      </button>
    </li>
  )
}

export default TodoItem
