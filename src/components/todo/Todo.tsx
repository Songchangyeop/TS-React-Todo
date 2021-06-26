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
  handleSelected: (e: React.MouseEvent<HTMLButtonElement>) => void;
  selected: string;
  doingTodo: TodoItem[];
  completedTodo: TodoItem[];
}

function Todo({
  todos,
  handleSelected,
  selected,
  doingTodo,
  completedTodo,
}: TodoProps) {
  return (
    <div className={styles.Todo}>
      <header className={styles.header}>
        <TodoHeader />
      </header>
      <section className={styles.form}>
        <TodoFormContainer />
      </section>
      <div className={styles.buttons}>
        <button
          className={`${styles.button} ${
            selected === 'Doing' && styles.btnClicked
          }`}
          value="Doing"
          onClick={handleSelected}
        >
          Doing
        </button>
        <button
          className={`${styles.button} ${
            selected === 'Completed' && styles.btnClicked
          }`}
          value="Completed"
          onClick={handleSelected}
        >
          Completed
        </button>
        <button
          className={`${styles.button} ${
            selected === 'ViewAll' && styles.btnClicked
          }`}
          value="ViewAll"
          onClick={handleSelected}
        >
          View All
        </button>
      </div>

      <ul className={styles.list}>
        {selected === 'ViewAll' &&
          todos.map((todo) => <TodoListContainer todo={todo} key={todo.id} />)}
        {selected === 'Doing' &&
          doingTodo.map((todo) => (
            <TodoListContainer todo={todo} key={todo.id} />
          ))}
        {selected === 'Completed' &&
          completedTodo.map((todo) => (
            <TodoListContainer todo={todo} key={todo.id} />
          ))}
      </ul>
    </div>
  );
}

export default Todo;
