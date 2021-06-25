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
  todos: TodoItem[];
}

function Todo({ todos }: TodoProps) {
  return (
    <div className={styles.Todo}>
      <header className={styles.header}>
        <TodoHeader />
      </header>
      <section className={styles.form}>
        <TodoFormContainer />
      </section>
      <ul className={styles.list}>
        {todos.map((todo) => (
          <TodoListContainer todo={todo} key={todo.id} />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
