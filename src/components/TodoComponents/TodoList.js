import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`;

class TodoList extends React.Component {
  render(props) {
    return (
      <FlexContainer>
        {this.props.todoArray.map(item => (
          <Todo
            key={item.id}
            item={item}
            onClick={event => this.props.markCompleted(event, item.id)}
          />
        ))}
      </FlexContainer>
    );
  }
}

export default TodoList;
