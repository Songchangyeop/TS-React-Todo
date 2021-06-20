import React from 'react';
import TodoForm from '../components/todoForm/TodoForm';
import { useState } from 'react';
interface FormContainerProps {
  onSubmit: (form: string) => void;
}

function TodoFormContainer({ onSubmit }: FormContainerProps) {
  const [form, setForm] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(form);
    setForm('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setForm(value);
  };

  return (
    <TodoForm
      form={form}
      handleSubmit={handleSubmit}
      onChange={onChange}
    ></TodoForm>
  );
}

export default TodoFormContainer;
