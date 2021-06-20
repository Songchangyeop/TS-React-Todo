import React from 'react';
import styles from './App.module.css';
import TodoContainer from './containers/TodoContainer';

function App() {
  return (
    <div className={styles.App}>
      <TodoContainer />
    </div>
  );
}

export default App;
