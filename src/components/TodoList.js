import React from 'react'

const TodoList = ({ alterTodo, todoList, title, bg }) => {

  return (
    <div className={`card ${bg} p-2`}>

      <p className="text-center h5 bg-light text-dark m-2 p-2 rounded">
        {title}
      </p>


      {
        todoList.length > 0 ?

          todoList.map((todo) => (
            <div key={todo.id} className="d-flex p-2">
              <input type="checkbox" checked={todo.done} className="col-1 mt-1"
                onChange={(e) => alterTodo(e, todo.id)} />

              <p className="col-11"> {todo.text} </p>
            </div>
          )) :
          <p className="text-center pt-4 pb-4 mt-4">No Todo's in your list!</p>
      }

    </div>
  )
}

export default TodoList
