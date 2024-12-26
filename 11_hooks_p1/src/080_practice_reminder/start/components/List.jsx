import Item from "./Item";
import { useTodoContext } from "../context/TodoContext";
const List = () => {
  const todos = useTodoContext();
  return (
    <div>
      {todos.map((todo) => (
        <Item todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default List;
