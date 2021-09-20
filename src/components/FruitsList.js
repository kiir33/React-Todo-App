import React, { Component } from 'react'

export class FruitsList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       fruits = [
         {
           id:200,
           name: 'mango',
           color: 'green'
         },
         {
           id:200,
           name: 'mango',
           color: 'green'
         },
       ]
    }
  }
  

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default FruitsList
