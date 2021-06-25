import React from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/todo/Todo';

interface ReduxState {
  todoItems: [];
}

function TodoContainer() {
  const todos = useSelector((state: ReduxState) => state.todoItems);

  return <Todo todos={todos} />;
}

export default TodoContainer;
