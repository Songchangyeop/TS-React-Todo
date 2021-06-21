import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import Todo from '../components/todo/Todo';

function TodoContainer() {
  const [id, setId] = useState(0);

  const onSubmit = useCallback(
    (text: string) => {
      setTodos([
        ...todos,
        {
          id: id,
          text: text,
          done: true,
        },
      ]);
      setId(id + 1);
    },
    [id, todos]
  );

  const onDelete = useCallback((todo) => {
    setTodos((todos) => todos.filter((todos) => todos.id !== todo.id));
  }, []);
  return <Todo onSubmit={onSubmit} onDelete={onDelete} todos={todos} />;
}

export default TodoContainer;
