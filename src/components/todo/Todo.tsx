import React from 'react';
import TodoHeader from '../todoHeader/TodoHeader';
import styles from './Todo.module.css';
import TodoFormContainer from '../../containers/TodoFormContainer';
import TodoListContainer from '../../containers/TodoListContainer';
import { useState } from 'react';
interface TodoItem {
  id: number;
  text: string;
  done: boolean;
}

interface TodoProps {
  todos: TodoItem[];
}

function Todo({ todos }: TodoProps) {
  const [selected, setSelected] = useState('Doing');
  const handleSelected = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelected(e.currentTarget.value);
  };

  let doingTodo = todos.filter((todo) => todo.done === false);
  let completedTodo = todos.filter((todo) => todo.done === true);
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
          className={styles.button}
          value="Doing"
          onClick={handleSelected}
        >
          Doing
        </button>
        <button
          className={styles.button}
          value="Completed"
          onClick={handleSelected}
        >
          Completed
        </button>
        <button
          className={styles.button}
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
