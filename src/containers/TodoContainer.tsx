import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Todo from '../components/todo/Todo';
import { submit, remove } from '../modules/todo';
interface ReduxState {
  todoItems: [];
}

function TodoContainer() {
  const todos = useSelector((state: ReduxState) => state.todoItems);
  const dispatch = useDispatch();

  let id: number = 0;
  return (
    <Todo
      onSubmit={(text: string) =>
        dispatch(
          submit({
            id: id,
            text: text,
            done: true,
          })
        )
      }
      onRemove={(todo) => dispatch(remove(todo))}
      todos={todos}
    />
  );
}

export default TodoContainer;
