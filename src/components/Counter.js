import React from 'react'

function Counter({count}) {
  return (
    <div className="text-center bg-dark rounded p-2">
      Total Count: <span className="h4 ms-2">{count}</span>
    </div>
  )
}

export default Counter
