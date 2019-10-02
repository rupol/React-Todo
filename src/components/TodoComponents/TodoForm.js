import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({
      value: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(event, this.state.value);

    this.setState({
      value: ""
    });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Add a task..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Add Todo</button>
        <button>Clear Completed</button>
      </form>
    );
  }
}

export default TodoForm;
