import React from 'react';
import styles from './TodoList.module.css';
interface TodoListProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  handleDelete: (todo: object) => void;
}

function TodoList({ todo, handleDelete }: TodoListProps) {
  return (
    <div className={styles.todo}>
      <span>{todo.text}</span>
      <button className={styles.delete} type="button" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default TodoList;
