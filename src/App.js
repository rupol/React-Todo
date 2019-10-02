import React from "react";
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super();
    this.state = {
      todo: []
    };
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = (event, taskName) => {
    event.preventDefault();

    const newTodo = {
      task: taskName,
      id: Date.now(),
      completed: false
    };

    this.setState({
      todo: [...this.state.todo, newTodo]
    });
  };

  markCompleted = (event, taskID) => {
    event.preventDefault();

    this.setState({
      todo: this.state.todo.map(task => {
        if (task.id === taskID) {
          return {
            ...task, // merge existing task
            completed: !task.completed // set completed to opposite value
          };
        } else {
          return task;
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();

    this.setState({
      // filter out completed tasks
      todo: this.state.todo.filter(task => {
        return !task.completed;
      })
    });
  };

  render() {
    return (
      <div>
        <h1>To Do:</h1>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList
          todoArray={this.state.todo}
          markCompleted={this.markCompleted}
        />
        {console.log(this.state.todo)}
      </div>
    );
  }
}

export default App;
