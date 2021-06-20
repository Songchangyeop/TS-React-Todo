import React from 'react';
import TodoHeader from '../todoHeader/TodoHeader';
import styles from './Todo.module.css';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps {
  onSubmit: (form: string) => void;
  onDelete: (todo: object) => void;
  todos: TodoItem[];
}

function Todo({ onSubmit, onDelete, todos }: TodoProps) {
  return (
    <div className={styles.Todo}>
      <header className={styles.header}>
        <TodoHeader />
      </header>
      <section className={styles.form}>
        <TodoFormContainer onSubmit={onSubmit} />
      </section>
      <section className={styles.list}>
        {todos.map((todo) => (
          <TodoListContainer todo={todo} key={todo.id} onDelete={onDelete} />
        ))}
      </section>
    </div>
  );
}

export default Todo;
