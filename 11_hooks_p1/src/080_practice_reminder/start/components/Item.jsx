import { useState } from "react";

const Item = ({ todo, complete, updataTodos }) => {
  const [editingContent, setEditingContent] = useState(todo.content);
  const changeContent = (e) => {
    setEditingContent(e.target.value);
  };
  const toggleEditMode = () => {
    const newTodo = { ...todo, editing: !todo.editing };
    updataTodos(newTodo);
  };
  const confirmContent = (e) => {
    e.preventDefault()
    const newTodo = { ...todo, editing: !todo.editing ,content: editingContent};
    updataTodos(newTodo);
  };
  return (
    <div key={todo.id}>
      <button onClick={() => complete(todo.id)}>完了</button>
      <form onSubmit={confirmContent} style={{ display: "inline" }}>
      {todo.editing ? (
        <input
          value={editingContent}
          type="text"
          onChange={changeContent}
        ></input>
      ) : (
        <span onDoubleClick={toggleEditMode}>{todo.content}</span>
      )}
      </form>
    </div>
  );
};

export default Item;
