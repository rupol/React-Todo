import React from "react";
import styled from "styled-components";

const TaskCard = styled.form`
  width: 300px;
  height: 300px;
  background-color: #f37b85;
  margin: 20px 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 5px 10px -2px rgba(33, 33, 33, 0.3);
`;

const TaskName = styled.p`
  font-size: 3.5rem;
  margin: 20px;
`;

const Todo = props => {
  return (
    <TaskCard
      className={`task${props.item.completed ? " completed" : ""}`}
      onClick={props.onClick}
    >
      <TaskName>{props.item.task}</TaskName>
    </TaskCard>
  );
};

export default Todo;
