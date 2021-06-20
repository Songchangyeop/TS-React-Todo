import React from 'react';
import styles from './TodoHeader.module.css';

function TodoHeader() {
  return (
    <div className={styles.container}>
      <span className={styles.header}>Todo-List</span>
      <span className={styles.description}>what is your next plan?</span>
    </div>
  );
}

export default TodoHeader;
