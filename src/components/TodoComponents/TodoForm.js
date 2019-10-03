import React from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 65%;
  height: 8rem;
  border: none;
  outline: none;
  padding: 0 2rem;
  font-size: 3rem;
  font-family: "Mansalva", cursive;
  background-color: #faac40;
  color: #000;
  &::placeholder {
    color: #4e4e4e;
  }
`;

const AddButton = styled.button`
  height: 8.2rem;
  width: 5rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #b5b5b5;
`;

const ClearButton = styled.button`
  height: 8.2rem;
  width: 7rem;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-align: center;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: none;
  background-color: #ce6d5d;
`;

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
      <Form>
        <Input
          type="text"
          placeholder="Add a task..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <AddButton onClick={this.handleSubmit}>
          <i class="far fa-plus-square fa-lg"></i>
        </AddButton>
        <ClearButton onClick={this.props.clearCompleted}>
          <i class="far fa-minus-square fa-lg"></i>
        </ClearButton>
      </Form>
    );
  }
}

export default TodoForm;
