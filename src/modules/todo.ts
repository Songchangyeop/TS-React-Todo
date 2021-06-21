import { ActionType, createAction, createReducer } from 'typesafe-actions';

const ONSUBMIT = 'todo/ONSUBMIT';
const ONDELETE = 'todo/ONDELETE';

let id: number = 1;
export const onSubmit = createAction(ONSUBMIT, (text) => ({
  id: id,
  text: text,
  done: true,
}));
export const onDelete = createAction(ONDELETE, (todo) => todo);

const Actions = { onSubmit, onDelete };
type TodoActions = ActionType<typeof Actions>;

interface TodoItemDataParams {
  id: number;
  text: string;
  done: boolean;
}

interface ToDosState {
  todoItems: TodoItemDataParams[];
}

const initialState: ToDosState = {
  todoItems: [],
};

const todo = createReducer<ToDosState, TodoActions>(initialState, {
  [ONSUBMIT]: (
    state: { todoItems: object[] },
    action: { payload: object }
  ) => ({
    ...state,
    todoItems: [...state.todoItems, action.payload],
  }),
  [ONDELETE]: (
    state: { todoItems: any[] },
    action: { payload: { id: number } }
  ) => ({
    ...state,
    todoItems: state.todoItems.filter(
      (todo: { id: number }) => todo.id !== action.payload.id
    ),
  }),
});

export default todo;
