import React from 'react';
import TodoList from '../components/todoList/TodoList';
interface TodoListContainerProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onDelete: (todo: object) => void;
}

function TodoListContainer({ todo, onDelete }: TodoListContainerProps) {
  const handleDelete = () => {
    onDelete(todo);
  };
  return <TodoList todo={todo} handleDelete={handleDelete} />;
}

export default TodoListContainer;
