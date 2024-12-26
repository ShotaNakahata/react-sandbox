import Item from "./Item";
const List = ({todos, deleteTodo,updataTodos}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => <Item todo={todo} key={todo.id} complete={complete} updataTodos={updataTodos}
            ></Item>)}
        </div>
    );
}

export default List;