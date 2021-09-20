import React, { Component } from 'react';
import AddTodoForm from './components/AddTodoForm';
import Counter from './components/Counter';
import TodoList from './components/TodoList';
import Clock from './components/Clock';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      inputValue: '',
      todoList: []
    }

  }

  updateInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  addTodo = (e) => {
    e.preventDefault()
    const newTodo = {
      'id': this.state.counter,
      'text': this.state.inputValue,
      'done': false
    }

    this.setState({
      counter: this.state.counter + 1,
      todoList: [...this.state.todoList, newTodo],
      inputValue: ''
    })

    console.log(this.state.counter);
  }

  alterTodo = (e, id) => {

    const todos = this.state.todoList
    todos[id].done = e.target.checked
    this.setState({
      todoList: todos
    })
  }

  render() {
    return (
      <div>
        <p className="h2 text-center bg-dark p-2">
          Todo App <br/>
          <Clock />
        </p>

        <div className="d-flex mt-4">

          <div className="col-lg-4 col-sm-11 ms-auto me-auto">
            <Counter count={this.state.counter} />

            <div className="mt-4">
              <TodoList title={'Completed Todo List'}
                todoList={this.state.todoList.filter((todo) => todo.done)}
                alterTodo={this.alterTodo}
                bg={'bg-success'} />
            </div>

          </div>

          <div className="col-lg-4 col-sm-11 ms-auto me-auto">
            <TodoList title={'Todo List'}
              todoList={this.state.todoList.filter((todo) => !todo.done)}
              alterTodo={this.alterTodo}
              bg={'bg-danger'} />
          </div>

          <div className="col-lg-3 col-sm-11 ms-auto me-auto">
            <AddTodoForm
              inputValue={this.state.inputValue}
              updateInputValue={this.updateInputValue}
              addTodo={this.addTodo} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
