import React from 'react';
import styles from './TodoList.module.css';
interface TodoListProps {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  handleDelete: (todo: any) => void;
  handleToggle: (todo: any) => void;
}

function TodoList({ todo, handleDelete, handleToggle }: TodoListProps) {
  return (
    <li className={styles.todo}>
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <div>
        <input
          type="checkbox"
          checked={todo.done}
          readOnly={true}
          onClick={handleToggle}
        />
        <button className={styles.delete} type="button" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default TodoList;
