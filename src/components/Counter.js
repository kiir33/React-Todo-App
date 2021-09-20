import { BsFillTrashFill } from 'react-icons/bs'
import React from 'react'

function Counter({ completed, remaining, deleteAll }) {
  return (
    <div className="bg-dark rounded p-4">
      Completed: <span className="h4 text-success ms-2">{completed}</span><br />
      Remaining : <span className="h4 text-danger ms-2">{remaining}</span><br />
      <button onClick={deleteAll} className="btn btn-danger text-light col-12 mt-4">
        <BsFillTrashFill className="bi bi-trash me-2" />
        Clear All
      </button>
    </div>
  )
}

export default Counter
