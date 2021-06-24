import { ActionType, createAction, createReducer } from 'typesafe-actions';

interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}

interface RemoveAction {
  id: number;
}

interface ToDosState {
  todoItems: TodoItemDataParams[];
}

const SUBMIT = 'todo/SUBMIT';
const REMOVE = 'todo/REMOVE';

export const submit = createAction(SUBMIT)<TodoItemDataParams>();
export const remove = createAction(REMOVE)<RemoveAction>();

const Actions = { submit, remove };
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
      (todo: { id: number }) => todo.id !== action.payload.id
    ),
  }),
});

export default todo;
