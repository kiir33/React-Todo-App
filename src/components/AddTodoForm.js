import React from 'react'

function AddTodoForm({ inputValue, updateInputValue, addTodo }) {
  return (
    <div>
      <div className="text-center mt-4 p-4 bg-dark rounded">
        <p className="h5">Add New Todo</p>

        <form action="#">
          <textarea rows="3" className="form-control mt-4"
            placeholder="Enter your Todo here..."
            value={inputValue}
            onChange={(e) => updateInputValue(e)} />

          <input type="submit" value="Add Todo" className="btn btn-success mt-3 col-12"
            onClick={(e)=>addTodo(e)} />
        </form>

      </div>
    </div>
  )
}

export default AddTodoForm

