import React from 'react';
import styles from './TodoHeader.module.css';

function TodoHeader() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>Todo-List</header>
      <span className={styles.description}>what is your next plan?</span>
    </div>
  );
}

export default TodoHeader;
