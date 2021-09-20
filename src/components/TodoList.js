import React from 'react'
import { BsFillTrashFill } from 'react-icons/bs'

const TodoList = ({ alterTodo, todoList, title, bg, deleteTodo }) => {

  return (
    <div className={`card ${bg} p-2`}>

      <p className="text-center h5 bg-light text-dark m-2 p-2 rounded">
        {title}
      </p>

      {
        todoList.length > 0 ?

          todoList.map((todo) => (
            <div key={todo.id} className="d-flex form-check border-bottom border-light p-1 m-2">
              <input type="checkbox" checked={todo.done} className="form-check-input m-auto"
                onChange={(e) => alterTodo(e, todo.id)} />

              <p className="text-justify col-10 m-auto">{todo.text}</p>

              <BsFillTrashFill className="bi bi-trash m-auto"
                onClick={e => deleteTodo(todo.id)} />
            </div>
          )) :
          <p className="text-center pt-4 pb-4 mt-4">No Todo's in your list!</p>
      }

    </div>
  )
}

export default TodoList
