import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {id, title} = details
  const deletedItem = () => {
    deleteTodo(id)
  }
  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={deletedItem}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
