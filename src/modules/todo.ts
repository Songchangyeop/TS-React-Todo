import { ActionType, createAction, createReducer } from 'typesafe-actions';

interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}

interface ToDosState {
  todoItems: TodoItemDataParams[];
}

const SUBMIT = 'todo/SUBMIT';
const REMOVE = 'todo/REMOVE';
const TOGGLE = 'todo/TOGGLE';

export const submit = createAction(SUBMIT)<TodoItemDataParams>();
export const remove = createAction(REMOVE)<number>();
export const toggle = createAction(TOGGLE)<number>();

const Actions = { submit, remove, toggle };
type TodoActions = ActionType<typeof Actions>;

const initialState: ToDosState = {
  todoItems: [],
};

const todo = createReducer<ToDosState, TodoActions>(initialState, {
  [SUBMIT]: (state, action) => ({
    ...state,
    todoItems: [...state.todoItems, action.payload],
  }),
  [REMOVE]: (state, action) => ({
    ...state,
    todoItems: state.todoItems.filter(
      (todo: { id: number }) => todo.id !== action.payload
    ),
  }),
  [TOGGLE]: (state, action) => ({
    ...state,
    todoItems: state.todoItems.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    ),
  }),
});

export default todo;
