import React from 'react';
import TodoList from '../components/todoList/TodoList';
interface TodoListContainerProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onRemove: (todo: number) => void;
}

function TodoListContainer({ todo, onRemove }: TodoListContainerProps) {
  const handleDelete = () => {
    onRemove(todo.id);
  };
  return <TodoList todo={todo} handleDelete={handleDelete} />;
}

export default TodoListContainer;
