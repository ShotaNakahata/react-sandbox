import { useContext } from "react";
import { createContext, useReducer } from "react";

const todosList = [
  {
    id: 1,
    content: "店予約する",
    editing: false,
  },
  {
    id: 2,
    content: "卵買う",
    editing: false,
  },
  {
    id: 3,
    content: "郵便出す",
    editing: false,
  },
];
const TodoContext = createContext();
const TodoContextDispatch = createContext();

const TodoProvider = ({ children }) => {
  const reducer = (todos, action) => {
    switch (action.type) {
      case "todo/add":
        return [...todos, action.todo];
      case "todo/delete":
        return todos.filter((todo) => {
          return todo.id !== action.todo.id;
        });
      case "todo/update":
        return  todos.map((_todo) => {
            return action.todo.id === _todo.id ? { ..._todo, ...action.todo } : { ..._todo };
          })
    }
  };
  const [todos, dispatch] = useReducer(reducer, todosList);
  return (
    <TodoContext.Provider value={todos}>
      <TodoContextDispatch.Provider value={dispatch}>
        {children}
        </TodoContextDispatch.Provider>
    </TodoContext.Provider>
  );
};
const useTodoContext =()=> useContext(TodoContext);
const useTodoDispatchContext =()=> useContext(TodoContextDispatch);

export { TodoProvider, useTodoContext, useTodoDispatchContext };
