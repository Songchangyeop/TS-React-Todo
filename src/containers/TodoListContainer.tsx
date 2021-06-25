import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import TodoList from '../components/todoList/TodoList';
import { remove, toggle } from '../modules/todo';
interface TodoListContainerProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
}

function TodoListContainer({ todo }: TodoListContainerProps) {
  const dispatch = useDispatch();

  const onRemove = useCallback(
    (todo: number) => dispatch(remove(todo)),
    [dispatch]
  );

  const onToggle = useCallback(
    (todo: number) => dispatch(toggle(todo)),
    [dispatch]
  );

  const handleDelete = () => {
    onRemove(todo.id);
  };

  const handleToggle = () => {
    onToggle(todo.id);
  };

  return (
    <TodoList
      todo={todo}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );
}

export default React.memo(TodoListContainer);
