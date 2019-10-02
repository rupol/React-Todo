// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
// import data from "../../data";

class TodoList extends React.Component {
  render(props) {
    return (
      <>
        {this.props.todoArray.map(item => (
          <Todo key={item.id} item={item} />
        ))}
      </>
    );
  }
}

export default TodoList;
