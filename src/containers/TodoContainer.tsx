import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/todo/Todo';

interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface ReduxState {
  todoItems: TodoItem[];
}

function TodoContainer() {
  const [selected, setSelected] = useState('Doing');

  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
  };

  const todos = useSelector((state: ReduxState) => state.todoItems);

  let doingTodo: TodoItem[] = todos.filter((todo) => todo.done === false);
  let completedTodo: TodoItem[] = todos.filter((todo) => todo.done === true);

  return (
    <Todo
      todos={todos}
      handleSelected={handleSelected}
      selected={selected}
      doingTodo={doingTodo}
      completedTodo={completedTodo}
    />
  );
}

export default TodoContainer;
