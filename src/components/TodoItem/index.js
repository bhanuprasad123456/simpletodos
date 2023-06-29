// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoDetails, deleteTodo, key} = props
  const {id, title} = todoDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <div>
      <p className="title">{title}</p>
      <button type="button" className="delete-btn" onClick={onDeleteTodo}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem
