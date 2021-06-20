import React from 'react';
import styles from './TodoForm.module.css';

interface FormProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  form: string;
}

function TodoForm({ handleSubmit, onChange, form }: FormProps) {
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input value={form} onChange={onChange} className={styles.input} />
      <button type="submit" className={styles.button}>
        ADD
      </button>
    </form>
  );
}

export default TodoForm;
