import React, { useCallback } from 'react';
import TodoForm from '../components/todoForm/TodoForm';
import { useState } from 'react';
import { submit } from '../modules/todo';
import { useDispatch } from 'react-redux';

function TodoFormContainer() {
  const [form, setForm] = useState('');
  const [id, setId] = useState(1);

  const dispatch = useDispatch();

  const onSubmit = useCallback(
    (text) => {
      dispatch(submit({ id: id, text: text, done: false }));
      setId(id + 1);
    },
    [dispatch, id]
  );

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
